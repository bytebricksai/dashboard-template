'use client';

import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Tooltip,
	Legend,
} from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

interface ProductCategoryChartProps {
	data: { category: string; percentage: number }[];
}

export function ProductCategoryChart({ data }: ProductCategoryChartProps) {
	return (
		<div className="bg-card rounded-xl p-4 shadow">
			<h3 className="text-md font-semibold mb-2">Distribución por Categoría</h3>
			<ResponsiveContainer width="100%" height={240}>
				<PieChart>
					<Pie
						data={data}
						dataKey="percentage"
						nameKey="category"
						cx="50%"
						cy="50%"
						outerRadius={80}
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
		</div>
	);
}
