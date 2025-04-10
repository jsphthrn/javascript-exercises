const add = function(...operands) {
    let operationResult = 0;
    operands.forEach(element => {
      operationResult += element;
    });
    return operationResult;
};

const subtract = function(...operands) {
	  let operationResult = 2 * operands[0];
    operands.forEach(element => {
      operationResult -= element;
    });
    return operationResult;
};

const sum = function(arr) {
	let operationResult = 0;
    arr.forEach(element => {
      operationResult += element;
    });
    return operationResult;
};

const multiply = function(arr) {
  let operationResult = 1;
    arr.forEach(element => {
      operationResult *= element;
    });
    return operationResult;
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= a; i++){
      result *= i;
    }
    return result;
  }  
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
