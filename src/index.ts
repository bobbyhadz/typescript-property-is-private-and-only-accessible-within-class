export {};

// Property is private and only accessible within class

// EXAMPLE 1 - Declare the class property as `public`

class Employee {
  // 👇️ public if you need to access from outside the class
  public salary: number = 100;
}

const employee = new Employee();

console.log(employee.salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 2 - Declaring constructor function's parameters

// class Employee {
//   // 👇️ public if you need to access from outside the class
//   constructor(public salary: number) {
//     this.salary = salary;
//   }
// }

// const employee = new Employee(200);

// console.log(employee.salary); // 👉️ 200
