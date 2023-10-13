//SECOND TRY ON INDEX.JS


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
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




function operate(a, b, operator) {
  a = Number(a);
  b = Number(b);

  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b)
  } else if (operator === "/") {
    return divide(a, b);
  }
  };

let buttonAddition = document.querySelector(".btn-addition");
let buttonEquals = document.querySelector(".btn-equals");
let buttonClear = document.querySelector(".btn-clear");
let buttonUndo = document.querySelector(".btn-undo");
let buttonDecimal = document.querySelector(".btn-decimal");

let displayCalculations = document.querySelector(".calculations");
let displayResult = document.querySelector(".result");

let numericButtons = document.querySelectorAll(".btn-num");
let operatorButtons = document.querySelectorAll(".btn-operator");

// Clear button
buttonClear.addEventListener("click", function(){
  displayCalculations.textContent = "";
  displayResult.textContent = "0";
});

//UndoButton
buttonUndo.addEventListener("click", function(){
  let string = displayCalculations.textContent;
  console.log(string);
  let lastChar = string.charAt(string.length -1);
  console.log(lastChar);
    if (lastChar === " ") {
      displayCalculations.textContent = displayCalculations.textContent.slice(0, -3);
    } else {
      displayCalculations.textContent = displayCalculations.textContent.slice(0, -1);
    }
  }
);

// Numeric buttons populating the calculation display
numericButtons.forEach(item => item.addEventListener("click", function(event) {
 displayCalculations.textContent += event.target.value;

}));

operatorButtons.forEach(item => item.addEventListener("click", function(event) {
  displayCalculations.textContent += ` ${event.target.value} `;
const currentOperator = event.target.value;
console.log("current operator is: " + currentOperator);

const a = getFirstNumber();
const b = getSecondNumber();
const operator1 = getOperator();

// second operator is clicked
if (b) {
  operate(a, b, operator);
  console.log("thats first round od calculation, result is: " + operate(a, b, operator1));
  
  displayCalculations.textContent = `${operate(a, b, operator1)} ${currentOperator} `;
  displayResult.textContent = operate(a, b, operator1);
}


}));

// Decimal button
buttonDecimal.addEventListener("click", function() {
  let displayString = displayCalculations.textContent;
  
  let substring = "."

  if (displayString.includes(substring)) {
    true;
  } else displayCalculations.textContent += ".";
  
  if (displayString.includes(substring) && displayString.includes(" ")) {
    let checkString = displayCalculations.textContent;
    let secondPartOfString = checkString.split(" ")[2];
    if (secondPartOfString.includes(".")) {
      return
    }
    displayCalculations.textContent += ".";
  }

});

// Equals Button
buttonEquals.addEventListener("click", function() {
  a = getFirstNumber();
  b = getSecondNumber();
  operator = getOperator();
  console.log("Operation is: " + displayCalculations.textContent);

  displayResult.textContent = parseFloat(operate(a, b, operator).toFixed(2))
  
});


function getFirstNumber () {
  const firstNumber = displayCalculations.textContent;
  a = firstNumber.split(" ")[0];
  console.log("a is: " + a);
  return a;
};

function getSecondNumber() {
  const secondNumber = displayCalculations.textContent;
  b = secondNumber.split(" ")[2];
  console.log("b is: " + b)
  return b;
};

function getOperator() {
  const string = displayCalculations.textContent;
  operator = string.split(" ")[1];
  console.log("opertor is: " + operator);
  return operator;
};







