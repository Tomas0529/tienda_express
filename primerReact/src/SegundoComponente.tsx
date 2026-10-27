
const PrimerNombre='Tomas';
const PrimerApellido='Ramirez';
const vectorSemana=["Lunes","Martes","Miercoles","Jueves"];
const Direccion={
    ciudad:"Pereira", 
    Departamento:"Risaralda", 
    Barrio:"Poblado 2"
};

export function SegundoComponente(){
    return (
        <>
        <h1>{PrimerNombre}</h1>
        <h1>{PrimerApellido}</h1>
        <p>{vectorSemana.join(' , ')}</p>
        <p>{2+2}</p>
        <p style={{
            backgroundColor:"red",
            borderRadius:10,
            padding:10,
        }}>{JSON.stringify(Direccion)}</p>

        </>
    );
}