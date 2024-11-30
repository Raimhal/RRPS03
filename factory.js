// дозволяє створювати об'єкти певного типу без точної вказівки на їх клас перекидуя цю задачу фабриці
    
// Base class for all vehicles
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`${this.name} is being driven.`);
  }
}

// Subclass for cars
class Car extends Vehicle {
  drive() {
    console.log(`${this.name} (Car) is cruising smoothly.`);
  }
}

// Subclass for bikes
class Bike extends Vehicle {
  drive() {
    console.log(`${this.name} (Bike) is zipping along.`);
  }
}

// Subclass for trucks
class Truck extends Vehicle {
  drive() {
    console.log(`${this.name} (Truck) is hauling heavy loads.`);
  }
}

// Vehicle Factory to create vehicle objects based on type
class VehicleFactory {
  createVehicle(type, name) {
    switch (type) {
      case "car":
        return new Car(name);
      case "bike":
        return new Bike(name);
      case "truck":
        return new Truck(name);
      default:
        throw new Error(`Invalid vehicle type: ${type}`);
    }
  }
}

// Example usage
const factory = new VehicleFactory();

const car = factory.createVehicle("car", "Toyota");
const bike = factory.createVehicle("bike", "Yamaha");
const truck = factory.createVehicle("truck", "Ford");

car.drive();  // Toyota (Car) is cruising smoothly.
bike.drive(); // Yamaha (Bike) is zipping along.
truck.drive(); // Ford (Truck) is hauling heavy loads.

