const container = document.getElementById('container')

function createSquares() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div')
        div.classList.add('boxes')
        container.appendChild(div)
    }
    return
}

createSquares()

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256))
    }
    return `rgb(${color.join(', ')})`
}

console.log(randomColor())

container.addEventListener('click', e => {
    if (e.target && e.target.matches('.boxes')) {
        e.target.style.backgroundColor = randomColor()
    }
})

