import lomo from "../img/lomo.jpg";

export default function initialPage() {
  const div = document.createElement("div");
  const title = document.createElement("h1");
  const textContainer = createPresentation();

  div.classList.add("container");
  title.innerHTML = "Diego's Gourmet Restaurant";
  div.append(title, textContainer);

  return div;
}

function createPresentation() {
  const textContainer = document.createElement("div");
  const p1 = document.createElement("p");
  const para1 = document.createElement("div");
  const img1 = document.createElement("img");
  const p2 = document.createElement("p");

  textContainer.classList.add("text-container");

  p1.innerHTML =
    "Located in the heart of Cusco, the historic capital of the Inca Empire, our gourmet restaurant celebrates the rich culinary heritage of Peru. We invite you to embark on a gastronomic journey that blends tradition, innovation, and the finest locally-sourced ingredients.";

  p2.innerHTML =
    "At Diego's Gourmet Restaurant, every dish tells a story of Peru’s diverse landscapes—from the bountiful Pacific coast to the majestic Andes and the lush Amazon rainforest. Our menu showcases iconic Peruvian flavors, including the bold tang of ceviche, the earthy warmth of Andean stews, and the vibrant spices of Amazonian-inspired creations.";

  img1.src = lomo;
  img1.alt = "lomo-saltado";
  img1.classList.add("lomo-saltado");

  para1.append(p2, img1);
  para1.classList.add("para1");

  textContainer.append(p1, para1);

  return textContainer;
}
