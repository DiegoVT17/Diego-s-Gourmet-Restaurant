import "./styles.css";
import initialPage from "./pages/home.js";

const content = document.querySelector(".content");
content.append(initialPage());
