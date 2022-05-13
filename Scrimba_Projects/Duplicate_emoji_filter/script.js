const emojis = [
  "💘",
  "💘",
  "🌞",
  "🧡",
  "🍇",
  "🧁",
  "⚡️",
  "💝",
  "🐱",
  "💘",
  "🧡",
  "💫",
  "🍓",
  "💜",
  "⚡️",
  "⚡️",
  "🐶",
  "💘",
  "🍇",
  "🐱",
  "💘",
  "💫",
  "🍓",
  "💜",
  "💕",
  "⚡️",
  "💘",
  "🌞",
  "🐱",
  "💘",
  "💫",
  "🍓",
  "💜",
  "⚡️",
  "🧡",
  "💕",
  "🍇",
  "💘"
];

const allEmojisP = document.getElementById("all-emojis-p");
const uniqueEmojisP = document.getElementById("unique-emojis-p");

for (let emoji of emojis) {
  allEmojisP.textContent += emoji;
}

// filter duplicates
document.getElementById("btn-filter").addEventListener("click", () => {
  uniqueEmojisP.textContent = [...new Set(emojis)].join("");
});

// sort emoji

document.getElementById("btn-sort").addEventListener("click", () => {
  uniqueEmojisP.textContent = emojis.sort().join("");
});

