import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import Dashboard from "./components/dashboard";

export const metadata: Metadata = {
	title: "Admin Dashboard | The Mounting King",
	description: "Admin Dashboard | The Mounting King",
};

export default async function DashboardPage() {
	const users = await prismadb.users.findMany({
		where: {
			role: {
				not: "admin",
			},
		},
	});

	const formatedUsers = users.map((user) => ({
		id: user.id,
		name: user.name,
		email: user.email,
		role: user.role,
		image: user.image,
		created_at: user.created_at,
		updated_at: user.updated_at,
	}));

	return <Dashboard data={formatedUsers} />;
}
