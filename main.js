import { OBJEKTUMLISTA } from "./adat.js";
import { objektumrendezes, rendezesSzamszerint } from "./rendezes.js";
const kukaKep=`<img src="trash.jpg" alt="kep" class="kuka">`;
$(document).ready(function () {
  init();
});
function init() {
  
  const ELEM = $("article");
  const tablazat = tablazatkeszit(OBJEKTUMLISTA);
  ELEM.html(tablazat);

  
  const THelem = $("th");
  THelem.on("click", function () {
    let kulcs = event.target.id;
    console.log(kulcs);
    objektumrendezes(OBJEKTUMLISTA, kulcs);
    console.log(OBJEKTUMLISTA);
    init();
  });
  const torlesGombok = $("button.btn-danger");
  torlesGombok.on("click", function (event) {
    const adatIndex = $(event.target).closest(".card").index();
    OBJEKTUMLISTA.splice(adatIndex, 1);
    init();
  });
}

function tablazatkeszit(OBJEKTUMLISTA) {
  
    
  let osszerak = "";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    osszerak+= "<div class='row-md-3'>" +
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
    
    "</div>" +
    "</div>" +
    "</div>";
  }
  
  return osszerak;
}
function divek(OBJEKTUMLISTA){
  let hozzad="";
  hozzad+="<div class='row'>";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    hozzad += tablazatkeszit(OBJEKTUMLISTA[index]);
  }
  hozzad += "</div>";
  return hozzad;
}
