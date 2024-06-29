// Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.

let n = Number(prompt("Input n"));

do {
    n = Number(prompt("Input n again!"));
} while (n > 10 || n < 2);

for (let i = 1; i < 10; i++) {
    console.log(`${i} * ${n} = ${i * n}`);
}
