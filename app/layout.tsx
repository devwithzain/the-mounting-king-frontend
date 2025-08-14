import "@/styles/globals.css";
import { Metadata } from "next";
import AuthModal from "@/components/auth/auth-model";
import ToastProvider from "@/providers/toast-provider";

export const metadata: Metadata = {
	title: "Affordables TV Mounting Services for Your Home Today",
	description:
		"Experience seamless TV mounting services with our professionals. Satisfaction is guaranteed! Get your perfect setup today!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<AuthModal />
				<ToastProvider />
				{children}
			</body>
		</html>
	);
}
