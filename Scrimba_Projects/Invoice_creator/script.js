// variables
const washBtn = document.getElementById('wash-btn');
const mowBtn = document.getElementById('mow-btn');
const weedBtn = document.getElementById('weed-btn');
const sendBtn = document.getElementById('send-btn');
const invoiceTasksEl = document.getElementById('invoice-tasks');
const totalEl = document.getElementById('total-el');
const notesEl = document.getElementById('notes-txt');
const allTaskButtons = document.querySelectorAll('.task-button');
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

// event listeners

washBtn.addEventListener('click', function () {
  addItemToInvoice(this.value);
  this.disabled = true;
});

mowBtn.addEventListener('click', function () {
  addItemToInvoice(this.value);
  this.disabled = true;
});

weedBtn.addEventListener('click', function () {
  addItemToInvoice(this.value);
  this.disabled = true;
});

sendBtn.addEventListener('click', reset);

// functions

function addItemToInvoice(value) {
  invoiceTasksEl.innerHTML += ` 
    <div class="service-div">
    <div>
      <span class="service-txt">
        ${services[value].name}
      </span>
      <button type="button" id=${value} class="remove-btn">
        <i class="bi bi-trash-fill"></i>
        Remove
      </button>
    </div>
    <span class="service-txt">$${services[value].price}</span>
    </div>
    `;

  sum += services[value].price;
  totalEl.textContent = `$${sum}`;
  notesEl.style.opacity = '1';
  document.querySelectorAll('.remove-btn').forEach((button) => {
    button.addEventListener('click', removeFromInvoice);
  });
}

// removing an element from the invoice

function removeFromInvoice() {
  this.parentNode.parentNode.innerHTML = '';
  sum -= services[this.id].price;
  totalEl.textContent = `$${sum}`;

  for (let button of allTaskButtons) {
    if (button.value === this.id) {
      button.disabled = false;
    }
  }
}

// "sending" the invoice
function reset() {
  sum = 0;
  totalEl.textContent = `$${sum}`;
  invoiceTasksEl.innerHTML = '';
  notesEl.style.opacity = '';
  washBtn.disabled = false;
  mowBtn.disabled = false;
  weedBtn.disabled = false;
}
