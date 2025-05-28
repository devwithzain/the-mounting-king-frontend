"use client";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
	const pathName = usePathname();
	const pathSegments = pathName.split("/").filter(Boolean);

	return (
		<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between">
			<div className="flex items-center gap-2 px-4">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mr-2 h-4"
				/>
				<Breadcrumb>
					<BreadcrumbList>
						{pathSegments.map((segment: string, index: number) => (
							<BreadcrumbItem key={index}>
								{index < pathSegments.length - 1 ? (
									<BreadcrumbLink
										href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
										{segment.replace(/-/g, " ").charAt(0).toUpperCase() +
											segment.replace(/-/g, " ").slice(1).toLowerCase()}{" "}
									</BreadcrumbLink>
								) : (
									<BreadcrumbPage>
										{segment.replace(/-/g, " ").charAt(0).toUpperCase() +
											segment.replace(/-/g, " ").slice(1).toLowerCase()}
									</BreadcrumbPage>
								)}
								{index < pathSegments.length - 1 && (
									<BreadcrumbSeparator>
										<FiChevronRight />
									</BreadcrumbSeparator>
								)}
							</BreadcrumbItem>
						))}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className="px-4">
				<ModeToggle />
			</div>
		</header>
	);
}
