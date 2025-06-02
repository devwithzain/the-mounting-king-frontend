import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import UserListings from "./components/user";

export const metadata: Metadata = {
	title: "Users | The Mounting King Admin Dashboard",
	description: "Users | The Mounting King Admin Dashboard",
};

export default async function UsersPage() {
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

	return (
		<>
			<UserListings data={formatedUsers} />
		</>
	);
}
