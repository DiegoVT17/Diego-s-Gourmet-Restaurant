import "./styles.css";
import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import reservationPage from "./pages/reservation.js";

const main = document.querySelector(".content");
const btns = document.querySelectorAll("button");

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const currentTab = e.target;

    btns.forEach((btn) => btn.classList.remove("active"));

    if (currentTab.getAttribute("class") === "home") {
      main.innerHTML = "";
      main.append(homePage());
      btn.classList.add("active");
    } else if (currentTab.getAttribute("class") === "menu") {
      main.innerHTML = "";
      main.append(menuPage());
      btn.classList.add("active");
    } else if (currentTab.getAttribute("class") === "about") {
      main.innerHTML = "";
      main.append(reservationPage());
      btn.classList.add("active");
    }
  })
);

main.append(homePage());
