
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

const aJson = JSON.stringify(destinoDisponible)
sessionStorage.setItem("Destinos disponible", aJson)


let fondosTotales = document.getElementById("fondosTotales")
fondosTotales.addEventListener("submit", presupuesto)

function presupuesto(e) {

    let budget = document.getElementById("budget").value
    let vuelo = document.getElementById("vuelo").value
    let hospedaje = document.getElementById("hospedaje").value
    let transporte = document.getElementById("transporte").value

    let suma = parseInt(vuelo) + parseInt(hospedaje) + parseInt(transporte)
    let restante = budget - suma

    mostrarAlerta(suma, restante)
}

function mostrarAlerta(suma, restante) {
    let resultadoTotal = document.getElementById("resultadoTotal")
    let mostrar = document.createElement("div");

    mostrar.innerHTML = `
    <div class="container-data">
       <div class="alert alert-success" role="alert">
         <h4>El gasto total del viaje es de $${suma}</h4>
         <h4>Su dinero restante es de $${restante}</h4>
       </div>
       </div>
    `

    resultadoTotal.appendChild(mostrar)
}
