"use strict";
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
function calculate(op, a, b) {
  try {
    let result;

    switch (op) {
      case "add":
        result = a + b;
        break;

      case "subtract":
        result = a - b;
        break;

      case "divide":
        if (b === 0) throw new Error("Cannot divide by zero!");
        result = a / b;
        break;

      case "power":
        result = Math.pow(a, b);
        break;

      case "root":
        if (a < 0) throw new Error("Cannot take root of a negative number!");
        result = Math.sqrt(a);
        break;

      default:
        throw new Error("InvalidOperationError: Unsupported operation.");
    }

    console.log(`
---------------------------
Operation: ${op}
Input: ${a}, ${b}
Result: ${result}
---------------------------
    `);

  } catch (err) {
    console.error(`
---------------------------
Operation: ${op}
Error: ${err.message}
---------------------------
    `);
  }
}
operations.forEach(op => calculate(op, num1, num2));
