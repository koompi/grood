import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import bcrypt from "bcryptjs";
import { TRPCError } from "@trpc/server";

// Input validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().min(1),
  phone: z.string().optional(),
});

const updateProfileSchema = z.object({
  name: z.string().min(1).optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
});

export const usersRouter = router({
  // Register new customer
  register: publicProcedure.input(registerSchema).mutation(async ({ ctx, input }) => {
    // Check if user already exists
    const existingUser = await ctx.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (existingUser) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "An account with this email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(input.password, 12);

    // Create user
    const user = await ctx.prisma.user.create({
      data: {
        email: input.email,
        password: hashedPassword,
        name: input.name,
        phone: input.phone,
        role: "customer",
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }),

  // Get current user profile
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: { id: ctx.session.user.id },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        address: true,
        role: true,
        createdAt: true,
      },
    });

    return user;
  }),

  // Update user profile
  updateProfile: protectedProcedure
    .input(updateProfileSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: input,
        select: {
          id: true,
          email: true,
          name: true,
          phone: true,
          address: true,
        },
      });

      return user;
    }),

  // Get user's orders
  myOrders: protectedProcedure.query(async ({ ctx }) => {
    const orders = await ctx.prisma.order.findMany({
      where: { userId: ctx.session.user.id },
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });

    return orders;
  }),

  // Admin: List all users
  list: protectedProcedure
    .input(
      z.object({
        role: z.enum(["admin", "customer"]).optional(),
        search: z.string().optional(),
        limit: z.number().int().positive().default(50),
        offset: z.number().int().nonnegative().default(0),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      // Check if user is admin
      if (ctx.session.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only admins can view user list",
        });
      }

      const where: Record<string, unknown> = {};

      if (input?.role) {
        where.role = input.role;
      }

      if (input?.search) {
        where.OR = [
          { name: { contains: input.search } },
          { email: { contains: input.search } },
        ];
      }

      const [users, total] = await Promise.all([
        ctx.prisma.user.findMany({
          where,
          select: {
            id: true,
            email: true,
            name: true,
            phone: true,
            role: true,
            createdAt: true,
            _count: { select: { orders: true } },
          },
          orderBy: { createdAt: "desc" },
          take: input?.limit ?? 50,
          skip: input?.offset ?? 0,
        }),
        ctx.prisma.user.count({ where }),
      ]);

      return { users, total };
    }),

  // Admin: Delete user
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Check if user is admin
      if (ctx.session.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only admins can delete users",
        });
      }

      // Don't allow deleting yourself
      if (input.id === ctx.session.user.id) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You cannot delete your own account",
        });
      }

      await ctx.prisma.user.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  // Admin: Update user role
  updateRole: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        role: z.enum(["admin", "customer"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Check if user is admin
      if (ctx.session.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only admins can update user roles",
        });
      }

      const user = await ctx.prisma.user.update({
        where: { id: input.id },
        data: { role: input.role },
      });

      return user;
    }),
});
