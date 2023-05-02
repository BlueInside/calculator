const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(num1, num2, operator) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

const display = document.querySelector(".calculator-display");

const erase = document.querySelector("#clear");
erase.addEventListener("click", () => {
  clearDisplay();
  firstNum = "";
  secondNum = "";
});

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    display.innerText += e.target.innerText;
  });
});
const operators = document.querySelectorAll(".operator");
operators.forEach((element) => {
  element.addEventListener("click", (e) => {
    firstNum = Number(display.innerText);
    operator = e.target.innerText;
    clearDisplay();
  });
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", calculate);
let firstNum;
let secondNum;
let operator;
function calculate() {
  secondNum = Number(display.innerText);
  let result = operate(firstNum, secondNum, operator);
  if (result % 1 != 0) result = result.toFixed(5);

  //so it doesn't allow spamming equal button
  firstNum = null;
  updateDisplay(result);
}
function clearDisplay() {
  display.innerText = "";
}
function updateDisplay(line) {
  display.innerText = `${line}`;
}
//Issues
//-- constantly pressing equal does the previous equation
//-- create function that manipulate first last num and operator
//---- it doesn't update number when press operator
//---- few times only first num and operator
