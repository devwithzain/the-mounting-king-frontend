import ProductForm from "../components/ProductForm";

export async function generateStaticParams() {
	const res = await fetch("https://themountingking.com/backend/api/products", {
		cache: "no-store",
	});
	const { data } = await res.json();

	const dynamicRoutes = data.map((product: any) => ({
		id: product.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function ProductFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<ProductForm slug={{ id, new: id === "new" ? "yes" : "no" }} />
		</>
	);
}
