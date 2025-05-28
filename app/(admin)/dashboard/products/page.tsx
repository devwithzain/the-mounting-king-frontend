import { Metadata } from "next";
import ProductListings from "./components/product";

export const metadata: Metadata = {
	title: "Products - The Mounting King",
	description: "Products The Mounting King",
};

export default function ProductPage() {
	return (
		<>
			<ProductListings />
		</>
	);
}
