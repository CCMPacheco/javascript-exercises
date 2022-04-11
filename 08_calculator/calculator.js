const add = function (operand1, operand2) {
  return operand1 + operand2;
};

const subtract = function (operand1, operand2) {
  return operand1 - operand2;
};

const sum = function (arrayOperand) {
  return arrayOperand.reduce((previous, current) => previous + current, 0);
};

const multiply = function (arrayOperand) {
  return arrayOperand.reduce((previous, current) => previous * current);
};

const power = function (number, exponent) {
  return number ** exponent;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
