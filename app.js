class Vehicle {
	constructor(make, model, year) {
		this.make = make;
        this.model = model;
        this.year = year;
    }
    Honk() {
	return 'Beep';
    }
    toString() {
    return `This vehicle is a ${this.year} ${this.make} ${this.mode}.`;
    }
}

class Car extends Vehicle { 
    constructor(make, model, year) {
        super();
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
	constructor (make, model, year) {
	    super();
	    this.numWheels = 2;
    }
    revEngine() {
		return 'VROOM!!!';
	}
}

class Garage {
	constructor(capacity) {
		this.vehicles = [];
		this.capacity = capacity;
	}
	add(newVehicle) {
		if (!(newVehicle instanceof Vehicle)) {
			return 'Only vehicles are allowed in here!';
		}
		if (this.vehicles.length >= this.capacity) {
			return 'Sorry, were full';
		}
		this.vehicles.push(newVehicle);
		return 'Vehicle added!';
}
}

	

