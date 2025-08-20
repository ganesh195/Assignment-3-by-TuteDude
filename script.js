const submit = document.getElementById("submit");
const head = document.getElementById("head");
const text = document.getElementById("text");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  head.innerText = "Hello, " + text.value;
  head.style.color = "Red";
});

const red = document.getElementById("red");
red.addEventListener("click", () => {
  red.style.backgroundColor = "red";
  red.style.color = "white";
  red.style.border = "none";
});

const blue = document.getElementById("blue");
blue.addEventListener("click", () => {
  blue.style.backgroundColor = "blue";
  blue.style.color = "white";
  blue.style.border = "none";
});

const green = document.getElementById("green");
green.addEventListener("click", () => {
  green.style.backgroundColor = "green";
  green.style.color = "white";
  green.style.border = "none";
});

const yellow = document.getElementById("yellow");
yellow.addEventListener("click", () => {
  yellow.style.backgroundColor = "yellow";
  yellow.style.color = "white";
  yellow.style.border = "none";
});
