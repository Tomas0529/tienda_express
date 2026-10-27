import { useState } from 'react';

export interface Producto {
    nombre: string;
    categoria: string;
    precio: number;
    stock: number;
}

interface Props {
    listaProductos: Producto[];
    agregar: (producto: Producto) => void;
}

export function RegistroProducto({ listaProductos, agregar }: Props) {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    const validar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if (nombre === "" || categoria === "" || precio === "" || stock === "") {
            alert("Todos los campos tienen que estar llenos");
            return;
        }

        if (Number(precio) <= 0 || Number(stock) < 0) {
            alert("El precio debe ser mayor a 0 y el stock no puede ser negativo");
            return;
        }

        if (listaProductos.some((p) => p.nombre.toLowerCase() === nombre.toLowerCase())) {
            alert("Ese producto ya está registrado");
            return;
        }

        const nuevoProducto: Producto = {
            nombre: nombre,
            categoria: categoria,
            precio: Number(precio),
            stock: Number(stock)
        };

        agregar(nuevoProducto);

        setNombre("");
        setCategoria("");
        setPrecio("");
        setStock("");
    };

    return (
        <>
            <h2>Registro de productos</h2>

            <form onSubmit={validar}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="categoria">Categoría</label>
                    <input
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="precio">Precio</label>
                    <input
                        id="precio"
                        type="number"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="stock">Stock</label>
                    <input
                        id="stock"
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>

                <button type="submit">Registrar producto</button>
            </form>
        </>
    );
}