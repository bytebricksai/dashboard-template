import { ProductsEmptyState } from "@/components/products/empty-state";
import { ProductsTable } from "@/components/products/products-table";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import { Product } from "@/types/products";

const mockProducts: Product[] = [
	{
		id: "PROD-001",
		name: "Camisa Casual",
		price: 299.99,
		stock: 50,
		category: "Ropa",
		status: "inactive",
		lastUpdated: "2024-03-20",
	},
	{
		id: "PROD-002",
		name: "Pantalón de Vestir",
		price: 499.99,
		stock: 3,
		category: "Ropa",
		status: "active",
		lastUpdated: "2024-03-19",
	},
	{
		id: "PROD-003",
		name: "Camisa Negra",
		price: 169.99,
		stock: 100,
		category: "Ropa",
		status: "active",
		lastUpdated: "2025-04-04",
	},
	{
		id: "PROD-004",
		name: "Zapatos Formales",
		price: 799.99,
		stock: 2,
		category: "Calzado",
		status: "active",
		lastUpdated: "2024-04-15",
	},
];

export default function ProductsPage() {
	const hasProducts = mockProducts.length > 0;

	return (
		<div className="flex flex-col gap-6 p-4 lg:p-6">
			<div className="flex flex-row items-center justify-between">
				<h1 className="text-2xl font-bold">Mis productos</h1>
				<Button>
					<IconPlus className="mr-2 h-4 w-4" />
					Agregar Producto
				</Button>
			</div>

			{!hasProducts ? (
				<ProductsEmptyState />
			) : (
				<ProductsTable products={mockProducts} />
			)}
		</div>
	);
}
