export default function reservationPage() {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const form = createForm();

  h2.innerHTML = "Make a reservation";
  div.classList.add("container");
  div.append(h2, form);

  return div;
}

function createForm() {
  const form = document.createElement("form");
  const sendBtn = document.createElement("button");
  const formOptions = ["Name", "Phone", "Date", "Hour", "Email"];

  for (let i = 0; i < formOptions.length; i++) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    if (formOptions[i] === "Date") input.type = "date";
    else if (formOptions[i] === "Email") input.type = "email";
    else if (formOptions[i] === "Hour") input.type = "time";
    else input.type = "text";

    label.innerHTML = formOptions[i];
    label.setAttribute("for", formOptions[i].toLowerCase());
    input.setAttribute("id", formOptions[i].toLowerCase());
    input.setAttribute("name", formOptions[i].toLowerCase());

    div.append(label, input);
    form.append(div);
  }

  sendBtn.innerHTML = "Reserve";
  form.append(sendBtn);
  return form;
}
