//global variables
const greetingDisplay = document.getElementById("greeting-display");
const recipentInput = document.getElementById("recipient-input");
const senderInput = document.getElementById("sender-input");
const senderDiv = document.getElementById("sender-field");
const button = document.getElementById("send-btn");
const alert = document.getElementById("alert-txt");

// event listeners
button.addEventListener("click", writeGreeting);
senderInput.addEventListener("focusout", fade);
recipentInput.addEventListener("focusout", fade);
recipentInput.addEventListener("focusout", senderAppear);

//makes "from" input disappear until "to" input is filled out
if (recipentInput.value) {
  senderDiv.style.display = "none";
  senderInput.style.display = "none";
}

function senderAppear() {
  if (recipentInput.value) {
    senderDiv.style.display = "initial";
    senderInput.style.display = "initial";
  } else if (!recipentInput.value) {
    senderDiv.style.display = "none";
    senderInput.style.display = "none";
  }
}

function writeGreeting() {
  const greeting = document.getElementById("greeting-select").value;
  const customGreeting = document.getElementById("custom-input").value;

  if (!recipentInput.value || !senderInput.value) {
    alert.style.opacity = 1;
  } else if (!customGreeting) {
    greetingDisplay.innerHTML = `
    Dear ${recipentInput.value}, <br>
    ${greeting}<br>
    With love, ${senderInput.value}
    `;
  } else if (greeting && customGreeting) {
    greetingDisplay.innerHTML = `
    Dear ${recipentInput.value}, <br>
    ${greeting}<br>
    ${customGreeting}<br>
    With love, ${senderInput.value}
    `;
  } else if (!greeting) {
    greetingDisplay.innerHTML = `
    Dear ${recipentInput.value}, <br>
    ${customGreeting}<br>
    With love, ${senderInput.value}
    `;
  }
}

//alert text fades when both inputs are filled out
function fade() {
  if (recipentInput.value && senderInput.value) {
    alert.style.opacity = 0;
  }
}
