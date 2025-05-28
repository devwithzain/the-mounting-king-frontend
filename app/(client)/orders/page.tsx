import { Metadata } from "next";
import { Orders } from "@/container";

export const metadata: Metadata = {
	title: "My Orders",
	description: "My Orders",
};

export default function OrdersPage() {
	return (
		<>
			<Orders />
		</>
	);
}
