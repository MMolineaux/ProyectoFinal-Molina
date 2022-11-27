
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
    alert("Su visa será rechazada por saldo insuficiente")
}

let r = fondosTotales - resultadoSuma

alert(`Su dinero restante es de: ${r}`);

let d = 0;
do {
    alert(`Faltan ${d} semanas para su viaje`);
    d++;
} while (d <= 4);