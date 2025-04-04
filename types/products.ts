export type Product = {
	id: string;
	name: string;
	price: number;
	stock: number;
	category: string;
	status: "active" | "inactive";
	lastUpdated: string;
};
