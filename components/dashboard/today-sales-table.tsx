import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Sale } from "@/types/sales";

interface TodaySalesTableProps {
	sales: Sale[];
}

export function TodaySalesTable({ sales }: TodaySalesTableProps) {
	return (
		<Card className="overflow-hidden">
			<div className="overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Ticket</TableHead>
							<TableHead>Producto</TableHead>
							<TableHead>Cantidad</TableHead>
							<TableHead className="text-right">Total</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{sales.length > 0 ? (
							sales.map((sale) => (
								<TableRow key={sale.id}>
									<TableCell className="font-medium">{sale.ticket}</TableCell>
									<TableCell>{sale.item}</TableCell>
									<TableCell>{sale.quantity}</TableCell>
									<TableCell className="text-right">
										$
										{sale.total.toLocaleString("es-AR", {
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
									No hay ventas registradas hoy
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</Card>
	);
}
