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

let btnEquals = "";


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


let button1 = document.querySelector(".btn-1");
let button2 = document.querySelector(".btn-2");
let buttonAddition = document.querySelector(".btn-addition");
let buttonEquals = document.querySelector(".btn-equals");
let buttonClear = document.querySelector(".btn-clear");
let buttonUndo = document.querySelector(".btn-undo");

let displayCalculations = document.querySelector(".calculations");
let displayResult = document.querySelector(".result");

let numericButtons = document.querySelectorAll(".btn-num");
let operatorButtons = document.querySelectorAll(".btn-operator");

buttonClear.addEventListener("click", function(){
  displayCalculations.textContent = "";
  displayResult.textContent = "0";
});

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


function createCalculations() { 
  
numericButtons.forEach(item => {item.addEventListener("click", function(event) {

displayCalculations.textContent += event.target.value;
    
})});

operatorButtons.forEach(item => {item.addEventListener("click", function(event) { 
 
  operator = event.target.value;
  
  displayCalculations.textContent += ` ${operator} `;

  if (displayResult.textContent != 0) {
    displayCalculations.textContent = `${displayResult.textContent} ${operator} `;
  }

  if (operator === "+" ||
  operator === "-" ||
  operator === "*" ||
  operator === "/") {
    const grabFirstNumber = displayCalculations.textContent;
    a = grabFirstNumber.split(" ")[0];
    console.log("a =", a);
    console.log("Operator is:", operator);
    

  };
  
})});
buttonEquals.addEventListener("click", function() {
  const grabSecondNumber = displayCalculations.textContent;
  b = grabSecondNumber.substring(grabSecondNumber.lastIndexOf(" ") + 1);

  console.log("b =", b);
  
  console.log("Result is:", operate(a, b, operator));
  displayResult.textContent = parseFloat(operate(a, b, operator).toFixed(2));
  displayCalculations.textContent = "";
  a = displayResult.textContent;
  console.log(a);


});
}
//trying outside function to create second number and then call it inside createCalculation

function outsideFunctionCreateSecondNumber() {
  const grabSecondNumber = displayCalculations.textContent;
  b = grabSecondNumber.substring(grabSecondNumber.lastIndexOf(" ") + 1);

  console.log("b =", b);
  return b
}



createCalculations();
