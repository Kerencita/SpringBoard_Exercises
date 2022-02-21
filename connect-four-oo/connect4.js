class Game{
  board = [];
  constructor (h, w, p1, p2){
    this.height = h;
    this.width = w;
    this.gameOver = false;
    this.player1 = p1;
    this.player2 = p2;
    this.currPlayer = p1;
    this.makeBoard();
    this.makeHtmlBoard();
  }

  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

  makeHtmlBoard() {
    const board = document.getElementById('board');

    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    
    //have to bind "Game" to handleCLick function so that "this" is referring to the Game class and not the "Click Event"
    this.handleClickBound = this.handleClick.bind(this)
    top.addEventListener('click', this.handleClickBound);
  
    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
  
    board.append(top);
  
    // make main part of board
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');
  
      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
  
      board.append(row);
    }

  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y,x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.backgroundColor = this.currPlayer.color;
    piece.style.top = -50 * (y + 2);
  
    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }

  endGame(msg) {
    this.gameOver = true;
    const top = document.querySelector('#column-top');
    top.removeEventListener('click', this.handleClickBound);
    alert(msg);
  }

  checkforwin() {
    const _win = cells => cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer
      );
    

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }

  handleClick(evt) {
    const x = +evt.target.id;

    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);
    
    // check for win
    if (this.checkforwin()) {
      return this.endGame(`Player ${this.currPlayer.color} won!`);
    }
    
    // check for tie
    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }
      
    // switch players
    this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1;
  }

}

class Player {
  constructor(color){
    this.color = color
  }
}

let game1 = '';

const startGame = document.querySelector('#start-game');
startGame.addEventListener('click', function() {
  const board = document.querySelector('#board');
  const player1 = new Player(document.querySelector('#p1-color').value);
  const player2 = new Player(document.querySelector('#p2-color').value);
  board.innerHTML = ''
  game1 = new Game (6,7, player1, player2);
})





//////OLD CONNECT FOUR GAME CODE//////
// const WIDTH = 7;
// const HEIGHT = 6;

// let currPlayer = 1; // active player: 1 or 2
// let board = []; // array of rows, each row is array of cells  (board[y][x])

// function makeBoard() {
//   for (let y = 0; y < HEIGHT; y++) {
//     board.push(Array.from({ length: WIDTH }));
//   }
// }

// function makeHtmlBoard() {
//   const board = document.getElementById('board');

//   // make column tops (clickable area for adding a piece to that column)
//   const top = document.createElement('tr');
//   top.setAttribute('id', 'column-top');
//   top.addEventListener('click', handleClick);

//   for (let x = 0; x < WIDTH; x++) {
//     const headCell = document.createElement('td');
//     headCell.setAttribute('id', x);
//     top.append(headCell);
//   }

//   board.append(top);

//   // make main part of board
//   for (let y = 0; y < HEIGHT; y++) {
//     const row = document.createElement('tr');

//     for (let x = 0; x < WIDTH; x++) {
//       const cell = document.createElement('td');
//       cell.setAttribute('id', `${y}-${x}`);
//       row.append(cell);
//     }

//     board.append(row);
//   }
// }

// /** findSpotForCol: given column x, return top empty y (null if filled) */
// function findSpotForCol(x) {
//   for (let y = HEIGHT - 1; y >= 0; y--) {
//     if (!board[y][x]) {
//       return y;
//     }
//   }
//   return null;
// }

// /** placeInTable: update DOM to place piece into HTML table of board */
// function placeInTable(y, x) {
//   const piece = document.createElement('div');
//   piece.classList.add('piece');
//   piece.classList.add(`p${currPlayer}`);
//   piece.style.top = -50 * (y + 2);

//   const spot = document.getElementById(`${y}-${x}`);
//   spot.append(piece);
// }

// /** endGame: announce game end */
// function endGame(msg) {
//   alert(msg);
// }

// /** handleClick: handle click of column top to play piece */
// function handleClick(evt) {
//   // get x from ID of clicked cell
//   const x = +evt.target.id;

//   // get next spot in column (if none, ignore click)
//   const y = findSpotForCol(x);
//   if (y === null) {
//     return;
//   }

//   // place piece in board and add to HTML table
//   board[y][x] = currPlayer;
//   placeInTable(y, x);
  
//   // check for win
//   if (checkForWin()) {
//     return endGame(`Player ${currPlayer} won!`);
//   }
  
//   // check for tie
//   if (board.every(row => row.every(cell => cell))) {
//     return endGame('Tie!');
//   }
    
//   // switch players
//   currPlayer = currPlayer === 1 ? 2 : 1;
// }

// /** checkForWin: check board cell-by-cell for "does a win start here?" */

// function checkForWin() {
//   function _win(cells) {
//     // Check four cells to see if they're all color of current player
//     //  - cells: list of four (y, x) cells
//     //  - returns true if all are legal coordinates & all match currPlayer

//     return cells.every(
//       ([y, x]) =>
//         y >= 0 &&
//         y < HEIGHT &&
//         x >= 0 &&
//         x < WIDTH &&
//         board[y][x] === currPlayer
//     );
//   }

//   for (let y = 0; y < HEIGHT; y++) {
//     for (let x = 0; x < WIDTH; x++) {
//       // get "check list" of 4 cells (starting here) for each of the different
//       // ways to win
//       const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
//       const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
//       const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
//       const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

//       // find winner (only checking each win-possibility as needed)
//       if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
//         return true;
//       }
//     }
//   }
// }

// makeBoard();
// makeHtmlBoard();
