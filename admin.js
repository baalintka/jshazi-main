import { OBJEKTUMLISTA } from "./adat.js";
import { objektumrendezes } from "./rendezes.js";

$(document).ready(function () {
  
  init();
});
function init() {
  const ELEM = $("article");
  ELEM.empty();
  const tablazat = tablazatkeszit(OBJEKTUMLISTA);
  const ujkutyus = ujkutyaKeszit();

  ELEM.append(ujkutyus);
  ELEM.append(tablazat);

  const gombnyomas = $(".gomb");

  gombnyomas.on("click", function () {
    let kulcs = $(this).attr("id").slice(2);
    console.log(kulcs);
    
    objektumrendezes(OBJEKTUMLISTA, kulcs);
    
    init();
  });

  const torlesGombok = $(".torles");
  torlesGombok.on("click", function () {
    let adatIndex = $(this).attr("id");
    console.log(adatIndex);
    OBJEKTUMLISTA.splice(adatIndex, 1);
    console.log(OBJEKTUMLISTA);
    init();
  });
}

function tablazatkeszit(OBJEKTUMLISTA) {
  let osszerak =
    "<table class='table table-dark table-striped'style='border: 2px solid black'>";
  osszerak +=
    "<tr><th id='név'>Név:</th><th id='fajta'>fajta:</th><th id='kor'>kor:</th><th></th>";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    osszerak += "<tr>";
    osszerak +=
      "<td style='border: 1px solid black'>" +
      OBJEKTUMLISTA[index].nev +
      "</td>";
    osszerak +=
      "<td  style='border: 1px solid black'>" +
      OBJEKTUMLISTA[index].fajta +
      "</td>";
    osszerak +=
      "<td  style='border: 1px solid black'>" +
      OBJEKTUMLISTA[index].kor +
      "</td>";
    osszerak += `<td id="lel"> <button id='${index}' class='torles' class='btn btn-danger'><img src='trash.jpg' alt='kuka' class='kuka'></button> 
      </td>`;
    osszerak += "</tr>";
  }
  osszerak += "</table>";
  return osszerak;
}
function ujkutyaKeszit() {
  let rak = "<div id='adat1'>";
  rak += "<form id='ujkutya-form'>";
  rak += "<div id='ujkutyaa'><p>Új kutya: </p></div>";

  rak +=
    "<div><label for='nev'>Kutya neve:</label><input type='text' id='nev' name='nev'></div>";
  rak +=
    "<div><label for='fajta'>Kutya fajtája:</label><input type='text' id='fajta' name='fajta'></div>";
  rak +=
    "<div><label for='kor'>Kutya kora:</label><input type='text' id='kor' name='kor'></div>";
  rak += "<div><button id='ujkutya-hozzaadas' class=''>Mentés</button></div>";
  rak += "</form></div>";

  const ujkutyaForm = $(rak);

  ujkutyaForm.find("#ujkutya-hozzaadas").on("click", function (event) {
    event.preventDefault();
    let nev = $("#nev").val();
    let fajta = $("#fajta").val();
    let kor = $("#kor").val();
    let ujKutya = { nev: nev, fajta: fajta, kor: kor };
    OBJEKTUMLISTA.push(ujKutya);
    init();
  });

  return ujkutyaForm;
}
