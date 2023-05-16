
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(
    {
    amount: 700000,
    years: 30,
    rate: 3.5
  })).toEqual('3143.31');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(
    {
    amount: 700000,
    years: 30,
    rate: 3.5
  })).toBeCloseTo('3143.31',2);
});


