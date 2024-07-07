let arr1 = [1, 2, 3, 4, 5, 6, 7];

// arr2 = [2, 4, 6];

// ES5
// let arr2 = [];
// for(let number of arr1) {
//     if (number % 2 === 0) {
//         arr2.push(number);
//     }
// }
// console.log(arr2);

// ES6
let arr2 = arr1.filter(function(value, index, arr1) {
    // return true;
    // return value % 2 === 0;
    // return value > 5;
});
let arr3 = arr1.filter((value) => value > 5);

console.log(arr2);