const $homeScore = document.getElementById('home-score')
const $guestScore = document.getElementById('guest-score')
const $resetBtn = document.getElementById('reset-btn')
const $homeName = document.getElementById('home-name')
const $guestName = document.getElementById('guest-name')
const $alert = document.getElementById('alert')

const buttonsHome = document.querySelectorAll('.button-home')
const buttonsGuest = document.querySelectorAll('.button-guest')

let homeScore = 0
let guestScore = 0

buttonsHome.forEach(button => button.addEventListener('click', addScoreHome))
buttonsGuest.forEach(button => button.addEventListener('click', addScoreGuest))

function render() {
  $homeScore.textContent = homeScore
  $guestScore.textContent = guestScore
  checkLead()
}


function addScoreHome(event) {
  homeScore += +(event.target.value)
  render()
}

function addScoreGuest(event) {
  guestScore += +(event.target.value)
  render()
}

function checkLead() {
  if (homeScore >= 21 || guestScore >= 21) {
    $resetBtn.style.display = 'unset';
    buttonsHome.forEach(button => button.disabled = true)
    buttonsGuest.forEach(button => button.disabled = true)
  }

  if (homeScore === guestScore) {
    $homeName.textContent = 'HOME'
    $guestName.textContent = 'GUEST'
  } else if (homeScore > guestScore) {
    $homeName.textContent = 'HOME 👑'
    $guestName.textContent = 'GUEST'
  } else {
    $guestName.textContent = 'GUEST 👑'
    $homeName.textContent = 'HOME'
  }

  if (homeScore > guestScore && homeScore >= 21) {
    $alert.textContent = `HOME TEAM WINS`
    $alert.style.display = 'unset'
  } else if (guestScore > homeScore && guestScore >= 21) {
    $alert.textContent = `GUEST TEAM WINS`
    $alert.style.display = 'unset'
  }
}

function reset() {
  buttonsHome.forEach(button => button.disabled = false)
  buttonsGuest.forEach(button => button.disabled = false)
  $resetBtn.style.display = 'none';
  $alert.style.display = 'none'
  homeScore = 0
  guestScore = 0
  render()
}

render()