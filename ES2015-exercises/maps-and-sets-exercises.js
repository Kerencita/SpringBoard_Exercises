// What does the following code return?
new Set([1,1,2,2,3,4])
//returns: {1,2,3,4}

// What does the following code return?
[...new Set("referee")].join("")
//returns: "ref"

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false)
//because [] !== [], the two arrays will be stored as separate values
// {
//     [1,2,3] => true,
//     [1,2,3] => false
// }


//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate (array){
    const set = [...new Set(array)];
    return set.length !== array.length;
}
//refactored to arrow function
const hasDuplicate = (array) => [...new Set(array)].length !== array.length;


//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function count (array, value){
    return array.filter((letter) => (letter === value)).length;
}

function vowelCount (string){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let strArr = Array.from(string.toLowerCase());
    let vowelArr = strArr.filter((letter) => vowels.includes(letter));
    let vowelSet = [...new Set(vowelArr)];
    let vowelMap = new Map();
    vowelSet.forEach((vowel) => vowelMap.set(vowel, count(vowelArr,vowel)))
    
    return vowelMap;
}
