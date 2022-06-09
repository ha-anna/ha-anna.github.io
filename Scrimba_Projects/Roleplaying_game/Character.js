import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js';

function Character(data) {
  Object.assign(this, data);
  this.diceArrayHtml = getDicePlaceholderHtml(this.diceCount);
  this.maxHealth = this.health;

  this.getCharacterHtml = function () {
    const {
      name, avatar, health, diceArrayHtml,
    } = this;
    const healthBar = this.getHealthBarHtml();

    return `
        <div class="character-card">
          <div class="name-div">
            <h2 class="name"> ${name} </h2>
          </div>
          <img class="avatar" alt="${name}" src="${avatar}"/>
          <div class="stats">
            <div class="health">Health: <b> ${health}</b></div>
            ${healthBar}
            <div class="dice-container">
              ${diceArrayHtml}
            </div>  
          </div>
        </div>
        `;
  };

  this.setDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArrayHtml = this.currentDiceScore.map((num) => {
      let dice = '';
      if (num === 1) {
        dice = '<i class="fa-solid fa-dice-one"></i>';
      } else if (num === 2) {
        dice = '<i class="fa-solid fa-dice-two"></i>';
      } else if (num === 3) {
        dice = '<i class="fa-solid fa-dice-three"></i>';
      } else if (num === 4) {
        dice = '<i class="fa-solid fa-dice-four"></i>';
      } else if (num === 5) {
        dice = '<i class="fa-solid fa-dice-five"></i>';
      } else {
        dice = '<i class="fa-solid fa-dice-six"></i>';
      }

      return `<div class="dice">${dice}</div>`;
    }).join('');
  };

  this.takeDamage = function (attackScoreArray) {
    const score = attackScoreArray.reduce((acc, num) => acc + num);
    this.health -= score;

    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  };

  this.getHealthBarHtml = function () {
    const percent = getPercentage(this.health, this.maxHealth);

    return `
        <div class="health-bar-outer">
          <div class="health-bar-inner ${percent < 26 ? 'danger' : ''} " 
            style="width: ${percent}%;">
          </div>
        </div>`;
  };
}

export default Character;
