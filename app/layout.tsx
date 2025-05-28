"use client";
import Lenis from "lenis";
import "@/styles/globals.css";
import { useEffect } from "react";
import AuthModal from "@/components/auth/auth-model";
import ToastProvider from "@/providers/toast-provider";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<html
				lang="en"
				suppressHydrationWarning>
				<body>
					<AuthModal />
					<ToastProvider />
					{children}
				</body>
			</html>
		</>
	);
}
