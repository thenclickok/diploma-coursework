const clear = document.getElementById("clear");

function calculate(operation) {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  let result;

  if (isNaN(number1) || isNaN(number2)) {
    result = `Not a number. Please enter a valid number.`;
  } else {
    switch (operation) {
      case "add":
        result = `${number1} + ${number2} = ${number1 + number2}`;
        break;
      case "subtract":
        result = `${number1} - ${number2} = ${number1 - number2}`;
        break;
      case "multiply":
        result = `${number1} x ${number2} = ${number1 * number2}`;
        break;
      case "divide":
        if (number2 === 0) {
          result = `Can't divide by zero!`;
        } else {
          result = `${number1} / ${number2} = ${number1 / number2}`;
        }
        break;
      default:
        result = `Unknown operation. Please try again.`;
    }
  }

  document.getElementById("result").innerText = result;
}

document
  .getElementById("add")
  .addEventListener("click", () => calculate("add"));
document
  .getElementById("subtract")
  .addEventListener("click", () => calculate("subtract"));
document
  .getElementById("multiply")
  .addEventListener("click", () => calculate("multiply"));
document
  .getElementById("divide")
  .addEventListener("click", () => calculate("divide"));
clear.addEventListener("click", () => {
  document.getElementById("result").innerText = "Result";
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
});
