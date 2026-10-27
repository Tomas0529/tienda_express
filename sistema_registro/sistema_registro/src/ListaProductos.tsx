import type { Producto } from './RegistroProducto';

interface Props {
    listaProductos: Producto[];
    eliminar: (indice: number) => void;
}

export function ListaProductos({ listaProductos, eliminar }: Props) {
    return (
        <>
            <h3>Productos registrados</h3>

            {listaProductos.map((producto, indice) => (
                <div key={producto.nombre}>
                    <p>Nombre: {producto.nombre}</p>
                    <p>Categoría: {producto.categoria}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p>Stock: {producto.stock}</p>
                    <button type="button" onClick={() => eliminar(indice)}>
                        Eliminar
                    </button>
                    <hr />
                </div>
            ))}
        </>
    );
}