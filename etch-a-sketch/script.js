const rangeInput = document.getElementById('range-input');
const colorInput = document.getElementById('color-picker');
const randomMode = document.getElementById('random-color')
const eraser = document.getElementById('eraser')
const clear = document.getElementById('clear');
const defaultInput = rangeInput.value;
const defaultColor = 'rgb(0, 0, 0)';
const container = document.getElementById('container');

//Create square divs in container
function createSquares(grid) {
    const gridSize = grid * grid;
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('boxes');
        container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
        container.appendChild(div);
    }
}

// Clear button
clear.addEventListener('click', e => {
    container.innerHTML = '';
    location.reload()
})


//Set random color picker
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256))
    }
    return `rgb(${color.join(', ')})`
}

// Change background color of squares
function addEvent(colors) {
    container.addEventListener('mousedown', e => {
        if (colors) {
            if (e.target && e.target.matches('.boxes')) {
                e.target.style.backgroundColor = colors
            }
        } else {//empty string from randomMode to call randomColor()
            if (e.target && e.target.matches('.boxes')) {
                e.target.style.backgroundColor = randomColor()
            }
        }
    }) 
}
window.addEventListener('load', startup, false);
function startup() {
  createSquares(defaultInput);//Default 18*18 grid

  addEvent(colorInput.value);//Default black color

  colorInput.addEventListener('input', e => {
    addEvent(e.target.value);
  })

  eraser.addEventListener('click', e => {
    e.target.backgroundColor = '#FFFFFF'
    addEvent(e.target.backgroundColor)
  })

  randomMode.addEventListener('click', e => {
    e.target.value = ''
    addEvent(e.target.value)
  })
}

//Clear container and set squares to input value
rangeInput.addEventListener('input', e => {
    let newInput = parseInt(e.target.value)
    container.innerHTML = ''
    createSquares(newInput)
})