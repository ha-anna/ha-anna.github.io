const $homeScore = document.getElementById('home-score')
const $guestScore = document.getElementById('guest-score')
const $resetBtn = document.getElementById('reset-btn')
const $homeName = document.getElementById('home-name')
const $guestName = document.getElementById('guest-name')

const buttonsHome = document.querySelectorAll('.button-home')
const buttonsGuest = document.querySelectorAll('.button-guest')

let homeScore = 0
let guestScore = 0

buttonsHome.forEach(button => button.addEventListener('click', addScoreHome))
buttonsGuest.forEach(button => button.addEventListener('click', addScoreGuest))

function render() {
    if (homeScore >= 21 || guestScore >= 21) {
    $resetBtn.style.display = 'unset';
    buttonsHome.forEach(button => button.disabled = true)
    buttonsGuest.forEach(button => button.disabled = true)
    }
    
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
}

function reset() {
    buttonsHome.forEach(button => button.disabled = false)
    buttonsGuest.forEach(button => button.disabled = false)
    homeScore = 0
    guestScore = 0
    render()
}

render()