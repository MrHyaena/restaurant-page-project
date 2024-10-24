import "./styles.css";
import Icon from "./pizza-image.jpg";
import { menuDom } from "./menu";
import { aboutDom } from "./about.js";

console.log;

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", homepageDom);
menuBtn.addEventListener("click", menuDom);
aboutBtn.addEventListener("click", aboutDom);

homepageDom();

function homepageDom() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const restTitleDiv = document.createElement("div");
  restTitleDiv.setAttribute("id", "restTitleDiv");
  contentDiv.appendChild(restTitleDiv);

  const restTitle = document.createElement("h2");
  restTitle.textContent = "Want your brain melted?";
  restTitleDiv.appendChild(restTitle);

  const restHook = document.createElement("h1");
  restHook.textContent = "Our pizza cheese crust will do IT!";
  restTitleDiv.appendChild(restHook);

  const homeContentDiv = document.createElement("div");
  homeContentDiv.setAttribute("id", "homeContentDiv");
  contentDiv.appendChild(homeContentDiv);

  const pizzaImage = new Image();
  pizzaImage.src = Icon;
  pizzaImage.setAttribute("id", "pizzaImage");
  homeContentDiv.appendChild(pizzaImage);

  const openingHoursDiv = document.createElement("div");
  openingHoursDiv.setAttribute("id", "openingHoursDiv");
  contentDiv.appendChild(openingHoursDiv);

  const openingHours = document.createElement("table");
  openingHoursDiv.appendChild(openingHours);

  const tableHeadRow = document.createElement("tr");
  tableHeadRow.setAttribute("id", "tableHeadRow");
  openingHours.appendChild(tableHeadRow);

  for (let i = 1; i < 4; i++) {
    const tableHead = document.createElement("th");
    tableHead.setAttribute("id", "head" + i);
    tableHeadRow.appendChild(tableHead);
  }
  document.getElementById("head1").textContent = "Days";
  document.getElementById("head2").textContent = "Opening";
  document.getElementById("head3").textContent = "Closing";

  for (let i = 1; i < 8; i++) {
    const tableDayRow = document.createElement("tr");
    tableHeadRow.setAttribute("id", "tableRow" + i);
    openingHours.appendChild(tableDayRow);
    for (let a = 1; a < 4; a++) {
      const tableRowCell = document.createElement("td");
      tableRowCell.setAttribute("id", "cell" + i + a);
      tableDayRow.appendChild(tableRowCell);
    }
  }
  document.getElementById("cell11").textContent = "Monday";
  document.getElementById("cell21").textContent = "Tuesday";
  document.getElementById("cell31").textContent = "Wednesday";
  document.getElementById("cell41").textContent = "Thursday";
  document.getElementById("cell51").textContent = "Friday";
  document.getElementById("cell61").textContent = "Saturday";
  document.getElementById("cell71").textContent = "Sunday";

  document.getElementById("cell12").textContent = "8:00";
  document.getElementById("cell22").textContent = "8:00";
  document.getElementById("cell32").textContent = "8:00";
  document.getElementById("cell42").textContent = "8:00";
  document.getElementById("cell52").textContent = "8:00";
  document.getElementById("cell62").textContent = "9:00";
  document.getElementById("cell72").textContent = "10:00";

  document.getElementById("cell13").textContent = "22:00";
  document.getElementById("cell23").textContent = "22:00";
  document.getElementById("cell33").textContent = "22:00";
  document.getElementById("cell43").textContent = "22:00";
  document.getElementById("cell53").textContent = "22:00";
  document.getElementById("cell63").textContent = "24:00";
  document.getElementById("cell73").textContent = "24:00";

  const address = document.createElement("h2");
  address.textContent = "Address: 130 00 Prague, Pankrac 1024";
  contentDiv.appendChild(address);
}
