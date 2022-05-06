const emojiArr = ["🐱", "🌸", "🧋"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmoji() {
  emojiContainer.innerHTML = " ";
  for (let i = 0; i < emojiArr.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = emojiArr[i];
    emojiContainer.append(emoji);
  }
}

renderEmoji();

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    emojiArr.push(emojiInput.value);
    emojiInput.value = "";
    renderEmoji();
  }
});

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    emojiArr.unshift(emojiInput.value);
    emojiInput.value = "";
    renderEmoji();
  }
});

popBtn.addEventListener("click", function () {
  emojiArr.pop(emojiInput.value);
  renderEmoji();
});

shiftBtn.addEventListener("click", function () {
  emojiArr.shift(emojiInput.value);
  renderEmoji();
});
