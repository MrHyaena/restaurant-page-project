import restaurant from "./restaurant.jpg";

export function aboutDom() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const restTitleDiv = document.createElement("div");
  restTitleDiv.setAttribute("id", "restTitleDiv");
  contentDiv.appendChild(restTitleDiv);

  const restTitle = document.createElement("h2");
  restTitle.textContent = "Family restaurant with lasting tradition";
  restTitleDiv.appendChild(restTitle);

  const aboutDiv = document.createElement("div");
  aboutDiv.setAttribute("id", "aboutDiv");
  contentDiv.appendChild(aboutDiv);

  const restPara = document.createElement("p");
  restPara.textContent =
    "**La Famiglia Pizza** is a cozy, family-owned pizzeria where tradition meets flavor. Nestled in the heart of the community, we pride ourselves on serving delicious, hand-tossed pizzas made from scratch using only the freshest ingredients. Whether you're craving a classic Margherita or something more adventurous, our menu offers a wide range of options to satisfy every palate. With a warm and inviting atmosphere, La Famiglia Pizza is the perfect spot for a casual family dinner, a quick lunch, or even a cozy date night. We treat every customer like family, offering friendly service, great food, and a place where everyone can feel at home. Come join us, and taste the love in every slice!";
  aboutDiv.appendChild(restPara);

  const restaurantImage = new Image();
  restaurantImage.src = restaurant;
  restaurantImage.setAttribute("id", "restaurant");
  aboutDiv.appendChild(restaurantImage);
}
