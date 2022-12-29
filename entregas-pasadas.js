// JS de entregas pasadas

function destino(continente, pais1, pais2, pais3) {
    this.continente = continente;
    this.pais1 = pais1;
    this.pais2 = pais2;
    this.pais3 = pais3;
}
 
const america = new destino("America", "Argentina", "México", "Estados Unidos");
const europa = new destino("Europa", "Alemania", "Italia", "España");
const asia = new destino("Asia", "China", "India", "Indonesia");
const africa = new destino("Africa", "Uganda", "Marruecos", "Egipto");
const oceania = new destino("Oceania", "Australia", "Nueva Zelanda", "Fiji");


const destinoDisponible = []
destinoDisponible.push(asia)
destinoDisponible.push(america)
destinoDisponible.push(africa)
destinoDisponible.push(europa)
destinoDisponible.push(oceania)

console.log(destinoDisponible); // eliminar este clg

function filtrarDestinosPorContinente(destinos, continente) {
    return destinos.filter(d => d.continente === continente);
}

const destinosEnAsia = filtrarDestinosPorContinente(destinoDisponible, 'Asia');
console.log(destinosEnAsia);


fondosTotales = parseInt(prompt("¿Cuanto dinero posee?"))

function presupuesto() {
    vuelo = parseInt(prompt("ingrese costo de su vuelo"));
    hospedaje = parseInt(prompt("ingrese costo de su hospedaje"));
    transporte = parseInt(prompt("ingrese costo de transporte"));
    suma = vuelo + hospedaje + transporte;

    alert("El gasto total del viaje es " + suma); // mostrar mensaje debajo de los primeros inputs
}
presupuesto()

let resultadoSuma = parseInt(prompt("Ingrese el resultado de la suma del gasto total"))



if (fondosTotales >= resultadoSuma) {
    alert("Tiene suficiente dinero para demostrar")
}
else {
    alert("No tiene saldo suficiente para solventar su viaje")
}



let result = fondosTotales - resultadoSuma

alert(`Su dinero restante es de: ${result}`);

let semanas = 0; // corregir este loop
do {
    alert(`Faltan ${semanas} semanas para su viaje`);
    semanas++;
} while (semanas <= 4);
