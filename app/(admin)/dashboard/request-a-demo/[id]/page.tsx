import RequestADemoForm from "../components/request-a-demo-form";

export default async function RequestADemoFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <RequestADemoForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
