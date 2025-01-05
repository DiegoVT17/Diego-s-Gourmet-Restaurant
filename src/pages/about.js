export default function aboutPage() {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");

  h2.innerHTML = "About";
  div.classList.add("container");
  div.append(h2);

  return div;
}
