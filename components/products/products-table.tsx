"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconSearch, IconPlus } from "@tabler/icons-react"
import { Product } from "@/types/products"

export function ProductsTable({ products }: { products: Product[] }) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4 w-3/4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar productos..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Button>
          <IconPlus className="mr-2 h-4 w-4" />
          Agregar Producto
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead className="text-right">Precio</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead className="text-right">Estado</TableHead>
              <TableHead className="text-right">Última Actualización</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">{product.stock}</TableCell>
                <TableCell className="text-right">
                  <Badge 
                    variant={product.status === "active" ? "default" : "secondary"}
                  >
                    {product.status === "active" ? "Activo" : "Inactivo"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{new Date(product.lastUpdated).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 