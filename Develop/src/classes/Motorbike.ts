// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import colors from "colors";

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {

  // Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  
  // Constructor for the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.vehicle = "motorbike";
    // Check if the wheels array has 2 elements
    // If not, create 2 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel(),];
    } else {
      this.wheels = wheels;
    }
  }

  wheelie(): void {
    console.log(colors.black.bgWhite(`Motorbike ${this.make} ${this.model} is doing a wheelie!`))
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Motorbike class
    console.log(colors.black.bgWhite(`VIN: ${this.vin}`));
    console.log(colors.black.bgWhite(`Color: ${this.color}`));
    console.log(colors.black.bgWhite(`Make: ${this.make}`));
    console.log(colors.black.bgWhite(`Model: ${this.model}`));
    console.log(colors.black.bgWhite(`Year: ${this.year}`));
    console.log(colors.black.bgWhite(`Weight: ${this.weight} lbs`));
    console.log(colors.black.bgWhite(`Top Speed: ${this.topSpeed} mph`));

    // Print details of the wheels
    console.log(
      colors.black.bgWhite(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`)
    );
    console.log(
      colors.black.bgWhite(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`)
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
