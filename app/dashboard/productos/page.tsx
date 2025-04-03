import { ProductsEmptyState } from "@/components/products/empty-state";

export default function ProductsPage() {
	const hasProducts = false;

	return (
		<div className="flex h-full w-full items-center justify-center p-8">
			{!hasProducts ? (
				<ProductsEmptyState />
			) : // Products table will go here
			null}
		</div>
	);
}
