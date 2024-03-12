const gameboard = (function () {

    //gameboard should contain an array of arrays 
    //containing the content of the boxes (3x3 empty to start)
    let gameboard = [];

    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push('');
        }
        gameboard.push(row);
    }

    function resetBoard() {

        let gameboard = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push('');
            }
            gameboard.push(row);
        }
        renderBoard();
    }

    





    function startGame() {
        resetBoard();
        playGame();
    }

})();

const displayControls = (function () {
    //display control elements on HTML
    //move into renderBoard?

    //determine what happens upon user click
})();

const renderBoard = (function() {
    //render board on HTML

    //Example to build off for rendering the gameboard
    /* for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement("div");
        bookElement.innerHTML = `
        <div class = "book-card" id=${i}>
         <h3 class = "title">${book.title}</h3>
  
        <br />
         <h5 class = "author">by ${book.author}</h5><br />
         <h5 class = "page-count">${book.pageCount} pages</h5><br />
         <h5 class = "read-status">Read status: ${book.readStatus}</h5><br />
         <button type = "button" class="changeReadStatus" onclick="changeReadStatus(${i})">Change read status</button><br />
         <button type = "button" class="delete" onclick="deleteBook(${i})">Delete!</button>
         </div> `; **/
    let container = document.querySelector("#board-container");
    container.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        let boardCell = document.createElement("div");
        boardCell.innerHTML = `
        <div class = "board-cell id="${i}">`
        container.appendChild(boardCell);
    }
    
})();

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
        checkWin();
    }

    const checkWin = () => {
        let turnCount = 0;


        //turn the array into a set
        //if all elements are equal, returns true

        if (turncount < 5) {
            return false;
        } else {

            let rowWin = () => {
                for (i = 0; i <= 2; i++) {
                    if (gameboard[i][0] === gameboard[i][1] &&
                        gameboard[i][0] === gameboard[i][2]) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };


            let columnWin = () => {
                for (i = 0; i <= 2; i++) {

                    if (gameboard[0][i] === gameboard[1][i] &&
                        gameboard[0][i] === gameboard[2][i]) {
                        return true;
                    } else {
                        return false;

                    }
                };

                //create new array representing each diagonal
                //check if all elements of array match
                let diagWin = () => {
                    const allEqual = arr => arr.every(val => val === arr[0]);
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

    }
})();

