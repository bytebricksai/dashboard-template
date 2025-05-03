import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/products";

interface LowStockTableProps {
	products: Product[];
}

export function LowStockTable({ products }: LowStockTableProps) {
	return (
		<Card className="overflow-hidden">
			<div className="overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Producto</TableHead>
							<TableHead>Categoría</TableHead>
							<TableHead className="text-right">Stock</TableHead>
							<TableHead className="text-right">Precio</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{products.length > 0 ? (
							products.map((product) => (
								<TableRow key={product.id}>
									<TableCell className="font-medium">{product.name}</TableCell>
									<TableCell>{product.category}</TableCell>
									<TableCell className="text-right">
										<Badge
											variant={product.stock <= 3 ? "destructive" : "outline"}
										>
											{product.stock}
										</Badge>
									</TableCell>
									<TableCell className="text-right">
										$
										{product.price.toLocaleString("es-MX", {
											minimumFractionDigits: 2,
										})}
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={4}
									className="text-center py-6 text-muted-foreground"
								>
									No hay productos con bajo stock
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</Card>
	);
}
