'use strict';

// Supported operations: + (addition), - (subtraction), * (multiplication), / (division).
const operations = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
};

const supportedOperators = Object.keys(operations);

function calculate(left, operator, right) {
  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new Error('Operands must be valid numbers.');
  }

  const operation = operations[operator];
  if (!operation) {
    throw new Error(`Unsupported operator "${operator}".`);
  }

  if (operator === '/' && right === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return operation(left, right);
}

function modulo(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Operands must be valid numbers.');
  }

  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return a % b;
}

function power(base, exponent) {
  if (!Number.isFinite(base) || !Number.isFinite(exponent)) {
    throw new Error('Operands must be valid numbers.');
  }

  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (!Number.isFinite(n)) {
    throw new Error('Operands must be valid numbers.');
  }

  if (n < 0) {
    throw new Error('Cannot take the square root of a negative number.');
  }

  return Math.sqrt(n);
}

module.exports = {
  calculate,
  supportedOperators,
  modulo,
  power,
  squareRoot,
};
