import { ESTADOS } from './RegistroPedido';
import type { Pedido, Estado } from './RegistroPedido';

interface Props {
    listaPedidos: Pedido[];
    eliminar: (indice: number) => void;
    cambiarEstado: (indice: number, estado: Estado) => void;
}

export function ListaPedidos({ listaPedidos, eliminar, cambiarEstado }: Props) {
    return (
        <>
            <h3>Pedidos registrados</h3>

            {listaPedidos.map((pedido, indice) => (
                <div key={pedido.id}>
                    <p>Cliente: {pedido.cliente}</p>
                    <p>Producto: {pedido.producto}</p>
                    <p>Cantidad: {pedido.cantidad}</p>
                    <p>Fecha: {pedido.fecha}</p>

                    <label htmlFor={`estado-${pedido.id}`}>Estado: </label>
                    <select
                        id={`estado-${pedido.id}`}
                        value={pedido.estado}
                        onChange={(e) => cambiarEstado(indice, e.target.value as Estado)}
                    >
                        {ESTADOS.map((estado) => (
                            <option key={estado} value={estado}>
                                {estado}
                            </option>
                        ))}
                    </select>

                    <button type="button" onClick={() => eliminar(indice)}>
                        Eliminar
                    </button>
                    <hr />
                </div>
            ))}
        </>
    );
}