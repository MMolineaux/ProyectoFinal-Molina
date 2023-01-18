fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    function buscarData(searchTerm, continent) {
      let resultados = [];
      if (continent === 'all') {
        for (let c in data) {
          for (let i = 0; i < data[c].countries.length; i++) {
            if (data[c].countries[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
              resultados.push(data[c].countries[i]);
            }
          }
        }
      } else {
        for (let i = 0; i < data[continent].countries.length; i++) {
          if (data[continent].countries[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
            resultados.push(data[continent].countries[i]);
          }
        }
      }
      return resultados;
    }


    let searchInput = document.querySelector('#search-input');
    let searchButton = document.querySelector('#search-button');
    let continentSelect = document.querySelector('#continent-select');
    searchButton.addEventListener('click', function () {
      let searchResults = buscarData(searchInput.value, continentSelect.value);

      displayResults(searchResults);
    });
  });


function displayResults(results) {
  let resultsContainer = document.querySelector('#results-container');
  resultsContainer.innerHTML = '';
  for (let i = 0; i < results.length; i++) {
    let item = document.createElement('p');
    item.innerHTML = `País: ${results[i].name} <br> Capital: ${results[i].capital}`;
    resultsContainer.appendChild(item);
  }


}

/* function destino(continente, pais1, pais2, pais3) {
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
destinoDisponible.push(oceania) */

/* const aJson = JSON.stringify(destinoDisponible)
sessionStorage.setItem("Destinos disponible", aJson) */


let fondosTotales = document.getElementById("fondosTotales")
fondosTotales.addEventListener("submit", presupuesto)

function presupuesto(e) {

  e.preventDefault()

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
