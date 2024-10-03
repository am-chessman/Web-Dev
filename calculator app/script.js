// script.js

$(document).ready(function() {
    let display = $(".display");
    let currentInput = "";
    let operator = "";
    let firstNumber = "";

    $(".btn").click(function() {
        let value = $(this).data("value");

        if (value === "C") {
            currentInput = "";
            operator = "";
            firstNumber = "";
            display.text("0");
        } else if (value === "=") {
            if (firstNumber && operator && currentInput) {
                let result = eval(firstNumber + operator + currentInput);
                display.text(result);
                firstNumber = result;
                currentInput = "";
                operator = "";
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (firstNumber && currentInput) {
                firstNumber = eval(firstNumber + operator + currentInput);
                display.text(firstNumber);
                currentInput = "";
            } else {
                firstNumber = currentInput;
                currentInput = "";
            }
            operator = value;
        } else {
            currentInput += value;
            display.text(currentInput);
        }
    });
});
