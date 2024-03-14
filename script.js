
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

const Gameboard = (function () {

    let gameboard = ["", "", "", "", "", "", "", "", "",];

    const renderBoard = (() => {
        let boardHTML = "";

        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id=${index}>${square}</div>`
        });
        document.getElementById("board-container").innerHTML = boardHTML;

    });

    return {
        renderBoard,
    }

})();


const Game = (function () {
    let currentPlayerIndex;
    let gameOverStatus;


    //use a factory to generate players
    const start = (name, symbol) => {
        players = [
            createPlayer(document.querySelector("playerOne").value, "X"),
            createPlayer(document.querySelector("playerTwo").value, "O")
        ]
        currentPlayerIndex = 0;
        gameOverStatus = false;
        Gameboard.renderBoard();
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







    // const checkWin = () => {
    //     let turnCount = 0;


    //     //turn the array into a set
    //     //if all elements are equal, returns true

    //     if (turncount < 5) {
    //         return false;
    //     } else {

    //         let rowWin = () => {
    //             for (i = 0; i <= 2; i++) {
    //                 if (gameboard[i][0] === gameboard[i][1] &&
    //                     gameboard[i][0] === gameboard[i][2]) {
    //                     return true;
    //                 } else {
    //                     return false;
    //                 }
    //             }
    //         };


    //         let columnWin = () => {
    //             for (i = 0; i <= 2; i++) {

    //                 if (gameboard[0][i] === gameboard[1][i] &&
    //                     gameboard[0][i] === gameboard[2][i]) {
    //                     return true;
    //                 } else {
    //                     return false;

    //                 }
    //             };

    //             //create new array representing each diagonal
    //             //check if all elements of array match
    //             let diagWin = () => {
    //                 const allEqual = arr => arr.every(val => val === arr[0]);
    //                 let diagRight = [];
    //                 let diagLeft = [];
    //                 let j = 2;

    //                 for (let i = 0; i <= 2; i++) {
    //                     diagRight.push(gameboard[i][i]);
    //                 }
    //                 allEqual(diagRight);

    //                 for (let i = 2; i >= 0; i--) {
    //                     diagLeft.push(gameboard[i][j]);
    //                     j--;
    //                 }

    //                 allEqual(diagLeft);
    //             };

    //             //check if a line of three is complete

    //             if (rowWin == true || columnWin == true || diagWin == true) {
    //                 let winningPlayer;

    //                 //check which symbol won the game
    //                 //make the user of that symbol the winningPlayer

    //                 return wonGame = () => {
    //                     //check which player won
    //                     //display winning player
    //                     console.log(winningPlayer + " wins!");
    //                 };
    //             } else if (turnCount >= 9) {
    //                 return drawnGame = () => {
    //                     //add drawn game function
    //                 };
    //             } else {
    //                 return false;
    //             }
    //         }
    //     }

    // }
})();



const displayController = (function () {
    //display control elements on HTML
    //move into renderBoard?

    //determine what happens upon user click
})();




