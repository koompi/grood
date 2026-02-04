import { router } from "../trpc";
import { ordersRouter } from "./orders";
import { testRidesRouter } from "./testRides";
import { usersRouter } from "./users";

export const appRouter = router({
  orders: ordersRouter,
  testRides: testRidesRouter,
  users: usersRouter,
});

// Export type for client
export type AppRouter = typeof appRouter;
