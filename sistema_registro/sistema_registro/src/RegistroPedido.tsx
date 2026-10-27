import { useState } from 'react';
import type { Producto } from './RegistroProducto';

export type Estado = "Pendiente" | "En proceso" | "Entregado";

export const ESTADOS: Estado[] = ["Pendiente", "En proceso", "Entregado"];

export interface Pedido {
    id: number;
    cliente: string;
    producto: string;
    cantidad: number;
    fecha: string;
    estado: Estado;
}

interface Props {
    listaProductos: Producto[];
    agregar: (pedido: Pedido) => void;
}

/*Creamos el estado para cada campo*/
export function RegistroPedido({ listaProductos, agregar }: Props) {
    const [cliente, setCliente] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [fecha, setFecha] = useState(new Date().toISOString().slice(0, 10));

    const validar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        /*Validacion de campos, si esta vacio no puede registrar*/

        if (cliente === "" || producto === "" || cantidad === "" || fecha === "") {
            alert("Todos los campos tienen que estar llenos");
            return;
        }

        if (Number(cantidad) <= 0) {
            alert("La cantidad debe ser mayor a 0");
            return;
        }

        /*find busca el producto elegido para comparar la cantidad con su stock*/
        const productoElegido = listaProductos.find((p) => p.nombre === producto);

        if (!productoElegido || Number(cantidad) > productoElegido.stock) {
            alert("No hay stock suficiente para ese pedido");
            return;
        }

        const nuevoPedido: Pedido = {
            id: Date.now(),
            cliente: cliente,
            producto: producto,
            cantidad: Number(cantidad),
            fecha: fecha,
            estado: "Pendiente"
        };

        agregar(nuevoPedido);

        setCliente("");
        setProducto("");
        setCantidad("");
    };

    return (
        <>
            <h2>Registro de pedidos</h2>

            <form onSubmit={validar}>
                <div>
                    <label htmlFor="cliente">Cliente</label>
                    <input
                        id="cliente"
                        value={cliente}
                        onChange={(e) => setCliente(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="producto">Producto</label>
                    <select
                        id="producto"
                        value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                    >
                        <option value="">Selecciona un producto</option>
                        {listaProductos.map((p) => (
                            <option key={p.nombre} value={p.nombre}>
                                {p.nombre} (stock {p.stock})
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id="cantidad"
                        type="number"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="fecha">Fecha</label>
                    <input
                        id="fecha"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <button type="submit">Registrar pedido</button>
            </form>
        </>
    );
}