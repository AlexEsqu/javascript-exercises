const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  return array.reduce(add, 0);
};

const multiply = function(array) {
  let result = array[0];
  for (num of array.splice(1))
    result *= num;
  return result;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(num) {
  let f = [];
  if (num == 0 || num == 1)
    return 1;
  if (f[num] > 0)
      return f[num];
  return f[num] = factorial(num-1) * num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
