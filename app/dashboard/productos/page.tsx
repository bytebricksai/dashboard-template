import { ProductsEmptyState } from "@/components/products/empty-state";
import { ProductsTable } from "@/components/products/products-table";
import { Product } from "@/types/products";

export const mockProducts: Product[] = [
	{
		id: "PROD-001",
		name: "Camisa Casual",
		price: 299.99,
		stock: 50,
		category: "Ropa",
		status: "active",
		lastUpdated: "2024-03-20",
	},
	{
		id: "PROD-002",
		name: "Pantalón de Vestir",
		price: 499.99,
		stock: 30,
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
		lastUpdated: "2025-04-04"
	}
	// Add more mock products as needed
];

export default function ProductsPage() {
	const hasProducts = true;

	return (
		<div className="flex h-full w-full items-center justify-center p-8">
			{!hasProducts ? (
				<ProductsEmptyState />
			) : (
				<ProductsTable products={mockProducts} />
			)}
		</div>
	);
}


