// variables
const passwordEl1 = document.getElementById('password-el-1')
const passwordEl2 = document.getElementById('password-el-2')
const passwordEl3 = document.getElementById('password-el-3')
const passwordEl4 = document.getElementById('password-el-4')
const passwordElAll = [passwordEl1, passwordEl2, passwordEl3, passwordEl4]
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const passwordLengthEl = document.getElementById('password-length-el')
const message = document.getElementById('message-copy')
const button = document.getElementById('password-button')

// setting primary password length
let passwordLength = 5

// Event Listeners
plus.addEventListener('click', plusNum)
minus.addEventListener('click', minusNum)
passwordEl1.addEventListener('click', copy)
passwordEl1.addEventListener('focusout', fade)
passwordEl2.addEventListener('click', copy)
passwordEl2.addEventListener('focusout', fade)
passwordEl3.addEventListener('click', copy)
passwordEl3.addEventListener('focusout', fade)
passwordEl4.addEventListener('click', copy)
passwordEl4.addEventListener('focusout', fade)

// function to increment password length, max length 12
function plusNum () {
  passwordLength++
  passwordLengthEl.value = passwordLength
  if (passwordLength >= 12) {
    passwordLengthEl.value = 12
    passwordLength = 12
  }
}

// function to decrement password length, min length 5
function minusNum () {
  passwordLength--
  passwordLengthEl.value = passwordLength
  if (passwordLength <= 5) {
    passwordLengthEl.value = 5
    passwordLength = 5
  }
}

// function to generate password string
function generateString () {
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-?/><,.;:{[]}'
  let result = ''
  const charLength = char.length
  for (let i = 0; i < passwordLength; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength))
  }
  return result
}

// function to generate and display all passwords
document.getElementById('password-button').addEventListener('click', function generatePasswords () {
  const passwords = []
  passwordEl1.value = ''
  passwordEl2.value = ''
  passwordEl3.value = ''
  passwordEl4.value = ''
  message.style.opacity = 0
  button.style.backgroundColor = ''
  button.style.border = ''
  for (let j = 0; j < 4; j++) {
    passwords.push(generateString())
  }
  for (let k = 0; k < passwords.length; k++) {
    passwordElAll[k].value += passwords[k]
  }
})

// function for to copy password on click
function copy () {
  // alert if passwords weren't generated
  if (this.value === '') {
    button.style.backgroundColor = 'red'
    button.style.border = '1px solid red'
  } else {
    this.select()
    navigator.clipboard.writeText(this.value)
    message.style.opacity = 1
  }
}

// make "password copied" fade after input loses focus
function fade () {
  // removes alert if input is out of focus
  if (this.value === '') {
    button.style.backgroundColor = ''
    button.style.border = ''
  } else {
    message.style.opacity = 0
  }
}
