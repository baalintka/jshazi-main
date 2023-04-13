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
  THelem.on("click", function () {
    let torles = event.target.id;
    if (torles=='kukaz') {
        OBJEKTUMLISTA.splice('sor1','sor2','sor3',1)
        console.log(OBJEKTUMLISTA);
    }
    
    
    init();
  });
}

function tablazatkeszit(OBJEKTUMLISTA) {
  let osszerak =
    "<table class='table table-dark table-striped'style='border: 2px solid black'>";
  osszerak += "<tr><th id='név'>Név:</th><th id='fajta'>fajta:</th><th id='kor'>kor:</th><th></th>";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    osszerak += "<tr>";
    osszerak +=
      "<td id='sor1' style='border: 1px solid black'>" +
      OBJEKTUMLISTA[index].név +
      "</td>";
    osszerak +=
      "<td id='sor2' style='border: 1px solid black'>" +
      OBJEKTUMLISTA[index].fajta +
      "</td>";
    osszerak +=
      "<td id='sor3' style='border: 1px solid black'>" +
      OBJEKTUMLISTA[index].kor +
      "</td>";
      osszerak +=
      "<td id='kukaz' style='border: 1px solid black'>"+ kukaKep+
      "</td>";
    osszerak += "</tr>";
  }
  osszerak += "</table>";
  return osszerak;
}