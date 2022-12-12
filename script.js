
class destino {
    constructor(continente, pais) {
        this.continente = continente;
        this.pais = pais;
    }
}

const asia = new destino("Asia", "China");
const america = new destino("America", "Argentina");
const africa = new destino("Africa", "Uganda");
const europa = new destino("Europa", "Italia");
const oceania = new destino("Oceania", "Australia");

const destinoDisponible = []
destinoDisponible.push(asia)
destinoDisponible.push(america)
destinoDisponible.push(africa)
destinoDisponible.push(europa)
destinoDisponible.push(oceania)

console.log(destinoDisponible);


fondosTotales = parseInt(prompt("¿Cuanto dinero posee?"))

function presupuesto() {
    vuelo = parseInt(prompt("ingrese costo de su vuelo"));
    hospedaje = parseInt(prompt("ingrese costo de su hospedaje"));
    transporte = parseInt(prompt("ingrese costo de transporte"));
    suma = vuelo + hospedaje + transporte;

    alert("El gasto total del viaje es " + suma);
}
presupuesto()

let resultadoSuma = parseInt(prompt("Ingrese el resultado de la suma del gasto total"))

if (fondosTotales >= resultadoSuma) {
    alert("Tiene suficiente dinero para demostrar")
}
else {
    alert("No tiene saldo suficiente para solventar su viaje")
}

let r = fondosTotales - resultadoSuma

alert(`Su dinero restante es de: ${r}`);

let d = 0;
do {
    alert(`Faltan ${d} semanas para su viaje`);
    d++;
} while (d <= 4);