import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	IconPackage,
	IconChartBar,
	IconShoppingCart,
	IconBox,
} from "@tabler/icons-react";

export function DashboardEmptyState() {
	return (
		<div className="flex flex-col gap-8 p-8">
			{/* Welcome Section */}
			<div className="flex flex-col items-center justify-center text-center space-y-4 pb-8">
				<h1 className="text-3xl font-bold">¡Bienvenido a tu Dashboard!</h1>
				<p className="text-muted-foreground max-w-[600px]">
					Aquí podrás gestionar tus productos, monitorear ventas y analizar el
					rendimiento de tu negocio. Todo automatizado a través de nuestro
					agente de IA.
				</p>
				<Button className="mt-4">
					<IconPackage className="mr-2 h-4 w-4" />
					Agregar tu primer producto
				</Button>
			</div>

			{/* Metrics Placeholders */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card className="p-4 flex flex-col items-center justify-center min-h-[120px] border-dashed">
					<IconShoppingCart className="h-8 w-8 text-muted-foreground mb-2" />
					<p className="text-sm text-muted-foreground">
						Sin ventas registradas
					</p>
				</Card>

				<Card className="p-4 flex flex-col items-center justify-center min-h-[120px] border-dashed">
					<IconPackage className="h-8 w-8 text-muted-foreground mb-2" />
					<p className="text-sm text-muted-foreground">No hay productos</p>
				</Card>

				<Card className="p-4 flex flex-col items-center justify-center min-h-[120px] border-dashed">
					<IconBox className="h-8 w-8 text-muted-foreground mb-2" />
					<p className="text-sm text-muted-foreground">Inventario vacío</p>
				</Card>

				<Card className="p-4 flex flex-col items-center justify-center min-h-[120px] border-dashed">
					<IconChartBar className="h-8 w-8 text-muted-foreground mb-2" />
					<p className="text-sm text-muted-foreground">Sin datos de análisis</p>
				</Card>
			</div>

			{/* Quick Start Guide */}
			<Card className="p-6 mt-4">
				<h2 className="text-lg font-semibold mb-4">Primeros pasos</h2>
				<div className="space-y-4">
					<div className="flex items-start gap-4">
						<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-muted">
							1
						</div>
						<div className="space-y-1">
							<p className="text-sm font-medium leading-none">
								Agrega tus productos
							</p>
							<p className="text-sm text-muted-foreground">
								Comienza agregando los productos que deseas vender a través del
								agente de IA
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-muted">
							2
						</div>
						<div className="space-y-1">
							<p className="text-sm font-medium leading-none">
								Configura el WhatsApp
							</p>
							<p className="text-sm text-muted-foreground">
								Conecta tu número de WhatsApp Business para comenzar a recibir
								pedidos
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-muted">
							3
						</div>
						<div className="space-y-1">
							<p className="text-sm font-medium leading-none">
								¡Listo para vender!
							</p>
							<p className="text-sm text-muted-foreground">
								El agente de IA comenzará a procesar pedidos automáticamente
							</p>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}
