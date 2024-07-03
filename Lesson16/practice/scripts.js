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

// // spread operator
// const arr = [4, 5, 6]
// const arr2 = [1, 2, 3]

// // use spread for getting a list of number.
// const max = Math.max(...arr) // 6

// // copy all elements from arr to another array and add 7 to tail
// let arrCloned = [...arr, 7] // [4, 5, 6, 7]

// // copy all elements from arr to another array and add 3 to head
// arrCloned = [3, ...arr] // [3, 4, 5, 6]

// // concat 2 arrays and add a number in between
// const concatedArray = [...arr, 0, ...arr2] // [4, 5, 6, 0, 1, 2, 3]

// const obj = {name: "T3H"}

// // copy all fields in object to another object and add field
// const obj2 = {...obj, address: "Hanoi"} // {name: "T3H", address: "Hanoi"}

// // copy all fields in object to another object and overwrite field
// const obj3 = {...obj, name: "Code Intensive"} // {name: "Code Intensive"}
// const obj4 = {name: "Code Intensive", ...obj} // {name: "T3H"}

// // rest operator
// function sum(...args) {
//     let total = 0
//       for (let i = 0; i < args.length; i++) {
//           total += args[i]
//     }
//     return total;
// }
// sum(1, 2, 3, 4, 5) // 15

// // Wrong: multiple rest operator
// // const sum = (...first, ...second) => {}

// // Wrong: rest operator cannot be the first params
// // const sum2 = (...first, second, third) => {}

// // Correct
// // const sum3 = (first, second, ...third) => {}

// // Destructuring
// // const person = {name: "T3H", age: 7}
// // const {name, age} = person;

// // const coordinate = [0, 1, 1];
// // const [x, y, z] = coordinate;

// // Assignment separated from declaration
// let x, y
// [x, y] = [1, 2]

// // Default value
// // const [a=2, b=3] = [1] // a = 1, b = 3

// // Ignore some value
// // const [a, ,b] = [1, 2, 3] // a = 1, b = 3

// // Use with rest
// const [a, ...b] = [1, 2, 3] // a = 1, b = [2, 3]

// // Nested object
// const person = {
// 	name: "T3H",
// 	address: {city: "Hanoi", street: "Nguyen Chi Thanh"}
// }
// const {name, address: {city, street}} = person 
// // name = "T3H", city = "Hanoi", street = "Nguyen Chi Thanh"

// // Destrucring on params
// const sayHello = ({name}) => {
// 	console.log(`Hello, my name is ${name}`);
// }
// sayHello({name: "T3H", age: 7})

// function mystery(...params) {
// 	return params
// }
// let a = mystery(1, 23, 4);
// console.log(a)

// console.log([...[..."..."]].length)

// const obj = {
// 	name: "T3h"
// }
// const sayHello = (x) => {
// 	let {name} = x
//     name = "Code Intensive"
//     return x;
// }
// console.log(sayHello(obj))

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map(item => {
//     if (item % 2 === 0) {
//         return item;
//     }

// 	return item * 2;
// })
// console.log(arr, newArr);

// const arr = [1, 2, 3, 4, 5]
// const total = arr.filter(item => item % 2 === 0).reduce((value, item) => value + item , 10)
// console.log(total)