"use strict";
let num1 = 10;
let num2 = 5;
let operator = "-";
function result(num1, num2, operators) {
    return operator === "-" ? num1 - num2 : num1 / num2;
}
console.log(`Result of ${num1} ${operator} ${num2} is:`, result(num1, num2, operator));
operator = "/";
console.log(`Result of updated operator ${num1} ${operator} ${num2} is:`, result(num1, num2, operator));
