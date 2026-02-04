import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../app/generated/prisma/client.js";
import bcrypt from "bcryptjs";

// Create Prisma adapter factory
const adapter = new PrismaBetterSqlite3({
  url: "./dev.db",
});

// Create Prisma client with adapter
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const hashedPassword = await bcrypt.hash("Gr00d@Adm!n2026#", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@grood.com" },
    update: {},
    create: {
      email: "admin@grood.com",
      password: hashedPassword,
      name: "Admin",
      role: "admin",
    },
  });

  console.log("Created admin user:", admin.email);

  // Create sample test ride booking
  const testRide = await prisma.testRideBooking.create({
    data: {
      storeId: "phnom-penh",
      storeName: "Grood Phnom Penh Flagship",
      bikeId: "s1",
      bikeName: "Grood Siem Reap",
      date: "2026-02-10",
      time: "10:00 AM",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "+855 12 345 678",
      status: "confirmed",
    },
  });

  console.log("Created sample test ride booking:", testRide.id);

  // Create sample order
  const order = await prisma.order.create({
    data: {
      orderNumber: "GRD-" + Date.now().toString().slice(-6),
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phone: "+855 98 765 432",
      address: "123 Norodom Blvd, Phnom Penh",
      paymentMethod: "khqr",
      subtotal: 1299,
      shipping: 0,
      total: 1299,
      status: "pending",
      items: {
        create: [
          {
            productId: "siemreap-white",
            name: "Grood Siem Reap - White",
            price: 1299,
            quantity: 1,
            image: "/images/bikes/siemreap/white/1.png",
            color: "White",
          },
        ],
      },
    },
  });

  console.log("Created sample order:", order.orderNumber);

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
