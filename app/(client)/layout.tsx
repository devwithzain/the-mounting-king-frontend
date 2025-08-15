"use client";
import { usePathname } from "next/navigation";
import { Footer, HomeFooter, Navbar } from "@/components/client";

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();

	return (
		<>
			<Navbar />
			{children}
			{pathName === "/" ? <HomeFooter /> : <Footer />}
		</>
	);
}
