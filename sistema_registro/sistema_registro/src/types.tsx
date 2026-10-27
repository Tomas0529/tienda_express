export type Estado = "Pendiente" | "En proceso" | "Entregado";

export const ESTADOS: Estado[] = ["Pendiente", "En proceso", "Entregado"];

export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
}

export interface Pedido {
  id: number;
  cliente: string;
  productoId: number;
  cantidad: number;
  fecha: string;
  estado: Estado;
}