// const score = 7.9

// if (score >= 8.0) {
//     console.log("Good student");
// }

// if (score <=7.9) {
//     console.log("Not good enough");
// }

// if (score >= 8.0) {
//     console.log("Good");
// } else {
//     console.log("Not good enough");
// }

// const score = 8.0;

// if (score >= 8.0) {
//     console.log("Giỏi");
// } else if (score < 8.0 && score >= 6.5) {
//     console.log("Khá");
// } else if (score < 6.5 && score >= 4) {
//     console.log("TB");
// } else {
//     console.log("Yếu");
// }

// const score = prompt("Input score: ")

// let hocluc = score >= 8.0 ? "Gioi" : "Chua gioi"
// console.log(hocluc);

// for
// // Chia het cho 9 trong [-100, 100]
// for (let i = -100; i <= 100; i++) {
//     if (i % 9 == 0) console.log(i);
// }

// // sum so chan tu -10 den 50
// let result = 0;
// for (let i = -10; i <= 50; i++) {
//     if (i % 2 == 0) result += i;
// }
// console.log(`result: ${result}`);

// let i = 6;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i <= 5)

// for(let i = 0; i <= 5; i++) {
//     if (i == 2) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

/**
1. In ra dãy số từ 1 đến 500.
2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
4. Nhập vào số n. Tính giai thừa của số n.
5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
 */

// // 1.
// for (let i = 1; i <= 500; i++) {
//     console.log(i);
// }

// // 2.
// for (let i = 1; i <= 300; i++) {
//     if (i %2 == 0 && i % 3 == 0) {
//         console.log(i);
//     }
// }

// // 4.
// let result = 1;
// let n = prompt("Nhap n: ");
// while (n > 0) {
//     result = result * n;
//     n = n - 1;
// }
// console.log(`result: ${result}`);

// // 5.
// let a, b;
// while(true) {
//     a = prompt("Nhap a: ");
//     b = prompt("Nhap b: ");

//     if (a >= b) {
//         console.log("a not is less than b. input again.");
//     } else {
//         break;
//     }
// }

// let x = prompt("Nhap x: ");
// for (let i = a; i <= b; i++) {
//     // console.log(i);
//     if (i % x == 0) {
//         console.log(i);
//         break;
//     }
// }

// // 8.
// let n = prompt("Nhap n = ");

// let is_primer = true
// for (let i = 2; i < n; i++) {
//     if(n % i == 0)  is_primer = false; 
// }

// if (is_primer == true) console.log(`${n} is a primer`);
// else console.log(`${n} is not a primer`);