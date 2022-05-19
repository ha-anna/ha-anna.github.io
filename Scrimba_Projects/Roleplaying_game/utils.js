function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() =>
    // Math.floor(Math.random() * 6 + 1) and not
    // Math.ceil(Math.random() * 6) because in some rare cases
    // we could be given 0
    Math.floor(Math.random() * 6) + 1);
}

function getDicePlaceholderHtml(diceCount) {
  return new Array(diceCount).fill('<div class="placeholder-dice"></div>').join('');
}

const getPercentage = (remainingHealth, maximumHealth) => Math.ceil((100 * remainingHealth) / maximumHealth);

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };
