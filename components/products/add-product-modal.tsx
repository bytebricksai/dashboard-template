"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { IconPlus } from "@tabler/icons-react";

export function AddProductModal() {
	const [open, setOpen] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here we'll add the logic to save the product
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>
					<IconPlus className="mr-2 h-4 w-4" />
					Agregar Producto
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Agregar Nuevo Producto</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="grid gap-4 py-4">
					<div className="grid gap-2">
						<Label htmlFor="name">Nombre del Producto</Label>
						<Input id="name" placeholder="Ej: Camisa Casual" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="price">Precio</Label>
						<Input
							id="price"
							type="number"
							placeholder="299.99"
							step="0.01"
							min="0"
							required
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="stock">Stock Inicial</Label>
						<Input id="stock" type="number" placeholder="50" min="0" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="category">Categoría</Label>
						<Select required>
							<SelectTrigger>
								<SelectValue placeholder="Selecciona una categoría" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ropa">Ropa</SelectItem>
								<SelectItem value="electronica">Electrónica</SelectItem>
								<SelectItem value="hogar">Hogar</SelectItem>
								<SelectItem value="accesorios">Accesorios</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="flex justify-end gap-3 mt-4">
						<Button
							variant="outline"
							type="button"
							onClick={() => setOpen(false)}
						>
							Cancelar
						</Button>
						<Button type="submit">Guardar Producto</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
