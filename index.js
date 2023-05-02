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
erase.addEventListener("click", () => (display.innerText = ""));

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    display.innerText += e.target.innerText;
  });
});

let firstNum = Number(display.innerText);
let secondNum;
let operator;
