let display = document.getElementById('input');
let numButtons = Array.from(document.querySelectorAll('#num-btn'));
const addButton = document.getElementById('add');
const equalToButton = document.getElementById('equal-to');
const multButton = document.getElementById('multiply');
const clearButton = document.getElementById('clear');
const divideButton = document.getElementById('divide');
const subButton = document.getElementById('sub');
const opButton = Array.from(document.querySelectorAll('#operators'))

let inputValue = []; //List of input values
let operator = ''; //Check which operator is clicked
let check = false //Check if an operator is clicked
// display.value = 0

//Operator functions
function add() {
    return inputValue[0] + inputValue[1]
}
function multiply() {
    return inputValue[0] * inputValue[1]
}
function divide() {
    return inputValue[0] / inputValue[1]
}
function sub() {
    return inputValue[0] - inputValue[1]
}


function equalTo(operatorName) {
    console.log(operatorName())
    return operatorName()
}

function clear() {
    return inputValue = []
}
clearButton.addEventListener('click', () => {
    display.value = '';
    clear()
})

//Event for each operator buttons
opButton.forEach(op => op.addEventListener('click', e => {
    operator = e.target.textContent
    world()
    check = true
}))


//Event for each numbers
numButtons.forEach(btn => btn.addEventListener('click', e => {
    if (check === false) {
        display.value += e.target.textContent
        // inputValue.push(parseInt(e.target.textContent))
        console.log(inputValue)
    } else if (check === true) { //Clear display for second input
        display.value = e.target.textContent
        check = false
    }
    // display.value += e.target.textContent
    // // inputValue.push(parseInt(e.target.textContent))
    // console.log(inputValue)
}))

function world() {
    inputValue.push(parseInt(display.value))
    console.log(inputValue)
}

equalToButton.addEventListener('click', () => {
    inputValue.push(parseInt(display.value))//Push second input to value list
    if (operator === '+') {
        equalTo(add);
        display.value = add()
        clear()
    } else if (operator === '*') {
        equalTo(multiply)
        display.value = multiply()
        clear()
    } else if (operator === '/') {
        equalTo(divide)
        display.value = divide()
        clear()
    } else if (operator === '-') {
        equalTo(sub)
        display.value = sub()
        clear()
    }
})

