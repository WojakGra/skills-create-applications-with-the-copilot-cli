'use strict';

const {
  calculate,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('calculator operations', () => {
  test('adds numbers (2 + 3 = 5)', () => {
    expect(calculate(2, '+', 3)).toBe(5);
  });

  test('subtracts numbers (10 - 4 = 6)', () => {
    expect(calculate(10, '-', 4)).toBe(6);
  });

  test('multiplies numbers (45 * 2 = 90)', () => {
    expect(calculate(45, '*', 2)).toBe(90);
  });

  test('divides numbers (20 / 5 = 4)', () => {
    expect(calculate(20, '/', 5)).toBe(4);
  });

  test('supports negative numbers', () => {
    expect(calculate(-8, '+', 3)).toBe(-5);
    expect(calculate(-8, '-', -3)).toBe(-5);
  });

  test('handles decimal results', () => {
    expect(calculate(7, '/', 2)).toBe(3.5);
  });

  test('throws on division by zero', () => {
    expect(() => calculate(9, '/', 0)).toThrow('Cannot divide by zero.');
  });

  test('throws on unsupported operator', () => {
    expect(() => calculate(1, '%', 2)).toThrow('Unsupported operator "%"');
  });

  test('throws on invalid operands', () => {
    expect(() => calculate(Number.NaN, '+', 2)).toThrow('Operands must be valid numbers.');
    expect(() => calculate(2, '+', Number.POSITIVE_INFINITY)).toThrow('Operands must be valid numbers.');
  });
});

describe('extended calculator functions', () => {
  test('computes modulo (5 % 2 = 1)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('computes modulo (10 % 3 = 1)', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('throws on modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Cannot divide by zero.');
  });

  test('computes power (2 ^ 3 = 8)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('computes power (2 ^ 5 = 32)', () => {
    expect(power(2, 5)).toBe(32);
  });

  test('computes power with negative exponent (2 ^ -2 = 0.25)', () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test('computes square root (sqrt(16) = 4)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('computes square root (sqrt(81) = 9)', () => {
    expect(squareRoot(81)).toBe(9);
  });

  test('throws on square root of negative numbers', () => {
    expect(() => squareRoot(-4)).toThrow('Cannot take the square root of a negative number.');
  });
});
