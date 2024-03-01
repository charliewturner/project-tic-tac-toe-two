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


    function displayControls() {
        //display control elements on HTML
        //move into renderBoard?

    }

    function startGame() {
        resetBoard();
        playGame();
    }

});

const playGame = (function () {

    const players = {
        playerOne: "",
        playerTwo: ""
    };

    const updatePlayers = () => {
        players.playerOne = "";
        players.playerTwo = "";

        //set player names using user input
    }

    //define functions to play the game


    const playerTurn = () => {

    }

    const checkWin = () => {
        let turnCount = 0;

        //turn the array into a set
        //if all elements are equal, returns true
        function allEqual(this) {
            return new Set(this).size === 1;
        }

        if (turncount < 5) {
            return false;
        } else {

            let rowWin = () => {
                for (let i = 0; i < 3; i++) {
                    allEqual(gameboard[i]);
                    return gameboard[i][0];
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
                let diagContents = [];
                for (let i = 0; i < 3; i++) {
                    diagContents.push(gameboard[i][i]);
                }
                allEqual(diagContents);
            };

            //check if a line of three is complete

            //check which player won
            if (rowWin == true || columnWin == true || diagWin == true) {
                return true;
                endGame();
            } else {
                return false;
            }
        }
    }

    const endGame = () => {
        //write game end function
    }

})

gameboard();