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
    const checkWin = () => {
        //check if a line of three is complete

        //check which player won

    }

    const playerTurn = () => {

    }



})

gameboard();