import "@/styles/globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import ToastProvider from "@/provider/toast-provider";

export const metadata: Metadata = {
	title: "The Mounting King",
	description: "The Mounting King Admin Dashboard",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<ToastProvider />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
