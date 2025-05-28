import { Metadata } from "next";
import Account from "./components/account";

export const metadata: Metadata = {
	title: "Account setting - The Mounting King",
	description: "Account setting The Mounting King",
};

export default function AccountPage() {
	return (
		<>
			<Account />
		</>
	);
}
