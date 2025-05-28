import { Metadata } from "next";
import UserListings from "./components/user";

export const metadata: Metadata = {
	title: "All Users - The Mounting King",
	description: "All Users The Mounting King",
};

export default function UsersPage() {
	return (
		<>
			<UserListings />
		</>
	);
}
