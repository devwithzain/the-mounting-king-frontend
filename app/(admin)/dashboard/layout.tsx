"use client";
import Navbar from "@/components/admin/navbar";
import ToastProvider from "@/providers/toast-provider";
import { AppSidebar } from "@/components/admin/app-sidebar";
import { ThemeProvider } from "@/components/admin/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<Navbar />
					<ToastProvider />
					{children}
				</SidebarInset>
			</SidebarProvider>
		</ThemeProvider>
	);
}
