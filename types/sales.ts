export type Sale = {
    id: string
    date: string
    paymentType: "Efectivo" | "Tarjeta" | "Transferencia"
    ticket: string
    item: string
    quantity: number
    total: number
}