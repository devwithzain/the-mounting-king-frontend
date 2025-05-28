import { Metadata } from "next";
import { Setting } from "@/container";

export const metadata: Metadata = {
	title: "Settings",
	description: "Settings",
};

export default function SettingsPage() {
	return (
		<>
			<Setting />
		</>
	);
}
