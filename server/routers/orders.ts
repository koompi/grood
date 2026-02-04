import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

// Order status enum
const orderStatuses = ["draft", "pending", "confirmed", "shipped", "delivered", "cancelled"] as const;

// Input validation schemas
const createOrderSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().min(1),
  address: z.string().min(1),
  paymentMethod: z.string().min(1),
  status: z.enum(orderStatuses).optional(),
  items: z.array(
    z.object({
      productId: z.string(),
      name: z.string(),
      price: z.number(),
      quantity: z.number().int().positive(),
      image: z.string().optional(),
      color: z.string().optional(),
      size: z.string().optional(),
    })
  ),
});

const updateOrderSchema = z.object({
  id: z.string(),
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(1).optional(),
  address: z.string().min(1).optional(),
  status: z.enum(orderStatuses).optional(),
});

export const ordersRouter = router({
  // List all orders (admin only)
  list: protectedProcedure
    .input(
      z.object({
        status: z.enum(orderStatuses).optional(),
        search: z.string().optional(),
        limit: z.number().int().positive().default(50),
        offset: z.number().int().nonnegative().default(0),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = {};

      if (input?.status) {
        where.status = input.status;
      } else {
        // Default: exclude draft orders
        where.status = { not: "draft" };
      }

      if (input?.search) {
        where.OR = [
          { firstName: { contains: input.search } },
          { lastName: { contains: input.search } },
          { orderNumber: { contains: input.search } },
          { email: { contains: input.search } },
        ];
      }

      const [orders, total] = await Promise.all([
        ctx.prisma.order.findMany({
          where,
          include: { items: true },
          orderBy: { createdAt: "desc" },
          take: input?.limit ?? 50,
          skip: input?.offset ?? 0,
        }),
        ctx.prisma.order.count({ where }),
      ]);

      return { orders, total };
    }),

  // Get single order by ID (admin only)
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const order = await ctx.prisma.order.findUnique({
        where: { id: input.id },
        include: { items: true },
      });

      if (!order) {
        throw new Error("Order not found");
      }

      return order;
    }),

  // Create new order (public - used by checkout)
  create: publicProcedure.input(createOrderSchema).mutation(async ({ ctx, input }) => {
    const subtotal = input.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0; // Free shipping for now
    const total = subtotal + shipping;

    // Generate order number
    const orderNumber = `GRD-${Date.now().toString().slice(-6)}`;

    const order = await ctx.prisma.order.create({
      data: {
        orderNumber,
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phone,
        address: input.address,
        paymentMethod: input.paymentMethod,
        subtotal,
        shipping,
        total,
        status: input.status || "pending",
        items: {
          create: input.items.map((item) => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
            color: item.color,
            size: item.size,
          })),
        },
      },
      include: { items: true },
    });

    return order;
  }),

  // Update order (admin only)
  update: protectedProcedure.input(updateOrderSchema).mutation(async ({ ctx, input }) => {
    const { id, ...data } = input;

    const order = await ctx.prisma.order.update({
      where: { id },
      data,
      include: { items: true },
    });

    return order;
  }),

  // Update order status (admin only)
  updateStatus: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.enum(orderStatuses),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const order = await ctx.prisma.order.update({
        where: { id: input.id },
        data: { status: input.status },
      });

      return order;
    }),

  // Delete order (admin only)
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.order.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  // Get order stats (admin only)
  stats: protectedProcedure.query(async ({ ctx }) => {
    const [total, pending, confirmed, shipped, delivered, cancelled] = await Promise.all([
      ctx.prisma.order.count(),
      ctx.prisma.order.count({ where: { status: "pending" } }),
      ctx.prisma.order.count({ where: { status: "confirmed" } }),
      ctx.prisma.order.count({ where: { status: "shipped" } }),
      ctx.prisma.order.count({ where: { status: "delivered" } }),
      ctx.prisma.order.count({ where: { status: "cancelled" } }),
    ]);

    return { total, pending, confirmed, shipped, delivered, cancelled };
  }),
});
