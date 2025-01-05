import lima from "../img/lima.jpg";
import ingredients from "../img/ingredients.jpg";
import lomo from "../img/lomo.jpg";

export default function homePage() {
  const div = document.createElement("div");
  const title = document.createElement("h1");
  const initial = document.createElement("p");
  const end = document.createElement("p");

  const textContainer = presentationCont();

  div.classList.add("container");
  div.setAttribute("id", "home");
  title.innerHTML = "Diego's Gourmet Restaurant";

  initial.innerHTML =
    "Located in the heart of Cusco, the historic capital of the Inca Empire, our gourmet restaurant celebrates the rich culinary heritage of Peru. We invite you to embark on a gastronomic journey that blends tradition, innovation, and the finest locally-sourced ingredients.";

  end.innerHTML =
    "We invite you to discover the flavors of Peru and the artistry of our chefs. Whether you’re a curious traveler or a seasoned foodie, Diego's Gourmet Restaurant promises an unforgettable dining experience.";

  div.append(title, initial, textContainer, end);

  return div;
}

function presentationCont() {
  const textContainer = document.createElement("div");
  const peruPres = peruPresentation();
  const ingredientPres = ingredientPresentation();
  const cuisine = cuisinePresentation();

  textContainer.classList.add("text-container");
  textContainer.append(peruPres, ingredientPres, cuisine);

  return textContainer;
}

function peruPresentation() {
  const paraCont = document.createElement("div");
  const img = document.createElement("img");
  const para = document.createElement("p");

  para.innerHTML =
    "At Diego's Gourmet Restaurant, every dish tells a story of Peru’s diverse landscapes—from the bountiful Pacific coast to the majestic Andes and the lush Amazon rainforest. Our menu showcases iconic Peruvian flavors, including the bold tang of ceviche, the earthy warmth of Andean stews, and the vibrant spices of Amazonian-inspired creations.";

  img.src = lima;
  img.alt = "lima";
  img.classList.add("lima");

  paraCont.append(para, img);
  paraCont.classList.add("para1");

  return paraCont;
}

function ingredientPresentation() {
  const paraCont = document.createElement("div");
  const img = document.createElement("img");
  const para = document.createElement("p");

  para.innerHTML =
    "We pride ourselves on working with local farmers and artisans to bring the freshest ingredients to your table. Golden quinoa, organic corn, Peruvian purple potatoes, and exotic fruits like lucuma and chirimoya shine in our dishes, each prepared to highlight their natural essence.";

  img.src = ingredients;
  img.alt = "ingredient-img";

  paraCont.classList.add("para2");
  paraCont.append(img, para);

  return paraCont;
}

function cuisinePresentation() {
  const paraCont = document.createElement("div");
  const img = document.createElement("img");
  const para = document.createElement("p");

  para.innerHTML =
    "While rooted in tradition, our chefs also embrace contemporary techniques to reimagine classic recipes. The result is a culinary experience that’s both familiar and surprising, offering a fresh perspective on Peruvian cuisine.";

  img.src = lomo;
  img.alt = "lomo-saltado";

  paraCont.classList.add("para3");
  paraCont.append(para, img);

  return paraCont;
}
