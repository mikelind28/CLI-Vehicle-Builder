// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import colors from "colors";

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  towingCapacity: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[],
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    this.vehicle = "truck";
    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.make && vehicle.model) {
      if (vehicle.weight <= this.towingCapacity) {
        console.log(colors.black.bgWhite(`The ${vehicle.make} ${vehicle.model} is being towed.`));
      } else {
        console.log(colors.black.bgWhite(`The ${vehicle.make} ${vehicle.model} is too heavy to be towed.`));
      }
    }
  }

  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Truck class
    console.log(colors.black.bgWhite(`VIN: ${this.vin}`));
    console.log(colors.black.bgWhite(`Color: ${this.color}`));
    console.log(colors.black.bgWhite(`Make: ${this.make}`));
    console.log(colors.black.bgWhite(`Model: ${this.model}`));
    console.log(colors.black.bgWhite(`Year: ${this.year}`));
    console.log(colors.black.bgWhite(`Weight: ${this.weight} lbs`));
    console.log(colors.black.bgWhite(`Top Speed: ${this.topSpeed} mph`));
    console.log(colors.black.bgWhite(`Towing Capacity: ${this.towingCapacity} lbs`));

    // Print details of the wheels
    console.log(
      colors.black.bgWhite(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`)
    );
    console.log(
      colors.black.bgWhite(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`)
    );
    console.log(
      colors.black.bgWhite(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`)
    );
    console.log(
      colors.black.bgWhite(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`)
    );
  }
}

// Export the Truck class as the default export
export default Truck;
