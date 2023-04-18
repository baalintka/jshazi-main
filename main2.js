import { OBJEKTUMLISTA } from "./adat.js";
import { objektumrendezes} from "./rendezes.js";
const kukaKep = `<img src="trash.jpg" alt="kep" class="kuka">`;
$(document).ready(function () {
  let jelszo = ""; 
  let beirt= prompt("Add meg a jelszót:");
  
  while (beirt !== jelszo) {
    beirt = prompt("Hibás jelszó, próbáld újra:");
  }
  
  
  init();
});
function init() {
  const ELEM = $("article");
  const tablazat = tablazatkeszit(OBJEKTUMLISTA);
  ELEM.html(tablazat);

  const gombnyomas=$("#gomb");
  
  
  
  gombnyomas.on("click", function () {
    let kulcs = event.target.id;
    console.log(kulcs);
    objektumrendezes(OBJEKTUMLISTA, kulcs);
    console.log(OBJEKTUMLISTA);
    init();
  });

  const torlesGombok = $('.torles');
  torlesGombok.on("click", function(){
    let adatIndex = $(this).attr("id");
    console.log(adatIndex)
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
      OBJEKTUMLISTA[index].név +
      "</td>";
    osszerak +=
      "<td  style='border: 1px solid black'>" +
      OBJEKTUMLISTA[index].fajta +
      "</td>";
    osszerak +=
      "<td  style='border: 1px solid black'>" +
      OBJEKTUMLISTA[index].kor +
      "</td>";
    osszerak +=
      `<td id="lel"> <button id='${index}' class='torles' class='btn btn-danger'><img src='trash.jpg' alt='kuka' class='kuka'></button> 
      </td>`;
    osszerak += "</tr>";
  }
  osszerak += "</table>";
  return osszerak;
}
