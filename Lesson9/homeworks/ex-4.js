// Nhập vào số n. Tính giai thừa của số n.
let n = prompt("Input n = ");
let result = 1;
while (n > 0) {
    result = result * n;
    n = n - 1;
}

console.log(`result = ${result}`);