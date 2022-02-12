class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        console.log('Beep')
    }

    toString(){
        console.log(`The Vehicle is a ${this.make} ${this.model} from ${this.year}.`)
    }
}

class Car extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 2;
    }
    revEngine(){
        console.log('VROOM!')
    }
}


class Garage {
    constructor(a){
        this.capacity = a;
        this.vehicles = [];
    }
    
    add(vehicle){
        //IF the capacity has been reached
        if( this.vehicles.length == this.capacity){
            return 'Sorry, we are full.';
        }
        //IF the vehicle is a Vehicle class, add it
        if(vehicle instanceof Vehicle){
            this.vehicles.push(vehicle);
            console.log('Vehicle Added!')
        } else { return 'ONLY VEHICLES ALLOWED HERE!'}
    }
}