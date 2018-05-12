// ----- Classes ------

// Javascript doesn't have pure classes, it has prototypal inheritance.
// ES6 has a classes feature to address this.

// Object constructor
// function Car(options) {
// 	this.title = options.title;
// };

// adding a function to the object constructor
// Car.prototype.drive = function() {
// 	return "vroom";
// }

// creating a new instance of the object
// const car = new Car({ title: 'Focus' });

// car.drive(); // returns 'vroom'
// car // returns Car { title: "Focus" }


// In ES5, we would have to do the following to create the inheritance:
// function Car(options) {
// 	this.title = options.title;
// };

// Car.prototype.drive = function() {
// 	return "vroom";
// };

// function Toyota(options) {
// 	Car.call(this, options);
// 	this.color = options.color
// };

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// Toyota.prototype.honk = function() {
// 	return 'beep';
// }

// const toyota = new Toyota({ color: 'red', title: 'Daily Driver' })
// toyota; // returns { title: 'Daily Driver', color: 'red' }
// toyota.drive(); // returns 'vroom'
// toyota.honk(); // returns 'beep'


// REFACTOR IN ES6 with classes. The benefit is that we can bypass setting up constructor function, worrying about the prototype, inheritance, etc.
// Just doing this gives me a class object of Car:
// class Car {

// }











