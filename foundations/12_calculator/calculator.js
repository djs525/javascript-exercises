const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0
	for (let i=0; i<arr.length;i++){
    sum += arr[i]
  }
  return sum
};

const multiply = function(arr) {
  let prod = 1;
  for (let i=0; i<arr.length; i++){
    prod *= arr[i]
  }
  return prod
};

const power = function(a,b) {
  return Math.pow(a,b)
	
};

const factorial = function(num) {
	fac = 1
  for (let i = num; i > 0; i--){
    fac *= i
  }
  return fac
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
