"use client";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { TuserProps } from "@/types";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ChevronsUpDown, LogOut, Settings } from "lucide-react";

export function NavUser({ user }: { user: TuserProps }) {
	const router = useRouter();
	const logOut = () => {
		Cookies.remove("adminAuthToken");
		toast.success("Logged out");
		router.refresh();
	};
	const { isMobile } = useSidebar();
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
							<Avatar className="h-8 w-8 rounded-lg">
								{user.image ? (
									<AvatarImage
										src={`https://The Mounting King.demo-weblink.com/backend/storage/${user.image}`}
										alt={user.name}
									/>
								) : (
									<div className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-primary-foreground">
										{user.name.charAt(0).toUpperCase()}
									</div>
								)}
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">{user.name}</span>
								<span className="truncate text-xs">{user.email}</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									{user.image ? (
										<AvatarImage
											src={`https://The Mounting King.demo-weblink.com/backend/storage/${user.image}`}
											alt={user.name}
										/>
									) : (
										<div className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-primary-foreground">
											{user.name.charAt(0).toUpperCase()}
										</div>
									)}
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">{user.name}</span>
									<span className="truncate text-xs">{user.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<Link href={`/dashboard/account`}>
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Settings />
									Account
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</Link>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={() => logOut()}>
							<LogOut />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
