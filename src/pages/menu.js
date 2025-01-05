import data from "./menu.json";

const menuData = data.menu;

export default function menuPage() {
  const main = document.createElement("div");
  const dishContainer = createDishesContainer();

  main.classList.add("container");
  main.classList.add("menu");
  main.append(dishContainer);
  return main;
}

function createDishesContainer() {
  const dishContainer = document.createElement("div");

  dishContainer.classList.add("dish-co");

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

  div.classList.add("card-container");
  title.classList.add("title");
  div.append(title);

  for (let i = 0; i < menuData[type].length; i++) {
    const card = document.createElement("div");
    const dishName = document.createElement("h3");
    const dishDesc = document.createElement("p");
    const dishPrice = document.createElement("small");

    title.innerHTML = type;
    dishName.innerHTML = menuData[type][i].name;
    dishDesc.innerHTML = menuData[type][i].description;
    dishPrice.innerHTML = `$${menuData[type][i].price.toFixed(2)}`;

    card.classList.add("card");
    card.append(dishName, dishDesc, dishPrice);
    div.append(card);
  }

  return div;
}
