// import Driveable interface
import Driveable from '../interfaces/Driveable.js';
import colors from "colors";
export type vehicleType = "vehicle" | "truck" | "motorbike" | "car";

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  // Declare properties of the Vehicle class
  started: boolean;
  currentSpeed: number;
  vehicle: vehicleType;

  // Constructor for the Vehicle class
  constructor() {
    this.started = false;
    this.currentSpeed = 0;
    this.vehicle = 'vehicle';
  }

  // Method to print vehicle details
  printDetails(): void {
    console.log(colors.black.bgWhite(`Vehicle started: ${this.started}`));
    console.log(colors.black.bgWhite(`Vehicle current speed: ${this.currentSpeed} mph`));
  }

  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log(colors.black.bgWhite('Vehicle started'));
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed += change;
      console.log(colors.black.bgWhite(`Vehicle accelerated to ${this.currentSpeed} mph`));
    } else {
      console.log(colors.black.bgWhite('Start the vehicle first'));
    }
  }

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= change;
      console.log(colors.black.bgWhite(`Vehicle decelerated to ${this.currentSpeed} mph`));
    } else {
      console.log(colors.black.bgWhite('Start the vehicle first'));
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log(colors.black.bgWhite('Vehicle stopped'));
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(colors.black.bgWhite(`Vehicle turned ${direction}`));
    } else {
      console.log(colors.black.bgWhite('Start the vehicle first'));
    }
  }

  // Method to reverse the vehicle
  reverse(): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(colors.black.bgWhite('Vehicle reversed'));
    } else {
      console.log(colors.black.bgWhite('Start the vehicle first'));
    }
  }
}

// Export the Vehicle class
export default Vehicle;
