import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { DashboardEmptyState } from "@/components/dashboard/empty-state";

import data from "./data.json";

export default function DashboardPage() {
	// Later we'll add logic to check if there's data
	const hasData = false;

	return (
		<>
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
		</>
	);
}
