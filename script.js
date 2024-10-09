const button = document.getElementById("btn");
const code = document.getElementById("color_code");
const body = document.body;

function generateRandomNumberBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColorRGB() {
  const red = generateRandomNumberBetween(0, 255);
  const green = generateRandomNumberBetween(0, 255);
  const blue = generateRandomNumberBetween(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function showColor() {
  let value = generateRandomColorRGB();
  body.style.backgroundColor = value;
  code.innerText = value;
}

showColor();

button.addEventListener("click", showColor);
