import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
	IconCoin,
	IconCoinOff,
	IconPercentage,
	IconReceipt,
} from "@tabler/icons-react";

interface KpiCardsProps {
	monthlySales: number;
	monthlyTarget: number;
	averageTicket: number;
	customerRetention: number;
}

export function KpiCards({
	monthlySales,
	monthlyTarget,
	averageTicket,
	customerRetention,
}: KpiCardsProps) {
	// Chequeo porcentaje del objetivo
	const targetCompletion = Math.min(
		Math.round((monthlySales / monthlyTarget) * 100),
		100
	);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{/* Ventas mensuales y objetivo */}
			<Card>
				<CardContent className="p-6">
					<div className="flex flex-row items-center justify-between mb-4">
						<h3 className="text-sm font-medium text-muted-foreground">
							Ventas Mensuales
						</h3>
						<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
							<IconCoinOff className="h-4 w-4 text-primary" />
						</div>
					</div>

					<div className="mb-2 flex items-center justify-between">
						<div className="text-2xl font-bold">
							$
							{monthlySales.toLocaleString("es-AR", {
								maximumFractionDigits: 0,
							})}
						</div>
						<div className="text-xs text-muted-foreground">
							Meta: $
							{monthlyTarget.toLocaleString("es-AR", {
								maximumFractionDigits: 0,
							})}
						</div>
					</div>

					<Progress value={targetCompletion} className="h-2" />
					<p className="mt-2 text-xs text-muted-foreground">
						{targetCompletion}% completado
					</p>
				</CardContent>
			</Card>

			{/* Valor de ticket promedio */}
			<Card>
				<CardContent className="p-6">
					<div className="flex flex-row items-center justify-between mb-4">
						<h3 className="text-sm font-medium text-muted-foreground">
							Ticket Promedio
						</h3>
						<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
							<IconReceipt className="h-4 w-4 text-primary" />
						</div>
					</div>

					<div className="text-2xl font-bold">
						$
						{averageTicket.toLocaleString("es-MX", {
							minimumFractionDigits: 2,
						})}
					</div>
					<p className="mt-2 text-xs text-muted-foreground">por transacción</p>
				</CardContent>
			</Card>

			{/* Porcentaje de retencion de clientes */}
			<Card>
				<CardContent className="p-6">
					<div className="flex flex-row items-center justify-between mb-4">
						<h3 className="text-sm font-medium text-muted-foreground">
							Retención de Clientes
						</h3>
						<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
							<IconPercentage className="h-4 w-4 text-primary" />
						</div>
					</div>

					<div className="mb-2 flex items-center justify-between">
						<div className="text-2xl font-bold">{customerRetention}%</div>
					</div>

					<Progress value={customerRetention} className="h-2" />
					<p className="mt-2 text-xs text-muted-foreground">
						Clientes que regresan
					</p>
				</CardContent>
			</Card>

			{/* Carta KPI personalizable */}
			<Card>
				<CardContent className="p-6">
					<div className="flex flex-row items-center justify-between mb-4">
						<h3 className="text-sm font-medium text-muted-foreground">
							Meta Personalizada
						</h3>
						<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
							<IconCoin className="h-4 w-4 text-primary" />
						</div>
					</div>

					<div className="flex flex-col items-center justify-center h-20">
						<p className="text-sm text-muted-foreground">
							Haz clic para configurar
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
