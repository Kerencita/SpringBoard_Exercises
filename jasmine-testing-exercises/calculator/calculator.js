window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    update();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

//the "+" is called the unary plus and it tries to convert the value to a number, if it isn't already// 
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

//checking to see if loan amount, years and rate and valid inputs//
//function should throw errors if invalid inputs are submitted//
function checkValidInputs (values){
  if (isNaN(values.amount)){
    alert('Loan Amount must be a number without spaces or commas')
    throw new Error('Loan amount is Not a Number')
  }
  if (isNaN(values.years)){
    alert('Term in Years must be a number')
    throw new Error('Years is Not a Number')
  }
  if (isNaN(values.rate)){
    alert('Yearly Rate must be a number')
    throw new Error('Rate is Not a Number')
  }
  if (values.amount == 0){
    alert('Loan Amount cannot be blank or zero')
    throw new Error('Loan amount is 0')
  }
  if (values.years == 0){
    alert('Term in Years cannot be blank or zero')
    throw new Error('Years is 0')
  }
  if (values.rate == 0){
    alert('Yearly Rate cannot be blank or zero')
    throw new Error('Rate is 0')
  }
}

// Get the inputs from the DOM. - DONE
// Put some default values in the inputs - DONE
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.querySelector('#loan-amount').value = 120000;
  document.querySelector('#loan-years').value = 30;
  document.querySelector('#loan-rate').value = 3.8;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  checkValidInputs(values);
  let p = values.amount;
  let i = (values.rate/100)/12;
  let n = (values.years)*12;
  let result = (p*i)/(1-(1+i)**(-n));
  //rounding result to two decimal points//
  result = Math.round(result*100)/100
  return result.toString()
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let payment = document.querySelector('#monthly-payment');
  payment.textContent = `$${monthly}`
}
