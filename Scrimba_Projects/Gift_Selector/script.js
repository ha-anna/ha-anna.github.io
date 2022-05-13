// event listeners
document.getElementById("balloon-checkbox").addEventListener("click", checkbox);

//global variables
const costEl = document.getElementById("cost-el");
const balloon = document.getElementById("balloon-checkbox");
const message = document.getElementById("message");
const messageBalloon = document.getElementById("message-balloon");

document.getElementById("btn").addEventListener("click", () => {
  let sum = 0;
  let sumDisplayed = "";
  const indFood = document.getElementById("food-select").selectedIndex;
  const optFood = document.getElementsByClassName("food")[indFood].value;
  const indTransport = document.getElementById("transport-select")
    .selectedIndex;
  const optTransport = document.getElementsByClassName("transport")[
    indTransport
  ].value;

  if (!optFood || !optTransport) {
    costEl.textContent = ". . .";
    message.style.display = "block";
    message.textContent = "Please select items in both categories.";
  } else {
    if (balloon.checked) {
      sum = parseInt(optFood) + parseInt(optTransport) + 5;
      sumDisplayed = "$" + sum;
    } else {
      sum = parseInt(optFood) + parseInt(optTransport);
      sumDisplayed = "$" + sum;
    }
    costEl.textContent = sumDisplayed;
    message.style.display = "none";
  }
});

function checkbox() {
  if (balloon.checked) {
    messageBalloon.style.display = "block";
    messageBalloon.textContent = "Balloons added! 🎈 Additional cost: $5";
  } else {
    messageBalloon.style.display = "none";
  }
}
