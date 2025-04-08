import { Sale } from "@/types/sales";
import React from "react";
import { SalesTable } from "@/components/sales/sales-table";
import { SalesOverview } from "@/components/sales/sales-overview";

const mockSales: Sale[] = [
	{
		id: "SALE-001",
		date: "2024-03-20",
		paymentType: "Tarjeta",
		ticket: "TICKET-001",
		item: "Camisa Casual",
		quantity: 2,
		total: 599.98,
	},
	{
		id: "SALE-002",
		date: "2024-03-19",
		paymentType: "Efectivo",
		ticket: "TICKET-002",
		item: "Pantalón de Vestir",
		quantity: 1,
		total: 499.99,
	},
	// Add more mock sales as needed
];

const VentasPage = () => {
	const totalSales = mockSales.reduce((acc, sale) => acc + sale.total, 0);
	const monthlyGoal = 500000;
	return(
		<div className="h-full w-full p-8">
			<SalesOverview totalSales={totalSales} monthlyGoal={monthlyGoal} />
			<SalesTable sales={mockSales} />
		</div>
	);
};

export default VentasPage;
