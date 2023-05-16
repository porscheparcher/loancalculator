
let loanAmount;
let loanYears;
let loanRate;


window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
      
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  loanAmount = document.getElementById('loan-amount');
  loanYears = document.getElementById('loan-years');
  loanRate = document.getElementById('loan-rate');

  loanAmount.value = 700,000;
  loanYears.value = 30;
  loanRate.value = 3.5;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const { amount, years, rate } = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(amount, years, rate);
  updateMonthly(monthlyPayment);
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount, years, rate) {
  const i = rate / 12;
  const n = years * 12;
  const monthlyPayment = (amount * i) / (1 - Math.pow((1 + i), -n));
  const roundedMonthlyPayment = monthlyPayment.toFixed(2);
  const stringMonthlyPayment = roundedMonthlyPayment.toString();
  return stringMonthlyPayment;
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentElement = document.getElementById('monthly-payment');
  monthlyPaymentElement.textContent = monthly;
}

