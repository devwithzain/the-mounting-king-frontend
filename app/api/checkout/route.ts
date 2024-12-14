import Stripe from "stripe";
import prismadb from "@/utils/prisma";
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
   const { userId } = await req.json();

   // Fetch cart items for the user
   const cartItems = await prismadb.carts.findMany({
      where: {
         user_id: userId,
      },
      select: {
         product_id: true,
      },
   });

   if (!cartItems || cartItems.length === 0) {
      return new NextResponse("No items in the cart", { status: 404 });
   }

   const productIds = cartItems.map((item) => item.product_id);

   const products = await prismadb.products.findMany({
      where: {
         id: {
            in: productIds,
         },
      },
   });

   if (products.length === 0) {
      return new NextResponse("No products found for the items in the cart", { status: 404 });
   }

   const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

   products.forEach((product) => {
      line_items.push({
         quantity: 1,
         price_data: {
            currency: 'USD',
            product_data: {
               name: product.title,
            },
            unit_amount: Math.round(Number(product.price) * 100),
         },
      });
   });

   const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      billing_address_collection: 'required',
      phone_number_collection: {
         enabled: true,
      },
      metadata: {
         userId,
      },
      success_url: `${process.env.FRONTEND_STORE_URL}/thankyou?session_id={CHECKOUT_SESSION_ID}&success=1`,
      cancel_url: `${process.env.FRONTEND_STORE_URL}/cart?canceled=1`,
   });

   return NextResponse.json({ url: session.url }, {
      headers: corsHeaders,
   });
};
