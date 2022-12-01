const DOMSelectors = {
  form: document.getElementById("form"),
  button: document.getElementsByClassName("btn"),
  url: document.getElementById("url"),
  artist: document.getElementById("artist"),
  display: document.getElementById("display"),
  title: document.getElementById("title"),
};

function displayInput() {
  const userInput = DOMSelectors.input.value;
  const text = document.createElement("p");
  text.innerText = userInput;
  document.body.appendChild(text);
}
function clearInput() {
  DOMSelectors.input.value = "";
}

function createElement() {
  displayInput();
  clearInput();
  removeObject();
}
function removeObject() {
  const remove = DOMSelectors.input.value;
  remove.remove();
}
