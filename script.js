

let fondosTotales = document.getElementById("fondosTotales")
fondosTotales.addEventListener("submit", presupuesto)

function presupuesto(e) {

    e.preventDefault();

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
