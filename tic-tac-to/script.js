const container = document.getElementById('container');

let gameBoard = ['box1', 'box2', 'box3', 'box4', 
            'box5', 'box6', 'box7', 'box8', 'box9'];

const boxFactory = function(box) {
    let gameButton = document.createElement('button');
    gameButton.textContent = '';
    gameButton.classList.add('box', box);
    gameButton.setAttribute('id', box)
    const append = function() {
        container.appendChild(gameButton);
    }
    return { gameButton, append };
}

for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = boxFactory(gameBoard[i]);
    gameBoard[i].append();
}

const gamePlay = function() {
    const players = [
        {
            name: 'Player One',
            mark: 'X',
        },
        {
            name: 'Player Two',
            mark: 'O',
        }
    ];

    let activePlayer = players[0];

    const changePlayer = () => {
        if(activePlayer === players[0]) {
            activePlayer = players[1]
            return
        } else if(activePlayer === players[1]) {
            activePlayer = players[0]
        }
    };

    const getActivePlayer = () => {
        return activePlayer
    };

    const playRound = (e) => {
        if(e.target.textContent) return
        e.target.textContent = getActivePlayer().mark 
        console.log(getActivePlayer().mark);
        changePlayer();
    };

    return { getActivePlayer, playRound }

}();

container.addEventListener('click', e => {
    gamePlay.playRound(e)
})

