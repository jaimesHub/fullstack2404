let arr1 = [1, 2, 3];

// arr2 = [2, 4, 6];

// // ES5
// let arr2 = [];
// for (let element of arr1) {
//     arr2.push(element * 2);
// }

// console.log(arr2);

// ES6
// syntax: array.map(callback)
let arr2 = arr1.map(function(value, index, arr1) {
    console.log(`value dang duoc duyet den: ${value}`)
    console.log(`index dang duoc duyet den: ${index}`)
    console.log(`gia tri arr: ${arr1}`);
    console.log(`-----------`);

    // return 1;

    // return value;

    return value * 2;
});

// let arr3 = arr1.map((v) => v * 3);

console.log(arr2);