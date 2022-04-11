const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  }
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  for (let i = 2; i <= number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci[number];
};

// Do not edit below this line
module.exports = fibonacci;
