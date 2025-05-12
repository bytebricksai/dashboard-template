"use client";

import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorCard } from "./ErrorCard";

interface SalesPerformanceChartProps {
	data: { date: string; sales: number }[];
}

function Chart({ data }: SalesPerformanceChartProps) {
	return (
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
	);
};

export function SalesPerformanceChart({ data }: SalesPerformanceChartProps) {
	return (
		<ErrorBoundary fallback={<ErrorCard title="Rendimiento de ventas" message="Error al mostrar gráfico." />}>
			<div className="bg-card rounded-xl shadow p-4">
				<h3 className="text-md font-semibold mb-2">Rendimiento de ventas</h3>
				<Chart data={data} />
			</div>
		</ErrorBoundary>
	)
}
