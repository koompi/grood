import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Context type
export type Context = {
  prisma: typeof prisma;
  session: Session | null;
};

// Create context for each request
export const createContext = async (): Promise<Context> => {
  const session = await getServerSession(authOptions);
  return {
    prisma,
    session,
  };
};

// Initialize tRPC
const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

// Base router and procedure
export const router = t.router;
export const publicProcedure = t.procedure;

// Protected procedure (requires authentication)
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to perform this action",
    });
  }
  return next({
    ctx: {
      ...ctx,
      session: ctx.session,
    },
  });
});
