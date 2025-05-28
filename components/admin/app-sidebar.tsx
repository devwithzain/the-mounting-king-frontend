"use client";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { TuserProps } from "@/types";
import { sideBarItem } from "@/constants";
import { getToken } from "@/lib/get-token";
import { useEffect, useState } from "react";
import { TeamSwitcher } from "./team-switcher";
import { getUserData } from "@/lib/current-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const token = getToken("adminAuthToken");
	const [user, setUser] = useState<TuserProps>();

	useEffect(() => {
		const fetchUserData = async () => {
			if (!token) {
				return;
			}
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	});

	return (
		<Sidebar
			collapsible="icon"
			{...props}>
			<SidebarHeader>
				<TeamSwitcher />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={sideBarItem.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser
					user={
						user ?? {
							id: BigInt(0),
							name: "",
							email: "",
							image: "",
							role: "",
							created_at: new Date(),
							updated_at: new Date(),
						}
					}
				/>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
