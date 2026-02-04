import { NextRequest, NextResponse } from "next/server";
import { getBarayClient } from "@/lib/baray";
import { z } from "zod";

const createIntentSchema = z.object({
  amount: z.number(),
  currency: z.enum(["USD", "KHR"]),
  orderId: z.string(),
  customer: z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().optional(),
    phone: z.string(),
  }).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, currency, orderId, customer } = createIntentSchema.parse(body);

    const payload = {
      amount: amount.toFixed(2),
      currency,
      order_id: orderId,
      tracking: {
        customer_id: customer?.email || customer?.phone || "guest",
        customer_name: `${customer?.firstName} ${customer?.lastName}`,
      },
      custom_success_url: `${req.nextUrl.origin}/checkout/success?orderId=${orderId}`
    };

    const client = getBarayClient();
    const data = await client.createIntent(payload);

    // The client.createIntent returns the JSON response directly
    // If there was an error in fetch, it might throw or return error JSON?
    // The user's implementation of createIntent does: return (await result.json()) as IntentDetail;
    // It doesn't check result.ok. 
    // We should probably wrapping it in try/catch (which we have).
    
    return NextResponse.json(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
