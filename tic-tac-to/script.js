let container = document.getElementById('container')

let gameBoard = ['box1', 'box2', 'box3', 'box4', 
            'box5', 'box6', 'box7', 'box8', 'box9'];

const boxFactory = function(box) {
    let boxDiv = document.createElement('div');
    boxDiv.textContent = 'X';
    boxDiv.classList.add('box', box);
    boxDiv.setAttribute('id', box)
    const append = function() {
        container.appendChild(boxDiv);
    }
    return { boxDiv, append };
}

for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = boxFactory(gameBoard[i]);
    gameBoard[i].append();
}

// const fox1 = boxFactory()
// fox1.append()

// for (let i = 0; i < gameBoard.length; i++) {
//     gameBoard[i] = Person('jeff', 23)};
// console.log(gameBoard[2])

