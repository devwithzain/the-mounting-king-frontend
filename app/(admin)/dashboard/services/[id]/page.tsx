import ServiceForm from "../components/service-form";

export default async function ServiceFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <ServiceForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
