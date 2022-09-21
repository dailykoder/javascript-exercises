const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let total = 0;
  arr.forEach(num => total += num);
  return total;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(num => product *= num);
  return product;
};

const power = function(num, exponent) {
  return Math.pow(num, exponent);
};

const factorial = function(num) {
  let product = 1;
  if(num <= 1) {
    return 1;
  } else {
    for(num; num > 0; num--) {
      product *= num;
    }
  }
  return product;
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
