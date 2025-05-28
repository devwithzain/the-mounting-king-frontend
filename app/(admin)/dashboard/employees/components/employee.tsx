"use client";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TemployeesColumnProps } from "@/types";
import { Button } from "@/components/ui/button";
import Heading from "@/components/admin/heading";
import getEmployees from "@/actions/get-employees";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/container/admin/employees/columns";

export default function EmployeeListings() {
	const router = useRouter();
	const [employees, setEmployees] = useState<TemployeesColumnProps[]>([]);

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await getEmployees();
				setEmployees(response.data);
			} catch (err) {
				console.error("Error fetching services:", err);
			}
		};
		fetchEmployees();
	}, []);

	const formatedEmployee = employees.map((employee) => ({
		id: employee.id,
		name: employee.name,
		email: employee.email,
		address: employee.address,
		phone_number: employee.phone_number,
		state: employee.state,
		created_at: format(employee.created_at ?? new Date(), "MMMM do, yyyy"),
	}));

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<div className="flex items-center justify-between">
				<Heading
					title={`Employees (${formatedEmployee.length})`}
					description="Manage Employees for your website."
				/>
				<Button
					className="flex items-center gap-x-2"
					onClick={() => router.push(`/dashboard/employees/new`)}>
					<Plus className="w-4 h-4" />
					Add new
				</Button>
			</div>
			<Separator />
			<div className="flex gap-4 flex-col">
				<DataTable
					columns={columns}
					data={formatedEmployee}
					searchKey="title"
				/>
			</div>
		</div>
	);
}
