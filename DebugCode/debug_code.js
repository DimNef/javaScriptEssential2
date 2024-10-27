function performOperation() {
    let number1 = parseInt(document.getElementById('input1').value)
    let number2 = parseInt(document.getElementById('input2').value);

    if (!isNaN(number1) && !isNaN(number2)) {
        let result = addAndMultiply(number1, number2);
        displayResult(result);
    } else {
        debugger;
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    debugger;
    return a * b;
}

function addAndMultiply(a, b) {
    debugger;
    return (a + b) * b;
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}