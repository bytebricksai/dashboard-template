import { Card, CardContent } from "@/components/ui/card";
import { IconMoodSad } from "@tabler/icons-react";

export function AnalyticsEmptyState() {
	return (
		<div className="flex flex-col gap-6 p-4 lg:p-6 items-center text-center">
			<IconMoodSad className="w-12 h-12 text-muted-foreground" />
			<h2 className="text-xl font-semibold">No hay datos disponibles</h2>
			<p className="text-sm text-muted-foreground max-w-md">
				Aún no hay suficientes datos para mostrar estadísticas. Cuando se
				generen ventas y actividades, verás aquí métricas clave para tomar
				mejores decisiones.
			</p>

			<div className="w-full max-w-5xl">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					<Card>
						<CardContent className="p-6 h-40" />
					</Card>
					<Card>
						<CardContent className="p-6 h-40" />
					</Card>
					<Card>
						<CardContent className="p-6 h-40" />
					</Card>
					<Card>
						<CardContent className="p-6 h-40" />
					</Card>
				</div>
			</div>
		</div>
	);
}
