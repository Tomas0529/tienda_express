import { Contador } from "./carrito-compra/contador";

interface item_Producto{
    producto: String;
    valor_cont: number;
}

const item_Producto= [
    {producto:"Tenis Mike","valor_cont":2},
    {producto:"Buso Ardidas","valor_cont":5},
    {producto:"Gorra Pumba","valor_cont":9},
    {producto:"Tenis Gordan","valor_cont":7},
]



export function PrimerComponente() {
    return (
        <>
            <section>
                <h1>carrito de compras</h1>
                {item_Producto.map(({producto,valor_cont})=>(
                    <Contador key={producto} name={producto} valor_cont={valor_cont}/>
                ))}
                
                {/* <Contador name="Tenis Mike" valor_cont={2}/>
                <Contador name="Buso ardidas" valor_cont={5}/>
                <Contador name="Gorra pumba" valor_cont={9}/> */}

            </section>
        </>
    );
}