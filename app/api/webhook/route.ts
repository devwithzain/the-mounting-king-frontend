import Stripe from "stripe";
import prismadb from "@/utils/prisma";
import { headers } from "next/headers";
import { stripe } from "@/utils/stripe";

export async function POST(req: Request) {
   const body = await req.text();
   const signature = (await headers()).get("stripe-signature") as string;

   let event: Stripe.Event;

   try {
      event = stripe.webhooks.constructEvent(
         body,
         signature || "",
         process.env.STRIPE_WEBHOOK_SECRET || ""
      );

      if (event.type === "checkout.session.completed") {
         const session = event.data.object as Stripe.Checkout.Session;

         const userId = session.metadata?.userId;

         if (userId) {
            await prismadb.carts.deleteMany({
               where: {
                  user_id: parseInt(userId),
               },
            });
         }
      }

      return new Response("Webhook received", { status: 200 });
   } catch (err) {
      console.error("Error processing webhook", err);
      return new Response("Webhook error", { status: 400 });
   }
}