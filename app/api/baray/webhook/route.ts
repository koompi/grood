import { NextRequest, NextResponse } from "next/server";
import { getBarayClient } from "@/lib/baray";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { encrypted_order_id, bank } = body;

    if (!encrypted_order_id) {
      return NextResponse.json(
        { error: "Missing encrypted_order_id" },
        { status: 400 }
      );
    }

    const client = getBarayClient();
    const orderId = client.decryptIntent(encrypted_order_id);
    
    if (!orderId) {
         return NextResponse.json(
        { error: "Failed to decrypt order ID" },
        { status: 400 }
      );
    }

    // Find and update the order
    const updatedOrder = await prisma.order.update({
      where: { orderNumber: orderId },
      data: { 
        status: "confirmed",
        // You might want to store transaction ID or other metadata if you add fields to the schema
      }
    });

    console.log(`Payment successful for Order: ${updatedOrder.orderNumber} via ${bank}`);

    return NextResponse.json({ status: "success", orderId });
  } catch (error: any) {
    if (error.code === 'P2025') {
       console.error("Order not found for webhook:", error);
       return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
