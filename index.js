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
erase.addEventListener("click", clearDisplay);

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

let firstNum;
let secondNum;
let operator;

function clearDisplay() {
  display.innerText = "";
}
//store first input when user presses and operator
//save which operation been chosen and then operate when pressed =
