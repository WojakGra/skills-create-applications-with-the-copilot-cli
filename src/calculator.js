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

module.exports = { calculate, supportedOperators };
