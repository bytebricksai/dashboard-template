import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconPackage, IconPlus } from "@tabler/icons-react";

export function ProductsEmptyState() {
	return (
		<Card className="flex h-[450px] w-full flex-col items-center justify-center space-y-5 border-dashed">
			<div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
				<IconPackage className="h-10 w-10 text-muted-foreground" />
			</div>
			<div className="text-center space-y-2">
				<h3 className="text-xl font-semibold">No hay productos</h3>
				<p className="text-muted-foreground max-w-[400px]">
					Aún no has agregado ningún producto. Los productos que agregues
					aparecerán aquí y estarán disponibles para venta a través del agente
					de IA.
				</p>
			</div>
			<Button>
				<IconPlus className="mr-2 h-4 w-4" />
				Agregar Producto
			</Button>
		</Card>
	);
}
