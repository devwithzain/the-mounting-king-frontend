import { Metadata } from "next";
import EmployeeListings from "./components/employee";

export const metadata: Metadata = {
	title: "Employees - The Mounting King",
	description: "Employees The Mounting King",
};

export default function EmployeePage() {
	return (
		<>
			<EmployeeListings />
		</>
	);
}
