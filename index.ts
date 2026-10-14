// export {};

// class Student {
//   private marks: number;
//   name: string;

//   constructor(name: string, marks: number) {
//     this.name = name;
//     this.marks = marks;
//   }

//   getMarks() {
//     return this.marks;
//   }

//   setMarks(m: number) {
//     if (m < 0 || m > 100) {
//       console.log("invalid marks");
//     } else {
//       this.marks = m;
//     }
//   }
// }

// let s1 = new Student("Ahmed", 80);
// s1.setMarks(150);
// s1.setMarks(90);
// console.log(s1.name, s1.getMarks());


// abstract class Vehicle {
//   brand: string;

//   constructor(brand: string) {
//     this.brand = brand;
//   }

//   abstract start(): void;

//   stop() {
//     console.log(this.brand + " stopped");
//   }
// }

// class Car extends Vehicle {
//   start() {
//     console.log(this.brand + " car started");
//   }
// }

// class Bike extends Vehicle {
//   start() {
//     console.log(this.brand + " bike started");
//   }
// }

// let c = new Car("Toyota");
// let b = new Bike("Honda");
// c.start();
// c.stop();
// b.start();


// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   speak() {
//     console.log(this.name + " makes a sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(this.name + " says woof");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log(this.name + " says meow");
//   }
// }

// let animals: Animal[] = [new Dog("Tommy"), new Cat("Kitty"), new Animal("Something")];



// function addAll(...nums: number[]): number {
//     let total = 0
//     for (let i = 0; i < nums.length; i++) {
//         total += nums[i]
//     }
//     return total
// }

// console.log(addAll(1, 2, 3, 4, 5))


// function showNames(...names: string[]) {
//     names.forEach((n) => console.log("hello", n))
// }

// showNames("ali", "abdullah", "hasan")




// function join(a: number, b: number): number
// function join(a: string, b: string): string

// function join(a: number | string, b: number | string) {
//     if (typeof a == "string" && typeof b == "string") {
//         return a + " " + b
//     }
//     else if (typeof a == "number" && typeof b == "number") {
//         return a + b
//     }
//     else {
//         throw new Error("invalid arguments")
//     }
// }

// console.log(join(10, 20))
// console.log(join("hello", "world"))



// function area(side: number): number
// function area(width: number, height: number): number

// function area(a: number, b?: number) {
//     if (b === undefined) {
//         return a * a
//     }
//     return a * b
// }

// console.log(area(5))
// console.log(area(5, 10))





// function show<T>(a: T) {
//     console.log("value is", a)
//     return a
// }

// show(45)
// show(true)
// show("ali")


// function swap<T, U>(a: T, b: U): [U, T] {
//     return [b, a]
// }

// let swapped = swap("ali", 22)
// console.log(swapped)


// function getLast<T>(arr: T[]): T | undefined {
//     return arr[arr.length - 1]
// }

// console.log(getLast([1, 2, 3]))
// console.log(getLast(["a", "b"]))





// class Mobile<T> {
//     constructor(public key: T) { }
// }

// let m1 = new Mobile(12)
// let m2 = new Mobile("abc")
// console.log(m1, m2)


// class Box<T> {
//     items: T[] = []

//     add(item: T) {
//         this.items.push(item)
//     }

//     getAll() {
//         return this.items
//     }
// }

// let numBox = new Box<number>()
// numBox.add(10)
// numBox.add(20)
// // numBox.add("hi")   <- error
// console.log(numBox.getAll())

// let nameBox = new Box<string>()
// nameBox.add("hasan")
// console.log(nameBox.getAll())




// interface User<T> {
//     email: string
//     password: string
//     secretKey: T
// }

// function createUser(u: User<number>) {
//     console.log(u.email, u.secretKey)
// }

// createUser({ email: "test@gmail.com", password: "1234", secretKey: 98765 })

// let u2: User<string> = {
//     email: "ali@gmail.com",
//     password: "abcd",
//     secretKey: "my-secret"
// }
// console.log(u2)


// interface ApiResponse<T> {
//     status: number
//     data: T
// }

// let res1: ApiResponse<string[]> = { status: 200, data: ["ali", "hasan"] }
// let res2: ApiResponse<number> = { status: 200, data: 99 }
// console.log(res1, res2)





// export function sendPayment(val: number) {
//     console.log("payment send", val)
// }

// sendPayment(500)




// type Role = "admin" | "user" | "guest"

// function checkRole(role: Role) {
//     if (role == "admin") {
//         console.log("full access")
//     }
//     else if (role == "user") {
//         console.log("limited access")
//     }
//     else {
//         console.log("read only")
//     }
// }

// checkRole("admin")
// checkRole("guest")



// type Size = "small" | "medium" | "large"

// function orderShirt(size: Size, qty: number) {
//     console.log(`${qty} shirt of size ${size}`)
// }

// orderShirt("medium", 3)




// function foo<T>(a: T, b: T): T {
//     return "string" as T
// }

// let result = foo(1, 2)
// console.log(result, typeof result)    


// let anything: unknown = "hello world"
// let len = (anything as string).length
// console.log(len)


// function findUser(name: string): string | undefined {
//     let list = ["ali", "hasan", "abdullah"]
//     return list.find((n) => n == name)
// }

// console.log(findUser("ali")!.toUpperCase())


// let num = String(56)
// console.log("string -->", num, typeof num)

// let n2 = Number("45")
// console.log("number -->", n2, typeof n2)

// let b1 = Boolean(0)
// let b2 = Boolean("hello")
// console.log(b1, b2)


// function convert(a: string, b: number) {
//     if (typeof a == "string") {
//         console.log(a)

//         let n1 = Number(a)
//         console.log(n1)
//     }
//     if (typeof b == "number") {
//         console.log(b)

//         let str = String(b)
//         console.log(str)
//     }
// }

// convert("45", 89)