const buttonValues = [
    'C', 'DEL', '(', ')',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '.', '0', '+', '='
];

const buttonsContainer = document.getElementById('buttons-container');

buttonValues.forEach(value => {
    const button = document.createElement('button');
    button.textContent = value;

    if (value === 'C') {
        button.onclick = clearDisplay;
    } else if (value === 'DEL') {
        button.onclick = deleteChar;
    } else if (value === '=') {
        button.onclick = calculate;
    } else {
        button.onclick = () => appendToDisplay(value);
    }

    buttonsContainer.appendChild(button);
});

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteChar() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid Calculation");
    }
}
