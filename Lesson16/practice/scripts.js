// Destructuring Assignment

// // object destructuring
// const person = {
//     name: 'John',
//     age: 25,
// };

// const { name: personName, age: personAge } = {
//     name: 'John',
//     age: 25,
// };

// // console.log(name, age); // John 25
// console.log(personName, personAge); // John 25

// nested object destructuring
// const person2 = {
//     name: 'John',
//     age: 25,
//     address: {
//         city: 'New York',
//         country: 'USA',
//     },
// };

// const { name, address2, age } = person2;
// console.log(name, address2, age);

// Enhanced Object Literal - Computed Property Names

// // ES5
// const key = 'mykey';
// const obj = {};
// obj[key] = 'myValue';
// console.log(obj);

// // ES6
// const obj2 = {
//     [key]: 'myValue',
// };
// console.log(obj2);

// Enhanced Object Literal - Short Syntax for Object Properties
// const x = 10;
// const y = 11;
// const newObject = Object.create({x, y});
// console.log(newObject, newObject.x, newObject.y); // {} 10 11

// Arrow function
// function add(a, b) {
//     return a + b;
// }

// const add2 = (a, b) => {
//     return a + b;
// }

// const add3 = (a, b) => a + b;

// context this in arrow function

// arrow function with hoisting
// const result = add(1, 2);
// console.log(result);

// // Function expression, hoisting supported
// function add(a, b) {
//     return a + b;
// }

// // Anonymous function, no hoisting supported
// // console.log(sum(1, 2)); // ReferenceError: Cannot access 'sum' before initialization
// const sum = function(a, b) {
//     return a + b;
// }
// console.log(sum(1, 2));

// // Arrow function, no hoisting supported
// // console.log(sum(1, 2)); // ReferenceError: Cannot access 'sum' before initialization
// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(1, 2));

// Block-Scoped Constructs Let and Const

// // var : một biến được khai báo sử dụng var sẽ được gọi là function scoped, có nghĩa là nó sẽ tồn tại trong phạm vi của function được khai báo.
// function myFunc() {  
//     var name = 'Luke'
//     console.log(name); // 'Luke'
// }
  
// myFunc();
  
// console.log(name); // ReferenceError: name is not defined  
// // biến khai báo với var bên trong hàm myFunc, không thể truy cập từ bên ngoài.

// if(true) {  
//     // câu lệnh if, loop ... sẽ không được coi là scope.
//     var name = 'Luke'
// }
  
// console.log(name); // 'Luke'  

// // let
// function myFunc() {  
//     let name = 'Luke'
//     console.log(name); // 'Luke'
// }
  
// myFunc();
  
// console.log(name); // ReferenceError: name is not defined  

// if(true) {  
//     //  các block khác cũng được coi là scope
//     let name = 'Luke'
//   }
  
// console.log(name); // ReferenceError: name is not defined  

// khi ở global scope (tức là không nằm trong một function nào cả), 
// từ khóa var tạo ra thuộc tính mới cho global object (this), còn let thì không
// var x = 'global';
// let y = 'global';
// console.log(this.x); // "global"
// console.log(this.y); // undefined