"use client";

import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

interface SalesPerformanceChartProps {
	data: { date: string; sales: number }[];
}

export function SalesPerformanceChart({ data }: SalesPerformanceChartProps) {
	return (
		<div className="bg-card rounded-xl p-4 shadow">
			<h3 className="text-md font-semibold mb-2">
				Rendimiento de Ventas (7 días)
			</h3>
			<ResponsiveContainer width="100%" height={240}>
				<LineChart data={data}>
					<XAxis dataKey="date" stroke="#888" fontSize={12} />
					<YAxis stroke="#888" fontSize={12} />
					<Tooltip />
					<Line
						type="natural"
						dataKey="sales"
						stroke="#3b82f6"
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
