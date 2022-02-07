///////////////////////
//////EXERCISE 1//////
/////////////////////

//GIVEN THIS FUNCTION//
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

//REFACTOR IT TO USE THE REST OPERATOR & AN ARROW FUNCTION://

function filterOutOdds (...numsArr) {
    return numsArr.filter((num) => num % 2 === 0);
}

//OR can  also be written as://

const filterOutOdds = (...numsArr) => numsArr.filter((num) => num % 2 === 0);


///////////////////////
//////EXERCISE 2//////
/////////////////////

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

const findMin = (...numsArr) => numsArr.reduce((min,nextValue) => (nextValue < min ? nextValue : min));


///////////////////////
//////EXERCISE 3//////
/////////////////////

//Write a function called mergeObjects that accepts two objects 
//and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = ( obj1, obj2) => ({ ...obj1, ...obj2});


///////////////////////
//////EXERCISE 4//////
/////////////////////

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments
//The function should return a new array with the original array values and all of additional arguments doubled.

//first I had to accept the initial array and the REST of the arguments as an array
function doubleAndReturnArgs (arr, ...args){
    //used map() to double the elements in the args array
    const doubles = args.map((num) => num *2);
    //used SPREAD to create a new array out of the two arrays taken in//
    return [...arr, ...doubles];
}

//can be refactored as:

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((num) => num * 2)];

///////////////////////
//////EXERCISE 5//////
/////////////////////

//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
//Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const copyitems = [...items]
    const randomIndex = Math.floor(Math.random() * items.length);
    copyitems.splice(randomIndex, 1)
    return copyitems;
}


/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const objcopy = {...obj};
    delete objcopy[key]
    return objcopy;
}


/** Combine two objects and return a new object. */

const combine = ( obj1, obj2) => ({ ...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({ ...obj, [key]:val });