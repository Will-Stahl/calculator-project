/* external.js */
const add = function(letf, right) {
	return left + right;
};

const subtract = function(left, right) {
	return left - right;
};

const multiply = function(left, right) {
    return left * right;
};

const divide = function(dividend, divisor) {
    return dividend / divisor;
};

function operate(operation, left, right) {
    if (operation === "+") {
        return left + right;
    }
    else if (operation === "-") {
        return left - right;
    }
    else if (operation === "x") {
        return left * right;
    }
    else if (operation === "/") {
        if (right === 0) {
            return NaN;
        }
        return left / right;  // control for dividing by 0
    }
    else {
        return "no such operation";
    }
}

let left_num = 0;
let display_number = 0;
let cur_operator = "+";
let display_element = document.querySelector("#display");

function reset() {  // div by 0, AC,
    left_num = 0;
    display_number = 0;
    cur_operator = "+";
}

const num_buttons = document.querySelectorAll(".num");
for (let i = 0; i < num_buttons.length; i++) {
    num_buttons.item(i).addEventListener("click", () => {
        let input = parseInt(num_buttons.item(i).textContent);
        display_number *= 10;
        display_number += input;
        display_element.textContent = display_number.toString();
    });
}

const op_buttons = document.querySelectorAll(".key.operator");
for (let i = 0; i < op_buttons.length; i++) {
    op_buttons.item(i).addEventListener("click", () => {
        let cur_button = op_buttons.item(i);
        left_num = operate(cur_operator, left_num, display_number);
        if (isNaN(left_num)) {  // attempted div by 0
            display_element.textContent = "Div by 0! Resetted";
            reset();
            return;
        }
        display_number = Math.round(left_num * 10000) / 10000;
        display_element.textContent = display_number.toString();
        display_number = 0;
        cur_operator = cur_button.textContent;
    });
}

const eq_button = document.querySelector("#equals");
eq_button.addEventListener("click", () => {
    left_num = operate(cur_operator, left_num, display_number);
    if (isNaN(left_num)) {  // attempted div by 0
        display_element.textContent = "Div by 0! Resetted";
        reset();
        return;
    }
    display_number = Math.round(left_num * 10000) / 10000;
    display_element.textContent = display_number.toString();
    display_number = 0;
    cur_operator = "+";
});

const ac_button = document.querySelector("#ac");
ac_button.addEventListener("click", () => {
    reset();
    display_element.textContent = "0";
});

// const sum = function(numbers) {
// 	let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };

// const power = function(base, power) {
// 	let result = 1;
//   for (let i = 0; i < power; i++) {
//     result *= power;
//   }
//   return result;
// };

// const factorial = function(number) {
// 	let result = number;
//   number--;
//   while (number > 0) {
//     result *= number;
//     number--;
//   }
// };

// // Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };
