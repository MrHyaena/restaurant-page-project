export function menuDom() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const menuTitleDiv = document.createElement("div");
  menuTitleDiv.setAttribute("id", "restTitleDiv");
  contentDiv.appendChild(menuTitleDiv);

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Our menu will deconstruct your taste buds!";
  menuTitleDiv.appendChild(menuTitle);

  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menuDiv");
  contentDiv.appendChild(menuDiv);

  const menuLabel = document.createElement("H2");
  menuLabel.textContent = "Our pizzalicioush menu!";
  menuDiv.appendChild(menuLabel);

  const menuList = document.createElement("ul");
  menuDiv.appendChild(menuList);

  for (let i = 1; i < 11; i++) {
    const menuItem = document.createElement("li");
    menuItem.setAttribute("id", "item" + i);
    menuList.appendChild(menuItem);
  }

  document.getElementById("item1").textContent = "Pizza Deliciosa - 10 EUR";
  document.getElementById("item2").textContent = "Pizza Margarita - 11 EUR";
  document.getElementById("item3").textContent = "Pizza Salami - 12 EUR";
  document.getElementById("item4").textContent = "Pizza Prosciuto - 12 EUR";
  document.getElementById("item5").textContent = "Pizza Hawai - 12 EUR";
  document.getElementById("item6").textContent = "Pizza Fungi - 13 EUR";
  document.getElementById("item7").textContent =
    "Pizza Quatro Formagi - 13 EUR";
  document.getElementById("item8").textContent = "Pizza Deliciosa - 13 EUR";
  document.getElementById("item9").textContent = "Pizza Diavola - 14 EUR";
  document.getElementById("item10").textContent = "Pizza Mexicana - 15 EUR";
}
