"use client";

import * as React from "react";
import {
	IconBlocks,
	IconChartBar,
	IconDashboard,
	IconDatabase,
	IconFolder,
	IconHelp,
	IconInnerShadowTop,
	IconReport,
	IconSettings,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
	user: {
		name: "Usuario Demo",
		email: "demo@ejemplo.com",
		avatar: "../public/profile.png",
	},
	navMain: [
		{
			title: "Principal",
			url: "/dashboard",
			icon: IconDashboard,
		},
		{
			title: "Productos",
			url: "/dashboard/productos",
			icon: IconFolder,
		},
		{
			title: "Análisis",
			url: "/dashboard/analytics",
			icon: IconReport,
		},
	],
	navSecondary: [
		{
			title: "Configuración",
			url: "/dashboard/configuracion",
			icon: IconSettings,
		},
		{
			title: "Ayuda",
			url: "/dashboard/ayuda",
			icon: IconHelp,
		},
	],
	documents: [],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<a href="#">
								<IconBlocks className="!size-5" />
								<span className="text-base font-semibold">ByteBricks</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
