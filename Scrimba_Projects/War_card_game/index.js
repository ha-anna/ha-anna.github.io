const $cardComputer = document.getElementById('computer')
const $cardPlayer = document.getElementById('player')
const $h1 = document.querySelector('h1')
const $deck = document.getElementById('remaining-deck')
const $alert = document.getElementById('alert')
const $gameInterface = document.getElementById('game-interface')
const $computerPoints = document.getElementById('computer-points')
const $playerPoints = document.getElementById('player-points')
const $drawCardsBtn = document.getElementById("draw-cards")

let deckId
let computerCard
let playerCard
let computerPoints
let playerPoints

async function handleClick() {
  const res = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
  const data = await res.json()
  console.log(data.deck_id)
  deckId = data.deck_id
  $alert.innerHTML = `Remaining cards: ${data.remaining}`
  computerPoints = 0
  playerPoints = 0
  $gameInterface.style.background = ''
  $gameInterface.style.color = ''
  $h1.innerHTML = `War!`
  $cardPlayer.innerHTML = ''
  $cardComputer.innerHTML = ''
  $computerPoints.innerHTML = `Computer: ${computerPoints}`
  $playerPoints.innerHTML = `Me: ${playerPoints}`
  // @ts-ignore
  $drawCardsBtn.disabled = false
}

document.getElementById("new-deck").addEventListener("click", handleClick)

$drawCardsBtn.addEventListener("click", async () => {
  const res = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
  const data = await res.json()
  console.log(data)
  if (!data.remaining && (!computerPoints && !playerPoints)) {
    $gameInterface.style.background = '#B02E0C'
    $gameInterface.style.color = '#F2F4F3'
    $alert.textContent = `Shuffle Deck first!`
  } else {
    $alert.textContent = `Remaining cards: ${data.remaining}`
  }

  computerCard = data.cards[0]
    $cardComputer.innerHTML = `
    <img src="${data.cards[0].image}" alt="${data.cards[0].value} of ${data.cards[0].suit}">
    `
  playerCard = data.cards[1]
  $cardPlayer.innerHTML = `
    <img src="${data.cards[1].image}" alt="${data.cards[1].value} of ${data.cards[1].suit}">
    `
  
  determineWinner(computerCard, playerCard)

  if (!data.remaining) {
    // @ts-ignore
    $drawCardsBtn.disabled = true
    $drawCardsBtn.classList.add('disabled')
    if (computerPoints === playerPoints) {
      $h1.textContent = `No winner!`
    } else if (computerPoints > playerPoints) {
      $h1.textContent = `Computer is victorious!`
    } else {
      $h1.textContent = `You are victorious!`
    }

  }
})


function determineWinner(card1, card2) {
  const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
  const card1ValueIndex = cardValues.indexOf(card1.value)
  const card2ValueIndex = cardValues.indexOf(card2.value)

  if (card1ValueIndex === card2ValueIndex) {
    $h1.innerHTML = `It's a tie!`
  } else if (card1ValueIndex > card2ValueIndex) {
    computerPoints++
    $computerPoints.innerHTML = `Computer: ${computerPoints}`
    $h1.innerHTML = `Computer wins!`
  } else {
    playerPoints++
    $playerPoints.innerHTML = `Me: ${playerPoints}`
    $h1.innerHTML = `Player wins!`
  }
}


