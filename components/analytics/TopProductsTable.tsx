'use client';

interface TopProduct {
	name: string;
	sales: number;
	revenue: number;
}

interface TopProductsTableProps {
	products: TopProduct[];
}

export function TopProductsTable({ products }: TopProductsTableProps) {
	return (
		<div className="overflow-x-auto bg-card rounded-xl shadow">
			<table className="w-full text-sm">
				<thead>
					<tr className="text-left border-b">
						<th className="p-4">Producto</th>
						<th className="p-4">Ventas</th>
						<th className="p-4">Ingresos</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => (
						<tr key={index} className="border-b hover:bg-muted/10">
							<td className="p-4 font-medium">{product.name}</td>
							<td className="p-4">{product.sales}</td>
							<td className="p-4">
								$
								{product.revenue.toLocaleString("es-MX", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
