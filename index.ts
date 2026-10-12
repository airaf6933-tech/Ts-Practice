export {};

class Student {
  private marks: number;
  name: string;

  constructor(name: string, marks: number) {
    this.name = name;
    this.marks = marks;
  }

  getMarks() {
    return this.marks;
  }

  setMarks(m: number) {
    if (m < 0 || m > 100) {
      console.log("invalid marks");
    } else {
      this.marks = m;
    }
  }
}

let s1 = new Student("Ahmed", 80);
s1.setMarks(150);
s1.setMarks(90);
console.log(s1.name, s1.getMarks());


abstract class Vehicle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  abstract start(): void;

  stop() {
    console.log(this.brand + " stopped");
  }
}

class Car extends Vehicle {
  start() {
    console.log(this.brand + " car started");
  }
}

class Bike extends Vehicle {
  start() {
    console.log(this.brand + " bike started");
  }
}

let c = new Car("Toyota");
let b = new Bike("Honda");
c.start();
c.stop();
b.start();


class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " says woof");
  }
}

class Cat extends Animal {
  speak() {
    console.log(this.name + " says meow");
  }
}

let animals: Animal[] = [new Dog("Tommy"), new Cat("Kitty"), new Animal("Something")];

for (let i = 0; i < animals.length; i++) {
  animals[i].speak();
}