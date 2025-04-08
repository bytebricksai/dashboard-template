"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Sale } from "@/types/sales";

export function SalesTable({ sales }: { sales: Sale[] }) {
	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Fecha</TableHead>
						<TableHead>Tipo de Pago</TableHead>
						<TableHead>Ticket</TableHead>
						<TableHead>Artículo</TableHead>
						<TableHead>Cantidad</TableHead>
						<TableHead className="text-right">Total</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sales.map((sale) => (
						<TableRow key={sale.id}>
							<TableCell>{new Date(sale.date).toLocaleDateString()}</TableCell>
							<TableCell>{sale.paymentType}</TableCell>
							<TableCell>{sale.ticket}</TableCell>
							<TableCell>{sale.item}</TableCell>
							<TableCell>{sale.quantity}</TableCell>
							<TableCell className="text-right">
								${sale.total.toFixed(2)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
