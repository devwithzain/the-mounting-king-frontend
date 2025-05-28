import RequestADemoForm from "../components/request-a-demo-form";

export async function generateStaticParams() {
	const res = await fetch(
		"https://themountingking.com/backend/api/requestServices",
		{
			cache: "no-store",
		},
	);
	const { data } = await res.json();

	const dynamicRoutes = data.map((service: any) => ({
		id: service.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function RequestADemoFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <RequestADemoForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
