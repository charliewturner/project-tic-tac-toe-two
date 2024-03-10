const gameboard = (function () {

    //gameboard should contain an array of arrays 
    //containing the content of the boxes (3x3 empty to start)
    let gameboard = [["", "", ""],
    ["", "", ""],
    ["", "", ""]];

    function resetBoard() {
        //clear contents of gameboard arrays
        gameboard = [["", "", ""],
        ["", "", ""],
        ["", "", ""]];
        renderBoard();
    }

    function renderBoard() {
        //render board on HTML
    }



    function startGame() {
        resetBoard();
        playGame();
    }

});

const displayControls = (function () {
    //display control elements on HTML
    //move into renderBoard?

    //determine what happens upon user click
})


const playGame = (function () {
    const updatePlayers = (playerOne, playerTwo) => {

        //set playerOne/playerTwo according to user input
        //link to confirmation button on HTML
        const players = {
            playerOne: "",
            playerTwo: ""
        };

        players.playerOne = playerOne;
        players.playerTwo = playerTwo;
    }

    //define functions to play the game
    const playerTurn = () => {
        gameboard[i][j]
        turnCount++;
    }

    const checkWin = () => {
        let turnCount = 0;

        //turn the array into a set
        //if all elements are equal, returns true

        if (turncount < 5) {
            return false;
        } else {

            let rowWin = () => {
                if (gameboard[0] === gameboard[1] && gameboard[0] ===gameboard[2]) {
                    return true;
                }
            };

            //create new array representing each column
            //check if all elements of array match
            let columnWin = () => {
                let columnContents = [];
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        columnContents.push(gameboard[j][i]);
                    }
                    allEqual(columnContents);
                }
            };

            //create new array representing each diagonal
            //check if all elements of array match
            let diagWin = () => {
                let diagRight = [];
                let diagLeft = [];
                let j = 2;

                for (let i = 0; i <= 2; i++) {
                    diagRight.push(gameboard[i][i]);
                }
                allEqual(diagRight);

                for (let i = 2; i >= 0; i--) {
                    diagLeft.push(gameboard[i][j]);
                    j--;
                }
                allEqual(diagLeft);
            };

            //check if a line of three is complete

            if (rowWin == true || columnWin == true || diagWin == true) {
                let winningPlayer;

                //check which symbol won the game
                //make the user of that symbol the winningPlayer

                return wonGame = () => {
                    //check which player won
                    //display winning player
                    console.log(winningPlayer + " wins!");
                };
            } else if (turnCount >= 9) {
                return drawnGame = () => {
                    //add drawn game function
                };
            } else {
                return false;
            }
        }
    }
    return { updatePlayers, playerTurn, checkWin }
})

gameboard();