import EmployeeForm from "../components/employee-form";

export async function generateStaticParams() {
	const res = await fetch("https://themountingking.com/backend/api/employees", {
		cache: "no-store",
	});
	const { data } = await res.json();

	const dynamicRoutes = data.map((employee: any) => ({
		id: employee.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

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
