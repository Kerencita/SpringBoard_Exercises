it('should return a result that is a string', function(){
  let testValues = {
    amount: 120000,
    years: 30,
    rate: 3.87,
  }
  expect(calculateMonthlyPayment(testValues)).toBeInstanceOf(String);
})

it('should calculate the monthly rate correctly', function () {
  let testValues = {
    amount: 120000,
    years: 30,
    rate: 3.87,
  }
  expect(calculateMonthlyPayment(testValues)).toEqual('563.94');
});


it("should return a result with 2 decimal places", function() {
  let testValues = {
    amount: 120000,
    years: 30,
    rate: 3.87,
  }
  expect(calculateMonthlyPayment(testValues)).toMatch(/^\d+\.\d\d$/);
});

it('should reject invalid inputs', function () {
  let testValues = {
    amount: NaN,
    years: 30,
    rate: 3.87,
  }
  expect(() => calculateMonthlyPayment(testValues)).toThrowError();
});


