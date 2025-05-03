import { DashboardEmptyState } from "@/components/dashboard/empty-state";
import { DailySummary } from "@/components/dashboard/daily-summary";
import { TodaySalesTable } from "@/components/dashboard/today-sales-table";
import { LowStockTable } from "@/components/dashboard/low-stock-table";
import { Sale } from "@/types/sales";
import { Product } from "@/types/products";

const mockTodaySales: Sale[] = [
	{
		id: "SALE-001",
		date: "2025-05-03", // Today's date
		paymentType: "Tarjeta",
		ticket: "TICKET-001",
		item: "Camisa Casual",
		quantity: 2,
		total: 599.98,
	},
	{
		id: "SALE-002",
		date: "2025-05-03", // Today's date
		paymentType: "Efectivo",
		ticket: "TICKET-002",
		item: "Pantalón de Vestir",
		quantity: 1,
		total: 499.99,
	},
];

const mockLowStockProducts: Product[] = [
	{
		id: "PROD-002",
		name: "Pantalón de Vestir",
		price: 499.99,
		stock: 3, // Low stock
		category: "Ropa",
		status: "active",
		lastUpdated: "2024-03-19",
	},
	{
		id: "PROD-004",
		name: "Zapatos Formales",
		price: 799.99,
		stock: 2, // Low stock
		category: "Calzado",
		status: "active",
		lastUpdated: "2024-04-15",
	},
];

export default function DashboardPage() {
	const hasData = mockTodaySales.length > 0;
	const todayEarnings = mockTodaySales.reduce((sum, sale) => sum + sale.total, 0);

	return(
		<>
			{!hasData ? (
				<DashboardEmptyState />
			) : (
				<div className="flex flex-col gap-6 lg:p-6">
					<h1 className="text-2xl font-bold">Buenos días, Bienvenido.</h1>
					{/* Cartas */}
					<DailySummary
						todayEarnings={todayEarnings}
						salesCount={mockTodaySales.length}
						lowStockCount={mockLowStockProducts.length}
					/>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{/* Ventas del dia */}
						<div className="flex flex-col gap-3">
							<h2 className="text-lg font-semibold"> Ventas de hoy </h2>
							<TodaySalesTable sales={mockTodaySales} />
						</div>
						{/* Productos bajos en stock */}
						<div className="flex flex-col gap-3">
							<h2 className="text-lg font-semibold">Productos bajos en stock</h2>
							<LowStockTable products={mockLowStockProducts} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
