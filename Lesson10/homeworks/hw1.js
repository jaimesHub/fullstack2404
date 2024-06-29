/**
 * 1. Khai báo 1 mảng gồm các số bất kỳ. 
-Tính tích của các phần tử trong mảng đó.
-Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
-Tìm số lớn nhất mà chia hết cho 3 trong mảng.
-Tính giá trị trung bình của mảng.
-Lọc ra các số nguyên tố trong mảng.
-Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
-Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
-Nhập vào số n cho đến khi n là 1 số trong mảng s.
-Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. (https://www.geeksforgeeks.org/bubble-sort/)
 */

const arr = [3, 2, 6, 1, 4, 7, 3, 5, 9, 10];

// Tính tích của các phần tử trong mảng đó.
let multiple_result = 1;
for(let i = 0; i < arr.length; i++) {
    multiple_result = multiple_result * arr[i];
}
console.log(`The product of elements in array: ${multiple_result}`);

// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
let minElement = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] < minElement && arr[i] % 2 == 0) {
        minElement = arr[i];
        break;
    }
}
console.log(`The min value which divide 2 remains 0 is ${minElement}`);

// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
let maxElement = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] > maxElement && arr[i] % 3 == 0) {
        maxElement = arr[i];
    }
}
console.log(`The max value which divide 3 remains 0 is ${maxElement}`);

// Tính giá trị trung bình của mảng.
let total = 0;
for(let i = 0; i < arr.length; i++) {
    total += arr[i];
}
console.log(`The avarage of elements' values in array is: ${total / arr.length}`);

// Lọc ra các số nguyên tố trong mảng.
let result = []
for(let i = 0; i < arr.length; i++) {
    let is_prime = true;
    for(let y = 2; y < arr[i]; i++) {
        if(arr[i] % y == 0) {
            is_prime = false;
        } else {
            result.push(arr[i]);
        }
    }
}
console.log(`The numbers which are prime number in array is: ${result}`);

// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
let doesArrayContain = false;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 10) doesArrayContain = true;
}
if(doesArrayContain == true) {
    console.log(`This array includes number which is less than 10!`);
} else {
    console.log(`This array does not include number which is less than 10!`);
}

// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
let areAllGreaterThan20 = true;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 20) {
        doesArrayContain = false;
        break;
    }
}
if(areAllGreaterThan20 == true) {
    console.log(`This array includes all of numbers which are greater than 20!`);
} else {
    console.log(`This array does include numbers which is less than 20!`);
}

// Nhập vào số n cho đến khi n là 1 số trong mảng s.
let input = Number(prompt("Input n"));
while(!arr.includes(input)) {
    input = Number(prompt("Input n again till arr include it!"));
}
console.log(`DONE!`);

// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. 
// (https://www.geeksforgeeks.org/bubble-sort/)
let temp;
let arr2 = arr;
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length - 1; j++) {
        if (arr2[j] > arr2[j+1]) {
            temp = arr2[j];
            arr2[j] = arr2[j+1];
            arr2[j+1] = temp;
        }
    }
}

console.log(arr2);