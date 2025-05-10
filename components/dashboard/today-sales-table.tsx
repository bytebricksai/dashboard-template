'use client';

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
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

interface TodaySalesTableProps {
	sales: Sale[];
}

export function TodaySalesTable({ sales }: TodaySalesTableProps) {
	const [selectedSale, setSelectedSale] = useState<Sale | null>(null);
	return (
		<Card className="overflow-hidden" suppressHydrationWarning>
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
								<Dialog key={sale.id}>
									<DialogTrigger asChild>
										<TableRow 
											onClick={() => setSelectedSale(sale)}
											className="cursor-pointer hover:bg-muted/40"
										>
											<TableCell className="font-medium">{sale.ticket}</TableCell>
											<TableCell>{sale.item}</TableCell>
											<TableCell>{sale.quantity}</TableCell>
											<TableCell className="text-right">
												$
												{sale.total.toLocaleString("es-AR", {minimumFractionDigits: 2})}
											</TableCell>
										</TableRow>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Detalle de la venta</DialogTitle>
											<hr />
										</DialogHeader>
										{selectedSale && (
											<div className="space-y-2">
												<p><strong>Ticket: </strong>{selectedSale.ticket}</p>
												<p><strong>Producto: </strong>{selectedSale.item}</p>
												<p><strong>Total: </strong>{selectedSale.total}</p>
												<p><strong>Pago: </strong>{selectedSale.paymentType}</p>
											</div>
										)}
									</DialogContent>
								</Dialog>
								
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
