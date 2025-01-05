import lima from "../img/lima.jpg";

export default function initialPage() {
  const div = document.createElement("div");
  const title = document.createElement("h1");
  const p1 = document.createElement("p");

  const textContainer = presentationCont();

  div.classList.add("container");
  div.setAttribute("id", "home");
  title.innerHTML = "Diego's Gourmet Restaurant";

  p1.innerHTML =
    "Located in the heart of Cusco, the historic capital of the Inca Empire, our gourmet restaurant celebrates the rich culinary heritage of Peru. We invite you to embark on a gastronomic journey that blends tradition, innovation, and the finest locally-sourced ingredients.";

  div.append(title, p1, textContainer);

  return div;
}

function presentationCont() {
  const textContainer = document.createElement("div");
  const peruPres = peruPresentation();

  textContainer.classList.add("text-container");
  textContainer.append(peruPres);

  return textContainer;
}

function peruPresentation() {
  const para1 = document.createElement("div");
  const img1 = document.createElement("img");
  const p2 = document.createElement("p");

  p2.innerHTML =
    "At Diego's Gourmet Restaurant, every dish tells a story of Peru’s diverse landscapes—from the bountiful Pacific coast to the majestic Andes and the lush Amazon rainforest. Our menu showcases iconic Peruvian flavors, including the bold tang of ceviche, the earthy warmth of Andean stews, and the vibrant spices of Amazonian-inspired creations.";

  img1.src = lima;
  img1.alt = "lima";
  img1.classList.add("lima");

  para1.append(p2, img1);
  para1.classList.add("para1");

  return para1;
}
