import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardEmptyState } from "@/components/dashboard/empty-state";

import data from "./data.json";

export default function DashboardPage() {
	// Later we'll add logic to check if there's data
	const hasData = false;

	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)",
				} as React.CSSProperties
			}
		>
			<AppSidebar variant="sidebar" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							{!hasData ? (
								<DashboardEmptyState />
							) : (
								<>
									<SectionCards />
									<div className="px-4 lg:px-6">
										<ChartAreaInteractive />
									</div>
									<DataTable data={data} />
								</>
							)}
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
