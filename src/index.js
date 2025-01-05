import "./styles.css";
import initialPage from "./pages/home.js";
import createTitle from "./pages/menu.js";

const main = document.querySelector(".content");
const nav = document.querySelector("nav");

main.append(initialPage());

nav.addEventListener("click", (e) => {
  const render = e.target.getAttribute("class");

  if (render === "home") {
    main.innerHTML = "";
    main.append(initialPage());
  } else if (render === "menu") {
    main.innerHTML = "";
    main.append(createTitle());
  }
});
