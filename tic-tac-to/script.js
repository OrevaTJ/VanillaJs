const container = document.getElementById('container');


let gameBoard = ['box1', 'box2', 'box3', 'box4', 
            'box5', 'box6', 'box7', 'box8', 'box9'];

const li = []

const boxFactory = function(box) {
    let gameButton = document.createElement('button');
    gameButton.textContent = 'X';
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

const gameValue = gameBoard.filter(x => {
    li.push(x.gameButton.textContent)
})
if (li[0] === li[1] && li[2] || li[3] === li[4] && li[5]
    || li[6] === li[7] && li[8] || li[0] === li[3] && li[6]
    || li[1] === li[4] && li[7] || li[2] === li[5] && li[8]
    || li[0] === li[4] && li[8] || li[2] === li[4] && li[6]) {
    console.log(true)
}

const gameFlow = function() {
    const gameEnd = function() {
        let num = 0;
        for (let i = 0; i < gameBoard.length; i++) {
            if(gameBoard[i].gameButton.textContent === '') {
                num = num + 1
            }
        }
        return num
    } 
    console.log(gameEnd())
    
    if (gameEnd()) {
        console.log('game')
    } else {
        console.log('over')
    }
    
}


const gamePlay = (function() {
    let checkWinner = ''
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
        checkWinner = getActivePlayer().name 
        console.log(getActivePlayer().mark);
        changePlayer();
    };

    return { getActivePlayer, playRound }

})();

container.addEventListener('click', e => {
    gamePlay.playRound(e)
})

