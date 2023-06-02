let display = document.getElementById('input');
let buttons = Array.from(document.querySelectorAll('#num-btn'));
const addButton = document.getElementById('add');
const equalButton = document.getElementById('equal');
const multButton = document.getElementById('multiply');
const clearButton = document.getElementById('clear');
const divideButton = document.getElementById('divide');
const subButton = document.getElementById('sub');
const opButton = Array.from(document.querySelectorAll('#operators'))

let valueA = [];
operator = '';

//Operator functions
function add() {
    return valueA[0] + valueA[1]
}
function multiply() {
    return valueA[0] * valueA[1]
}
function divide() {
    return valueA[0] / valueA[1]
}
function sub() {
    return valueA[0] - valueA[1]
}

function equal(op) {
    console.log(op())
    return op()
}

function clear() {
    return valueA = []
}
clearButton.addEventListener('click', () => {
    display.value = 0;
    clear()
})

//Event for each operator buttons
opButton.forEach(op => op.addEventListener('click', e => {
    operator = e.target.textContent
    world()
}))


//Event for each numbers
buttons.forEach(btn => btn.addEventListener('click', e => {
    display.value += e.target.textContent
    // valueA.push(parseInt(e.target.textContent))
    console.log(valueA)
}))

function world() {
    valueA.push(parseInt(display.value))
    console.log(valueA)
}

equalButton.addEventListener('click', () => {
    if (operator === '+') {
        equal(add);
        display.value = add()
        clear()
    } else if (operator === '*') {
        equal(multiply)
        display.value = multiply()
        clear()
    } else if (operator === '/') {
        equal(divide)
        display.value = divide()
        clear()
    } else if (operator === '-') {
        equal(sub)
        display.value = sub()
        clear()
    }
})

