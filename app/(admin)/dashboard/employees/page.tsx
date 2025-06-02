import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import EmployeeListings from "./components/employee";

export const metadata: Metadata = {
	title: "Employees | The Mounting King Admin Dashboard",
	description: "Employees | The Mounting King Admin Dashboard",
};

export default async function EmployeePage() {
	const employees = await prismadb.employees.findMany();

	const formatedEmployee = employees.map((employee) => ({
		id: employee.id,
		name: employee.name,
		email: employee.email,
		address: employee.address,
		phone_number: employee.phone_number,
		state: employee.state,
		created_at: employee.created_at,
		updated_at: employee.updated_at,
	}));

	return (
		<>
			<EmployeeListings data={formatedEmployee} />
		</>
	);
}
