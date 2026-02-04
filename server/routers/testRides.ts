import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

// Booking status enum
const bookingStatuses = ["pending", "confirmed", "completed", "cancelled", "no-show"] as const;

// Input validation schemas
const createBookingSchema = z.object({
  storeId: z.string().min(1),
  storeName: z.string().min(1),
  bikeId: z.string().min(1),
  bikeName: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
});

const updateBookingSchema = z.object({
  id: z.string(),
  storeId: z.string().min(1).optional(),
  storeName: z.string().min(1).optional(),
  bikeId: z.string().min(1).optional(),
  bikeName: z.string().min(1).optional(),
  date: z.string().min(1).optional(),
  time: z.string().min(1).optional(),
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(1).optional(),
  status: z.enum(bookingStatuses).optional(),
});

export const testRidesRouter = router({
  // List all bookings (admin only)
  list: protectedProcedure
    .input(
      z.object({
        status: z.enum(bookingStatuses).optional(),
        search: z.string().optional(),
        limit: z.number().int().positive().default(50),
        offset: z.number().int().nonnegative().default(0),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = {};

      if (input?.status) {
        where.status = input.status;
      }

      if (input?.search) {
        where.OR = [
          { firstName: { contains: input.search } },
          { lastName: { contains: input.search } },
          { email: { contains: input.search } },
          { storeName: { contains: input.search } },
          { bikeName: { contains: input.search } },
        ];
      }

      const [bookings, total] = await Promise.all([
        ctx.prisma.testRideBooking.findMany({
          where,
          orderBy: { createdAt: "desc" },
          take: input?.limit ?? 50,
          skip: input?.offset ?? 0,
        }),
        ctx.prisma.testRideBooking.count({ where }),
      ]);

      return { bookings, total };
    }),

  // Get single booking by ID (admin only)
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const booking = await ctx.prisma.testRideBooking.findUnique({
        where: { id: input.id },
      });

      if (!booking) {
        throw new Error("Booking not found");
      }

      return booking;
    }),

  // Create new booking (public - used by test-ride page)
  create: publicProcedure.input(createBookingSchema).mutation(async ({ ctx, input }) => {
    const booking = await ctx.prisma.testRideBooking.create({
      data: {
        ...input,
        status: "pending",
      },
    });

    return booking;
  }),

  // Update booking (admin only)
  update: protectedProcedure.input(updateBookingSchema).mutation(async ({ ctx, input }) => {
    const { id, ...data } = input;

    const booking = await ctx.prisma.testRideBooking.update({
      where: { id },
      data,
    });

    return booking;
  }),

  // Update booking status (admin only)
  updateStatus: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.enum(bookingStatuses),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const booking = await ctx.prisma.testRideBooking.update({
        where: { id: input.id },
        data: { status: input.status },
      });

      return booking;
    }),

  // Delete booking (admin only)
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.testRideBooking.delete({
        where: { id: input.id },
      });

      return { success: true };
    }),

  // Get booking stats (admin only)
  stats: protectedProcedure.query(async ({ ctx }) => {
    const [total, pending, confirmed, completed, cancelled, noShow] = await Promise.all([
      ctx.prisma.testRideBooking.count(),
      ctx.prisma.testRideBooking.count({ where: { status: "pending" } }),
      ctx.prisma.testRideBooking.count({ where: { status: "confirmed" } }),
      ctx.prisma.testRideBooking.count({ where: { status: "completed" } }),
      ctx.prisma.testRideBooking.count({ where: { status: "cancelled" } }),
      ctx.prisma.testRideBooking.count({ where: { status: "no-show" } }),
    ]);

    return { total, pending, confirmed, completed, cancelled, noShow };
  }),
});
