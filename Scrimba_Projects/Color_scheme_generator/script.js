const $colorPickerInput = document.getElementById("base-color");
const $colorSchemeInput = document.getElementById("color-scheme");
const $colorFields = document.querySelectorAll(".color-field");
const $colorHexInput = document.getElementsByClassName("color-generated-input");
const $message = document.getElementById("message");
const $baseUrl = "https://www.thecolorapi.com/scheme";

// copying

const colorHexInputs = Object.values($colorHexInput).map((value) => value);
colorHexInputs.map((input) =>
  input.addEventListener("click", function () {
    this.select();
    navigator.clipboard.writeText(this.value);
    messageAlert();
  })
);

// informing about hex being copied

function messageAlert() {
  message.style.opacity = "1";
  setTimeout(() => (message.style.opacity = "0"), 700);
}

//event listener for the button

document.getElementById("submit-button").addEventListener("click", (event) => {
  event.preventDefault();
  getColors();
});

function getColors() {
  fetch(
    `${$baseUrl}?hex=${$colorPickerInput.value.slice(1)}&mode=${
      $colorSchemeInput.value
    }`
  )
    .then((res) => res.json())
    .then((data) => renderColors(data.colors));
}

function renderColors(colors) {
  for (let i = 0; i < $colorFields.length; i++) {
    $colorFields[i].style.backgroundColor = colors[i].hex.value;
  }
  renderHex(colors);
}

function renderHex(colors) {
  for (let j = 0; j < $colorHexInput.length; j++) {
    $colorHexInput[j].value = colors[j].hex.value;
  }
}

// to make the color scheme generator more colorful, every time the page refreshes the new color is selected and a new monochrome palette appears

function generateString() {
  const char = "ABCDEF0123456789"; //limiting char to only possible values
  let result = "";
  const charLength = char.length;
  for (let i = 0; i < 6; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

function randomColor() {
  const color = generateString();
  $colorPickerInput.defaultValue = "#" + color;
  getColors();
}

randomColor();

//one more strech goal:
// copying the input when the color is clicked
