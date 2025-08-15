import { Metadata } from "next";
import UserListings from "./components/user";

export const metadata: Metadata = {
	title: "Users | The Mounting King Admin Dashboard",
	description: "Users | The Mounting King Admin Dashboard",
};

export default async function UsersPage() {
	return (
		<>
			<UserListings />
		</>
	);
}
