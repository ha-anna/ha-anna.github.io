// game state variables
let player1Turn = true;
let playerOneScore = 0;
let playerTwoScore = 0;

// DOM variables
const turnMessage = document.getElementById("message");
const logMessage = document.getElementById("log");

// player 1
const playerOneScoreEl = document.getElementById("player1Scoreboard");
const playerOneDice = document.getElementById("player1Dice");

//player 2
const playerTwoScoreEl = document.getElementById("player2Scoreboard");
const playerTwoDice = document.getElementById("player2Dice");

//buttons
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

//event listeners

rollBtn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 6 + 1);

  function message(player, playerTxt) {
    logMessage.innerHTML = `Player ${player} rolled ${randomNumber}. 
      <br> Now it's Player ${playerTxt}'s turn!`;
  }

  if (player1Turn) {
    playerOneScore += randomNumber;
    playerOneScoreEl.textContent = playerOneScore;
    playerOneDice.textContent = randomNumber;
    playerOneDice.classList.add("roll");
    playerTwoDice.classList.remove("roll");
    console.log(randomNumber);
    //accent on the dice that was thrown
    playerOneDice.classList.add("active");
    playerTwoDice.classList.remove("active");

    //logging the log message about the turn
    message("1", "Two");
  } else {
    playerTwoScore += randomNumber;
    playerTwoScoreEl.textContent = playerTwoScore;
    playerTwoDice.textContent = randomNumber;
    playerTwoDice.classList.add("roll");
    playerOneDice.classList.remove("roll");
    console.log(randomNumber);
    //accent on the dice that was thrown
    playerOneDice.classList.remove("active");
    playerTwoDice.classList.add("active");

    message("2", "One");
  }

  player1Turn = !player1Turn;

  if (playerOneScore >= 21) {
    buttonChange();
    winner("1");
  } else if (playerTwoScore >= 21) {
    buttonChange();
    winner("2");
  }
});

resetBtn.addEventListener("click", function () {
  player1Turn = true;
  playerOneScore = 0;
  playerOneScoreEl.textContent = playerOneScore;
  playerTwoScore = 0;
  playerTwoScoreEl.textContent = playerTwoScore;
  logMessage.innerHTML = "Click the button to start!";
  resetBtn.style.display = "none";
  playerOneDice.classList.remove("active");
  playerTwoDice.classList.remove("active");
  playerOneDice.textContent = "-";
  playerTwoDice.textContent = "-";
  rollBtn.style.display = "initial";
  turnMessage.textContent = `Dice Game`;
  playerOneDice.classList.remove("roll");
  playerTwoDice.classList.remove("roll");
});

function buttonChange() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "initial";
}

function winner(player) {
  turnMessage.textContent = `Player ${player} has won! 🥳`;
  logMessage.innerHTML = `Wanna play again?`;
}
