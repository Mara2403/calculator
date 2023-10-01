function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    alert("Uh-uh! You can't divide by zero!");
    return;
  }
  return  parseFloat((a / b).toFixed(2))
};

let a = 0;
let b = 0;
let operator = "";


// console.log(add(a, b));
// console.log(substract(a, b));
// console.log(multiply(a, b));
// console.log(divide(a, b));


// function operate(num1, num2, operator) {
//   if (operator === "+") {
//     return add(num1, num2);
//   } else if (operator === "-") {
//     return substract(num1, num2);
//   } else if (operator === "*") {
//     return multiply(num1, num2)
//   } else if (operator === "/") {
//     return divide(num1, num2);
//   }
//   };

function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return substract(a, b);
  } else if (operator === "*") {
    return multiply(a, b)
  } else if (operator === "/") {
    return divide(a, b);
  }
  };
console.log(operate(2, 4, "/"));