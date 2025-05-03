"use client";
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
import { Button } from "@/components/ui/button";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Product } from "@/types/products";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ProductsTableProps {
	products: Product[];
}

export function ProductsTable({ products }: ProductsTableProps) {
	const [searchTerm, setSearchTerm] = useState("");

	// Filter products based on search term
	const filteredProducts = products.filter(
		(product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.id.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center w-full max-w-sm">
				<Input
					placeholder="Buscar producto..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="max-w-sm"
				/>
			</div>

			<Card className="overflow-hidden">
				<div className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>ID</TableHead>
								<TableHead>Producto</TableHead>
								<TableHead>Categoría</TableHead>
								<TableHead className="text-right">Stock</TableHead>
								<TableHead className="text-right">Precio</TableHead>
								<TableHead className="text-right">
									Última Actualización
								</TableHead>
								<TableHead className="text-right">Estado</TableHead>
								<TableHead className="text-center">Acciones</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredProducts.length > 0 ? (
								filteredProducts.map((product) => (
									<TableRow key={product.id}>
										<TableCell className="font-mono text-xs">
											{product.id}
										</TableCell>
										<TableCell className="font-medium">
											{product.name}
										</TableCell>
										<TableCell>{product.category}</TableCell>
										<TableCell className="text-right">
											<Badge
												variant={product.stock <= 5 ? "destructive" : "outline"}
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
										<TableCell className="text-right">
											{product.lastUpdated}
										</TableCell>
										<TableCell className="text-right">
											<Badge
												variant={
													product.status === "active" ? "default" : "secondary"
												}
											>
												{product.status === "active" ? "Activo" : "Inactivo"}
											</Badge>
										</TableCell>
										<TableCell>
											<div className="flex justify-center gap-2">
												<Button variant="ghost" size="icon">
													<IconEdit className="h-4 w-4" />
												</Button>
												<Button variant="ghost" size="icon">
													<IconTrash className="h-4 w-4" />
												</Button>
											</div>
										</TableCell>
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={8}
										className="text-center py-6 text-muted-foreground"
									>
										No se encontraron productos
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
			</Card>
		</div>
	);
}
