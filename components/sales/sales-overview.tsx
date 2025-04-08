import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SalesOverview({
	totalSales,
	monthlyGoal,
}: {
	totalSales: number;
	monthlyGoal: number;
}) {
	const percentage = (totalSales / monthlyGoal) * 100;

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<Card className="p-4 flex flex-col items-center justify-center">
				<h3 className="text-lg font-semibold">Ventas Totales del Día</h3>
				<p className="text-2xl font-bold">${totalSales.toFixed(2)}</p>
			</Card>
			<Card className="p-4 flex flex-col items-center justify-center">
				<h3 className="text-lg font-semibold">Meta de Ventas Mensual</h3>
				<p className="text-2xl font-bold">${monthlyGoal.toFixed(2)}</p>
				<Progress value={percentage} className="mt-2" />
				<p className="text-sm text-muted-foreground">
					{percentage.toFixed(0)}% alcanzado
				</p>
			</Card>
		</div>
	);
}
