'use client'

import { AnalyticsEmptyState } from "@/components/analytics/AnalyticsEmptyState";
import { KpiCards } from "@/components/analytics/KpiCards";
import { ProductCategoryChart } from "@/components/analytics/ProductCategoryChart";
import { SalesPerformanceChart } from "@/components/analytics/SalesChart";
import { TopProductsTable } from "@/components/analytics/TopProductsTable";

const hasData = true;
const mockKpis = {
    monthlySales: 45000,
    monthlyTarget: 60000,
    averageTicket: 425.50,
    customerRetention: 78
};

const mockTopProducts = [
    { name: "Camisa Casual", sales: 24, revenue: 7199.76 },
    { name: "Pantalón de Vestir", sales: 15, revenue: 7499.85 },
    { name: "Zapatos Formales", sales: 8, revenue: 6399.92 },
    { name: "Camisa Negra", sales: 12, revenue: 2039.88 },
];

const mockSalesData = [
    { date: "2025-04-27", sales: 3500 },
    { date: "2025-04-28", sales: 4200 },
    { date: "2025-04-29", sales: 3800 },
    { date: "2025-04-30", sales: 4500 },
    { date: "2025-05-01", sales: 5200 },
    { date: "2025-05-02", sales: 4800 },
    { date: "2025-05-03", sales: 1100 }, // Today (partial day)
];

const mockCategoryData = [
    { category: "Ropa", percentage: 45 },
    { category: "Calzado", percentage: 30 },
    { category: "Accesorios", percentage: 15 },
    { category: "Otros", percentage: 10 },
];

export default function AnalyticsPage() {
    return (
        <div className="flex flex-col gap-6 p-4 lg:p-6" suppressHydrationWarning>
            <h1 className="text-2xl font-bold">Analíticas de mi negocio</h1>

            {!hasData ? (
                <AnalyticsEmptyState />
            ) : (
                <>
                    <KpiCards 
                    monthlySales={mockKpis.monthlySales}
                    monthlyTarget={mockKpis.monthlyTarget}
                    averageTicket={mockKpis.averageTicket}
                    customerRetention={mockKpis.customerRetention}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <SalesPerformanceChart data={mockSalesData} />
                        <ProductCategoryChart data={mockCategoryData} />
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-semibold">Productos mas vendidos</h2>
                        <TopProductsTable products={mockTopProducts} />
                    </div>
                </> 
            )}
        </div>
    );
};