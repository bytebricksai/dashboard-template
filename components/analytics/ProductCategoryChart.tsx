'use client';

import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Tooltip,
	Legend,
} from "recharts";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorCard } from "./ErrorCard";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

interface ProductCategoryChartProps {
	data: { category: string; percentage: number }[];
}

function Chart({ data }: ProductCategoryChartProps) {
	return (
			<ResponsiveContainer width="100%" height={240}>
				<PieChart>
					<Pie
						data={data}
						dataKey="percentage"
						nameKey="category"
						cx="50%"
						cy="50%"
						outerRadius={75}
						label
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
	);
};

export function ProductCategoryChart({ data }: ProductCategoryChartProps) {
	return (
		<ErrorBoundary fallback={<ErrorCard title="Ventas por categoría" message="Error al mostrar gráfico." />}>
			<div className="bg-card rounded-xl  p-4 shadow">
				<h3 className="text-md font-semibold mb-2">Ventas por categoría</h3>
				<Chart data={data} />
			</div>
		</ErrorBoundary>
	)
}
