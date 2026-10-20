interface props_contador{
    name:string;
    valor_cont:number;
}

export function Contador({name,valor_cont}:props_contador){

    const click_mouse=()=>{
        console.log("click_mouse ${name}")
    }

    return(
        <>
            <section style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                margin: 10
            }}>

                <span style={{
                    width: 150,
                }}>{name}</span>
                <button onClick={click_mouse}>+1</button>
                <span>{valor_cont}</span>
                <button>-1</button>

            </section>
        </>
    )
}