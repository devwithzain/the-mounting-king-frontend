import ServiceForm from "../components/service-form";

export async function generateStaticParams() {
	const res = await fetch("https://themountingking.com/backend/api/services", {
		cache: "no-store",
	});
	const { data } = await res.json();

	const dynamicRoutes = data.map((service: any) => ({
		id: service.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function ServiceFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <ServiceForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
