fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    let storedResults = JSON.parse(sessionStorage.getItem('searchResults'));
    if (storedResults) {
      displayResults(storedResults);
    }

    function buscarData(searchTerm, continent) {
      let results = [];
      if (continent === 'all') {
        for (let c in data) {
          for (let i = 0; i < data[c].countries.length; i++) {
            if (data[c].countries[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
              results.push(data[c].countries[i]);
            }
          }
        }
      } else {
        for (let i = 0; i < data[continent].countries.length; i++) {
          if (data[continent].countries[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(data[continent].countries[i]);
          }
        }
      }
      sessionStorage.setItem('searchResults', JSON.stringify(results));
      return results;
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
