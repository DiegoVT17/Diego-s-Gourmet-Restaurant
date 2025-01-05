import data from "./menu.json";

const menuData = data.menu;

export default function createTitle() {
  const h1 = document.createElement("h1");
  const main = document.createElement("div");
  const dishContainer = createDishesContainer();

  h1.innerHTML = "Menu";
  main.classList.add("container");
  main.append(h1, dishContainer);
  return main;
}

function createDishesContainer() {
  const dishContainer = document.createElement("div");

  dishContainer.classList.add("grid");

  const menuLength = Object.keys(menuData).length;
  for (let i = 0; i < menuLength; i++) {
    const type = Object.keys(menuData)[i];
    const card = createCard(type);

    dishContainer.append(card);
  }
  return dishContainer;
}

function createCard(type) {
  const div = document.createElement("div");
  const title = document.createElement("h2");

  title.innerHTML = type;
  div.append(title);

  for (let i = 0; i < menuData[type].length; i++) {
    const dishName = document.createElement("h3");
    const dishDesc = document.createElement("p");
    const dishPrice = document.createElement("small");

    title.innerHTML = type;
    dishName.innerHTML = menuData[type][i].name;
    dishDesc.innerHTML = menuData[type][i].description;
    dishPrice.innerHTML = `$${menuData[type][i].price.toFixed(2)}`;

    div.append(dishName, dishDesc, dishPrice);
  }

  return div;
}
