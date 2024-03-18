const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");


startButton.addEventListener("click", () => {
    Game.start();
})

restartButton.addEventListener("click", () => {
    Game.restart();
})

const Gameboard = (function () {
    let gameboard = ["", "", "", "", "", "", "", "", "",];

    const renderBoard = () => {
        let boardHTML = "";

        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id=${index}>${square}</div>`
        });
        let container = document.getElementById('board-container');
        container.innerHTML = boardHTML;

        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })
    };

    const update = (index, value) => {
        gameboard[index] = value;
        renderBoard();

    }

    //allow access to gameboard outside of this module 
    //without allowing outside editing/modification
    const getGameboard = () => gameboard;

    return {
        renderBoard,
        update,
        getGameboard,
        gameboard,
    }

})();

const Game = (function () {
    let currentPlayerIndex;
    let gameOverStatus;

    const createPlayer = (name, symbol) => {
        return {
            name,
            symbol
        }
    }

    const start = (name, symbol) => {
        players = [
            createPlayer(document.querySelector("#playerOne").value, "X"),
            createPlayer(document.querySelector("#playerTwo").value, "O")
        ]
        currentPlayerIndex = 0;
        gameOverStatus = false;
        Gameboard.renderBoard();

        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", handleClick);
        })
    }

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            Gameboard.update(i, "");
        }
        Gameboard.renderBoard();
    }

    const handleClick = (event) => {

        let index = parseInt(event.target.id.split("-"));
        if (event.target.innerHTML != "") {
            return;
        }
        Gameboard.update(index, players[currentPlayerIndex].symbol);
        currentPlayerIndex == 0 ? currentPlayerIndex = 1 : currentPlayerIndex = 0;

        if (checkWin(Gameboard.getGameboard(), players[currentPlayerIndex].symbol)) {
            gameOverStatus = true;

        };
    }

    function checkWin(board) {

        const winConditions = [
            //if the three cells relating to the arrays below contain the same symbol
            //then a player has won the game
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            displayController.renderMessage(`${players[currentPlayerIndex].name} won!`);
            return;
        }

        if (!board.includes(''))
            displayController.renderMessage(`Its a tie!`);;
    }

    return {
        start,
        handleClick,
        createPlayer,
        restart,
    }

})();



const displayController = (() => {
    const renderMessage = (message) => {
        document.querySelector("#message").innerHTML = message;
    }
    return {
        renderMessage,
    }

})();




