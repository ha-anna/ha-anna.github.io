/* eslint-disable comma-dangle */
/* eslint-disable require-jsdoc */
// variables
const washBtn = document.getElementById('wash-btn');
const mowBtn = document.getElementById('mow-btn');
const weedBtn = document.getElementById('weed-btn');
const sendBtn = document.getElementById('send-btn');
const taskEl = document.getElementById('task-el');
const totalEl = document.getElementById('total-el');
const notesEl = document.getElementById('notes-txt');
const amountText = document.getElementById('amount-text');
let sum = 0;

// array of objects holding service names and prices
const services = [
  {
    name: 'Wash Car',
    price: 10,
  },
  {
    name: 'Mow Lawn',
    price: 20,
  },
  {
    name: 'Pull Weeds',
    price: 30,
  }
];

// .addEventListeners

washBtn.addEventListener('click', addWash);
mowBtn.addEventListener('click', addMow);
weedBtn.addEventListener('click', addWeed);
sendBtn.addEventListener('click', reset);

// functions
function addWash() {
  taskEl.innerHTML += ` 
    <div class="service" id="washEl" onclick="removeWash()">
    <span class="service-txt">
    ${services[0].name}
    </span>
    <button type="button" id="remove-el">
    <i class="bi bi-trash-fill"></i>
     Remove
    </button>
    </div>
    `;
  totalEl.innerHTML += ` 
    <span class="service-txt" id="washPriceEl""> $${services[0].price}
    </span>
    `;
  sum += services[0].price;
  amountText.textContent = `$${sum}`;
  notesEl.style.opacity = '1';
  // this stops charging > once for the same service
  washBtn.removeEventListener('click', addWash);
}

// remove wash car element
function removeWash() {
  document.getElementById('washEl').remove();
  document.getElementById('washPriceEl').remove();
  sum += -10;
  amountText.textContent = `$${sum}`;
  washBtn.addEventListener('click', addWash);
}

function addMow() {
  taskEl.innerHTML += `
    <div class="service" id="mowEl" onclick="removeMow()">
    <span class="service-txt">
    ${services[1].name}
    </span>
    <button type="button" id="remove-el">
    <i class="bi bi-trash-fill"></i> 
    Remove
    </button>
    </div>
    `;
  totalEl.innerHTML += ` 
    <span class="service-txt" id="mowPriceEl"> $${services[1].price}
    </span>
    `;
  sum += services[1].price;
  amountText.textContent = `$${sum}`;
  notesEl.style.opacity = '1';
  // this stops charging > once for the same service
  mowBtn.removeEventListener('click', addMow);
}

// remove mow lawn element
function removeMow() {
  document.getElementById('mowEl').remove();
  document.getElementById('mowPriceEl').remove();
  sum += -20;
  amountText.textContent = `$${sum}`;
  mowBtn.addEventListener('click', addMow);
}

function addWeed() {
  taskEl.innerHTML += ` 
    <div class="service" id="weedEl" onclick="removeWeed()">
    <span class="service-txt">
    ${services[2].name}
    </span>
    <button type="button" id="remove-el">
    <i class="bi bi-trash-fill"></i>
     Remove
    </button>
    </div>
    `;
  totalEl.innerHTML += ` 
    <span class="service-txt" id="weedPriceEl"> $${services[2].price}
    </span>
    `;
  sum += services[2].price;
  amountText.textContent = `$${sum}`;
  notesEl.style.opacity = '1';
  // this stops charging > once for the same service
  weedBtn.removeEventListener('click', addWeed);
}

// remove pull weeds element
function removeWeed() {
  document.getElementById('weedEl').remove();
  document.getElementById('weedPriceEl').remove();
  sum += -30;
  amountText.textContent = `$${sum}`;
  weedBtn.addEventListener('click', addWeed);
}

// "sending" the invoice
function reset() {
  sum = 0;
  taskEl.innerHTML = ``;
  totalEl.innerHTML = `
  <p>Total</p>
  `;
  amountText.textContent = `$${sum}`;
  notesEl.style.opacity = '';
  washBtn.addEventListener('click', addWash);
  mowBtn.addEventListener('click', addMow);
  weedBtn.addEventListener('click', addWeed);
}
