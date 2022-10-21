//Variables
const html = document.querySelector("html");
const lightButton = document.querySelector(".lightmode");
const dropdownContainer = document.querySelector(".containerText");
const dropdownList = document.querySelector(".dropdown");
const inputFilter = document.querySelector("#inputFilter");
const containerFilter = document.querySelector(".containerInputs");
const cardsContainer = document.querySelector(".cardsContainer");
const listElements = document.querySelectorAll(".listElements");
//API
const API_REST_URL = "https://restcountries.com/v2/all";
var datos = [];

//Eventos

cargarArray();
dropdownContainer.addEventListener("click", () => {
  dropdownList.classList.toggle("show");
});

lightButton.addEventListener("click", changeLight);

listElements.forEach((element) => {
  element.addEventListener("click", filterContinent);
});
//Funciones

function cargarArray() {
  onRequestHandler();
  console.log(datos);
  printCountries();
}

function onRequestHandler() {
  fetch(API_REST_URL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((pais) => {
        datos.push(pais);
      });
      printCountries(datos);
    });
}

function filterContinent() {
  console.log(this.dataset.country);
  printCountries(data);
}

function changeLight() {
  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
  } else if (html.dataset.theme === "light") {
    html.dataset.theme = "dark";
  }
}

function printCountries(continent = false, name = false) {
  const cards = datos
    .map((country) => {
      return `<div class="card">
            <img src="${country.flags.png}" alt="" />
            <h4>${country.name}</h4>
            <p>Population: <span>${country.population}</span></p>
            <p>Region: <span>${country.region}</span></p>
            <p>Capital: <span>${country.capital}</span></p></div>`;
    })
    .join(" ");
  cardsContainer.innerHTML = cards;
  console.log(datos);
}
