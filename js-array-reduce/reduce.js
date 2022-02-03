/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

//set the initial value of accumulator to an empty list, then pushed the nextValue key value to the list, returning the list everytime
function extractValue(arr, key) {
    return arr.reduce(function(accum, nextValue){
        accum.push(nextValue[key])
        return accum
    }, [])
};

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    //first convert the string to an array of its letters
    let strArr = Array.from(str.toLowerCase());
    //set an arrays of vowels
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return strArr.reduce(function(accum, nextValue){
        //if the current letter is a vowel...
        if(vowels.indexOf(nextValue) != -1){
            //if the current letter is a vowel and is included in the accum object
            if(accum[nextValue]){
                //add 1 to its value in the object
                accum[nextValue] += 1
            //else add the vowel to the accum object and set its value as 1
            } else { accum[nextValue] = 1 }
        }
        //return the final object element
        return accum
    }, {})
};

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

//set intial value of accum to an empty list, add the new key and value to each object, and push object to accum returning accum everytime
function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, nextObj){
        nextObj[key] = value
        accum.push(nextObj)
        return accum
    }, [])
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

//set initial value of accum to a list with two empty lists
function partition(arr, callback) {
    return arr.reduce(function(accum, nextValue){
        //IF callback of nextvalue is TRUE then add it to the first list in accum, else add it to the second list in accum
        if (callback(nextValue)){
            accum[0].push(nextValue)
        } else {
            accum[1].push(nextValue)
        }
        return accum
    }, [[],[]])
};
