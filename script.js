let output = document.getElementById('output');
let currentInput = '';

function appendToOutput(value) {
    if (value === 'AC') {
        clearOutput();
    } else if (value === 'Del') {
        deleteLastCharacter();
    } else if (value === '=') {
        calculate();
    } else {
        currentInput += value;
        updateOutput();
    }
}

function clearOutput() {
    currentInput = '';
    updateOutput();
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateOutput();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateOutput();
}

function updateOutput() {
    output.textContent = currentInput;
}
