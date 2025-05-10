import { Card, CardContent } from "@/components/ui/card";
import {
	IconCoin,
	IconCoinOff,
	IconPackage,
	IconShoppingCart,
} from "@tabler/icons-react";

interface DailySummaryProps {
	todayEarnings: number;
	salesCount: number;
	lowStockCount: number;
}

export function DailySummary({
	todayEarnings,
	salesCount,
	lowStockCount,
}: DailySummaryProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			{/* Ingresos del dia */}
			<Card>
				<CardContent className="p-6 flex flex-row items-center justify-between">
					<div className="flex flex-col gap-1">
						<p className="text-sm font-medium text-muted-foreground">
							Ingresos de Hoy
						</p>
						<h3 className="text-2xl font-bold">
							$
							{todayEarnings.toLocaleString("es-MX", {
								minimumFractionDigits: 2,
							})}
						</h3>
					</div>
					<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
						<IconCoin className="h-6 w-6 text-primary" />
					</div>
				</CardContent>
			</Card>

			{/* Cantidad de ventas realizadas en el dia */}
			<Card>
				<CardContent className="p-6 flex flex-row items-center justify-between">
					<div className="flex flex-col gap-1">
						<p className="text-sm font-medium text-muted-foreground">
							Ventas de Hoy
						</p>
						<h3 className="text-2xl font-bold">{salesCount}</h3>
					</div>
					<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
						<IconShoppingCart className="h-6 w-6 text-primary" />
					</div>
				</CardContent>
			</Card>

			{/* Alerta de stock bajo */}
			<Card>
				<CardContent className="p-6 flex flex-row items-center justify-between">
					<div className="flex flex-col gap-1">
						<p className="text-sm font-medium text-muted-foreground">
							Bajo Stock
						</p>
						<h3 className="text-2xl font-bold">{lowStockCount}</h3>
					</div>
					<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
						<IconPackage className="h-6 w-6 text-primary" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
