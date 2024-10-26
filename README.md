# Vehicle-Builder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Vehicle-Builder is a simple command-line application that allows users to pick from a list of vehicles, create new vehicles, and perform actions on those vehicles. Users are intuitively guided through a series of prompts and the chosen actions are displayed in the terminal. 

This application is a TypeScript-based exercise in implementing interfaces, extending classes, and importing and exporting modules. 

## Installation

1. Download the project to your local environment by running the following commands in the terminal:

```
git clone https://github.com/mikelind28/Vehicle-Builder.git
```
2. Then, make sure to change directories into the Develop folder:

```
cd Vehicle-Builder/Develop
```
3. Finally, install the required dependencies:

```
npm install
```
You're now ready to use Vehicle-Builder!

## Usage

After [installing](#installation) the application, simply run ```npm start``` from the terminal from within the Develop folder. Then, follow the prompts using your keyboard's arrow keys and the return key. 

Newly-created vehicles can store information such as the make, model, year, top speed, and more. Vehicle actions include starting and stopping, accelerating and decelerating, turning, and reversing. Certain actions are limited by the vehicle's type and its current state—for example, only certain vehicles are allowed to tow or do wheelies, and vehicles can only move after having been started. Try to tow a vehicle that is heavier than the truck's tow capacity and see what happens!

See a video walkthrough of the application [here](https://drive.google.com/file/d/13WOD0GomK0IZek2z0PmVfFD3Ou4KQqwj/view?usp=sharing).

## Credits

Thanks to edX Boot Camps LLC for providing the starter code and assignment prompt, and thanks to our teacher's assistant Matteo Ramazzini for showing me [TypeScript's type assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) feature, which helped me ensure that only certain types of vehicles could perform certain actions!

## License

This project uses an [MIT License ↗️](./LICENSE).

