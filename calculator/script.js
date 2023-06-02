let display = document.getElementById('input');
let buttons = Array.from(document.querySelectorAll('#num-btn'))
const addButton = document.getElementById('add')
const equalButton = document.getElementById('equal')
const multButton = document.getElementById('multiply')
const clearButton = document.getElementById('clear')

let valueA = [];

function add() {
    return valueA[0] + valueA[1]
}
function multiply() {
    return valueA[0] * valueA[1]
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

operator = ''
addButton.addEventListener('click', () => {
    operator = '+'
    console.log(operator)
})
multButton.addEventListener('click', () => {
    operator = '*'
    console.log(operator)
})

buttons.forEach(btn => btn.addEventListener('click', e => {
    display.value = e.target.textContent
    valueA.push(parseInt(e.target.textContent))
    console.log(valueA)
}))

equalButton.addEventListener('click', () => {
    if (operator === '+') {
        equal(add);
        display.value = add()
        clear()
    } else if (operator === '*') {
        equal(multiply)
        display.value = multiply()
        clear()
    }
})

