import { Metadata } from "next";
import { CheckoutForm } from "@/container";
import StripeProvider from "@/providers/stripe-provider";

export const metadata: Metadata = {
	title: "Checkout - The Mounting King",
	description: "Checkout - The Mounting King",
};

export default function CartPage() {
	return (
		<>
			<StripeProvider>
				<CheckoutForm />
			</StripeProvider>
		</>
	);
}
