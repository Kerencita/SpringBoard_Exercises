function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

// Refactor the above code to use two arrow functions. Turn it into a one-liner

// solution: 
const double = (arr) => arr.map((value) => value * 2)
// we can't use arrow functions to replace the "function" and function name
// but we can use arrow functions as anonymous functions stored in variables



// Replace ALL functions with arrow functions below:

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

// solution: 

const squareAndFindEvens = (numbers) => {
    let squares = numbers.map((num) => num ** 2);
    let evens = squares.filter((square) => square % 2 === 0);
    return evens; 
}

//OR

const squareAndFindEvens = (numbers) => numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);