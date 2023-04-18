import { OBJEKTUMLISTA } from "./adat.js";
import { objektumrendezes, rendezesSzamszerint } from "./rendezes.js";
const kukaKep = `<img src="trash.jpg" alt="kep" class="kuka">`;
$(document).ready(function () {
  init();
});
function init() {
  const ELEM = $("article");
  const tablazat = tablazatkeszit(OBJEKTUMLISTA);
  ELEM.html(tablazat);

  
  const torlesGombok = $("button.btn-danger");
  torlesGombok.on("click", function (event) {
    const adatIndex = $(event.target).closest(".card").index();
    OBJEKTUMLISTA.splice(adatIndex, 1);
    init();
  });
  const inputElem = $("#keres");
  inputElem.on("keyup", kereses);
}
function kereses() {
  let input = document.getElementById("keres");

  let filter = input.value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    let name = cards[i].querySelector(".card-title").textContent.toLowerCase();

    if (name.indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}


function tablazatkeszit(OBJEKTUMLISTA) {
  let osszerak = "";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    osszerak +=
      "<div class='row-md-3'>" +
      "<div class='card'>" +
      "<div class='card-body'>" +
      "<h5 class='card-title'>" +
      OBJEKTUMLISTA[index].név +
      "</h5>" +
      "<p class='card-text'>" +
      "<strong>Fajta: </strong>" +
      OBJEKTUMLISTA[index].fajta +
      "</p>" +
      "<p class='card-text'>" +
      "<strong>Kor: </strong>" +
      OBJEKTUMLISTA[index].kor +
      "</p>" +
      "</div>" +
      "<div class='card-footer'>" +
      OBJEKTUMLISTA[index].kép +
      "</div>" +
      "</div>" +
      "</div>";
  }

  return osszerak;
}
function divek(OBJEKTUMLISTA) {
  let hozzad = "";
  hozzad += "<div class='row'>";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    hozzad += tablazatkeszit(OBJEKTUMLISTA[index]);
  }
  hozzad += "</div>";
  return hozzad;
}
