// Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)

let n = Number(prompt("Input n"));
let result = 0;

while (n > 0) {
    result = result + 1 / (n * (n + 1));
    n -= 1;
}
console.log(`Result: ${result}`);