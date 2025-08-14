import EmployeeForm from "../components/employee-form";

export default async function EmployeeFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<EmployeeForm slug={{ id, new: id === "new" ? "yes" : "no" }} />
		</>
	);
}
