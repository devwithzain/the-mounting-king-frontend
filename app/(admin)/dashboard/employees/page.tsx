import { Metadata } from "next";
import EmployeeListings from "./components/employee";

export const metadata: Metadata = {
	title: "Employees | The Mounting King Admin Dashboard",
	description: "Employees | The Mounting King Admin Dashboard",
};

export default async function EmployeePage() {
	return (
		<>
			<EmployeeListings />
		</>
	);
}
