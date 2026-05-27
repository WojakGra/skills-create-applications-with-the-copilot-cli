#!/usr/bin/env node
'use strict';

const { calculate, supportedOperators } = require('./calculator');

function printUsage() {
  console.log('Usage: node src/cli.js <number> <operator> <number>');
  console.log(`Operators: ${supportedOperators.join(' ')}`);
  console.log('Example: node src/cli.js 8 / 2');
}

const args = process.argv.slice(2);
if (args.length !== 3) {
  printUsage();
  process.exit(1);
}

const [leftRaw, operator, rightRaw] = args;
const left = Number(leftRaw);
const right = Number(rightRaw);

try {
  const result = calculate(left, operator, right);
  console.log(result);
} catch (error) {
  console.error(error.message);
  printUsage();
  process.exit(1);
}
