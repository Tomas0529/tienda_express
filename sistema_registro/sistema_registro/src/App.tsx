import { useState } from 'react';
import { RegistroProducto } from './RegistroProducto';
import type { Producto } from './RegistroProducto';
import { ListaProductos } from './ListaProductos';
import { RegistroPedido } from './RegistroPedido';
import type { Pedido, Estado } from './RegistroPedido';
import { ListaPedidos } from './ListaPedidos';

export default function App() {
    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [listaPedidos, setListaPedidos] = useState<Pedido[]>([]);

    const agregarProducto = (nuevo: Producto) => {
        setListaProductos([...listaProductos, nuevo]);
    };

    const eliminarProducto = (indice: number) => {
        setListaProductos(listaProductos.filter((_, i) => i !== indice));
    };

    const agregarPedido = (nuevo: Pedido) => {
        setListaPedidos([...listaPedidos, nuevo]);

        /*Al registrar el pedido se descuenta la cantidad del stock del producto*/
        setListaProductos(
            listaProductos.map((p) =>
                p.nombre === nuevo.producto
                    ? { ...p, stock: p.stock - nuevo.cantidad }
                    : p
            )
        );
    };

    const eliminarPedido = (indice: number) => {
        setListaPedidos(listaPedidos.filter((_, i) => i !== indice));
    };

    /*Recorre los pedidos y solo cambia el estado del que tenga el índice indicado*/
    const cambiarEstado = (indice: number, estado: Estado) => {
        setListaPedidos(
            listaPedidos.map((p, i) => (i === indice ? { ...p, estado: estado } : p))
        );
    };

    return (
        <>
            <h1>Tienda Express</h1>

            <RegistroProducto
                listaProductos={listaProductos}
                agregar={agregarProducto}
            />
            <ListaProductos
                listaProductos={listaProductos}
                eliminar={eliminarProducto}
            />

            <RegistroPedido
                listaProductos={listaProductos}
                agregar={agregarPedido}
            />
            <ListaPedidos
                listaPedidos={listaPedidos}
                eliminar={eliminarPedido}
                cambiarEstado={cambiarEstado}
            />
        </>
    );
}