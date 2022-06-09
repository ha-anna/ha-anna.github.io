import characterData from './data.js';
import Character from './Character.js';

const monstersArray = ['pirate', 'cowboy', 'queen'];
let isWaiting = false;

function attack() {
  if (!isWaiting) {
    wizard.setDiceHtml();
    monster.setDiceHtml();
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    render();

    if (wizard.dead) {
      endGame();
    } else if (monster.dead) {
      isWaiting = true;
      if (monstersArray.length > 0) {
        setTimeout(() => {
          monster = getNewMonster();
          render();
          isWaiting = false;
        }, 1500);
      } else {
        endGame();
      }
    }
  }
}

function getNewMonster() {
  const nextMonsterData = characterData[monstersArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
}

function endGame() {
  isWaiting = true;
  const endMessage = wizard.dead && monster.dead ? 'No victors - all creatures are dead'
    : wizard.dead ? `${monster.name} is Victorious` : `${wizard.name} is Victorious`;
  const endEmoji = wizard.dead && monster.dead ? '☠️' : wizard.dead ? '🏴‍☠️' : '🔮';

  setTimeout(() => {
    document.body.innerHTML = `
    <div class="end-game">
      <h2>Game Over</h2>
      <p class="end-message">${endMessage}</p>
      <p class="end-emoji">${endEmoji}</p>
      <button id="restart-button" typ="button" onclick="javascript:window.location.href=window.location.href">Play again</button>
    </div>
    <footer>
      <p class="copy-text">Made with ♥️ by <a href="https://haanna.com">Ha Anna</a></p>
    </footer>
    `;
  }, 2000);
}

function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
  document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}

let monster = getNewMonster();
const wizard = new Character(characterData.hero);
document.getElementById('attack-button').addEventListener('click', attack);

render();
