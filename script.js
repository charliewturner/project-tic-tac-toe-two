
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

    const update
    return {
        renderBoard,
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

    }

    const handleClick = (event) => {
        let index = parseInt(event.target.id.split("-"));
        console.log(index);
    }

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
    ];


    return {
        start,
        handleClick,
        createPlayer,

    }

})();



const displayController = (function () {
    //display control elements on HTML
    //move into renderBoard?

    //determine what happens upon user click
})();




