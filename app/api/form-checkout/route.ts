import { stripe } from "@/utils/stripe";
import { NextResponse } from "next/server";

const corsHeaders = {
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
   "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
   return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
   const { items, name, email, phone, appointmentDate, address } = await req.json();

   if (!items || items.length === 0) {
      return new NextResponse("No items in the request", { status: 400 });
   }
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const line_items = items.map((item: any) => ({
      quantity: item.quantity,
      price_data: {
         currency: "usd",
         product_data: {
            name: item.name,
         },
         unit_amount: Math.round(item.price * 100),
      },
   }));

   const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      billing_address_collection: "required",
      metadata: {
         name,
         email,
         phone,
         appointmentDate: `${appointmentDate?.day}, ${appointmentDate?.date}, ${appointmentDate?.time}`,
         address: `${address?.address}, ${address?.aptUnitFloor}`,
      },
      success_url: `${process.env.FRONTEND_STORE_URL}/thankyou?success=true`,
      cancel_url: `${process.env.FRONTEND_STORE_URL}/request-a-demo?canceled=true`,
   });

   return NextResponse.json({ url: session.url });
}
