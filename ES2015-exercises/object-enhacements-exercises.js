///////////////////////
///// EXERCISE 1 /////
/////////////////////

function createInstructor (firstName, lastName){
    return {
        firstName,
        lastName
    };
}

//or//

const createInstructor = (firstName, lastName) => ({firstName, lastName});

///////////////////////
///// EXERCISE 2 /////
/////////////////////

const instructor = (firstName, favoriteNumber) => ({firstName, [favoriteNumber]: 'That is my favorite!' })


///////////////////////
///// EXERCISE 3 /////
/////////////////////

const instructor = {
    firstName: 'Colt',
    sayHi(){
        return 'Hi!';
    },
    sayBye(){
        return this.firstName + ' says bye!';
    }
};

///////////////////////
///// EXERCISE 4 /////
/////////////////////

const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb](){
            return noise;
        },
    };
};