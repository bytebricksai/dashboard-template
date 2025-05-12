"use client";

import { Card, CardContent } from "@/components/ui/card";
import { IconX } from "@tabler/icons-react";

interface ErrorCardProps {
	title: string;
	message: string;
};

export function ErrorCard({ title, message }:ErrorCardProps) {
	return (
		<Card className="bg-card rounded-xl p-4 shadow flex flex-col justify-center items-center">
			<CardContent className="flex flex-col justify-center items-center">
				<IconX className="w-8 h-8 mb-4"/>
				<h3 className="text-md font-semibold mb-2">{title}</h3>
				<p className="text-sm text-muted-foreground">{message}</p>
			</CardContent>
		</Card>
	);
}
