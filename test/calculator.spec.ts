import MyCalculator from "../src/calculator";

describe("Calculator", () => {

  let myCalculator: MyCalculator = new MyCalculator();

  test('should add positive numbers correctly', () => {
    expect(myCalculator.add(1, 2)).toBe(3);
  });

  test('should add negative numbers correctly', () => {
    expect(myCalculator.add(1, -2)).toBe(-1);
  });

  test('should subtract positive numbers correctly', () => {
    expect(myCalculator.subtract(1, 2)).toBe(-1);
  });

  test('should subtract negative numbers correctly', () => {
    expect(myCalculator.subtract(1, -2)).toBe(3);
  });

  test('should multiply positive numbers correctly', () => {
    expect(myCalculator.multiply(1, 2)).toBe(2);
  });

  test('should multiply negative numbers correctly', () => {
    expect(myCalculator.multiply(1, -2)).toBe(-2);
  });

  test('should divide positive numbers correctly', () => {
    expect(myCalculator.divide(1, 2)).toBe(0.5);
  });

  test('should divide negative numbers correctly', () => {
    expect(myCalculator.divide(-3, 2)).toBe(-1.5);
  });

  test('should not divide any number by 0', () => {
    expect(myCalculator.divide(1, 0)).toBe(0);
  });

  test('should power positive numbers correctly', () => {
    expect(myCalculator.power(3, 2)).toBe(9);
  });

  test('should power negative numbers correctly', () => {
    expect(myCalculator.power(-3, 2)).toBe(9);
  });

  test('should return square root of positive numbers correctly', () => {
    expect(myCalculator.squareRoot(16744464)).toBe(4092);
  });

  test('should not return square root of negative numbers', () => {
    expect(myCalculator.squareRoot(-16744464)).toBe(0);
  });

  test('should return true on prime number', () => {
    expect(myCalculator.isPrime(7919)).toBe(true);
  });

  test('should return false on not prime number', () => {
    expect(myCalculator.isPrime(8)).toBe(false);
  });

})
