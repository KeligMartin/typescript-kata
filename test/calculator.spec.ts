import MyCalculator from '../src/calculator';

describe('Calculator', () => {
  let myCalculator: MyCalculator = new MyCalculator();

  test.only('should add positive numbers correctly', () => {
    expect(myCalculator.add(1, 2)).toBe(3);
  });

  test.only('should add negative numbers correctly', () => {
    expect(myCalculator.add(1, -2)).toBe(-1);
  });

  test.only('should subtract positive numbers correctly', () => {
    expect(myCalculator.subtract(1, 2)).toBe(-1);
  });

  test.only('should subtract negative numbers correctly', () => {
    expect(myCalculator.subtract(1, -2)).toBe(3);
  });

  test.only('should multiply positive numbers correctly', () => {
    expect(myCalculator.multiply(1, 2)).toBe(2);
  });

  test.only('should multiply negative numbers correctly', () => {
    expect(myCalculator.multiply(1, -2)).toBe(-2);
  });

  test.only('should divide positive numbers correctly', () => {
    expect(myCalculator.divide(1, 2)).toBe(0.5);
  });

  test.only('should divide negative numbers correctly', () => {
    expect(myCalculator.divide(-3, 2)).toBe(-1.5);
  });

  test.only('should not divide any number by 0', () => {
    expect(myCalculator.divide(1, 0)).toBe(0);
  });

  test.only('should power positive numbers correctly', () => {
    expect(myCalculator.power(3, 2)).toBe(9);
  });

  test.only('should power negative numbers correctly', () => {
    expect(myCalculator.power(-3, 2)).toBe(9);
  });

  test.only('should return square root of positive numbers correctly', () => {
    expect(myCalculator.squareRoot(16744464)).toBe(4092);
  });

  test.only('should not return square root of negative numbers', () => {
    expect(myCalculator.squareRoot(-16744464)).toBe(0);
  });

  test.only('should return true on prime number', () => {
    expect(myCalculator.isPrime(7919)).toBe(true);
  });

  test.only('should return false on not prime number', () => {
    expect(myCalculator.isPrime(8)).toBe(false);
  });
});
