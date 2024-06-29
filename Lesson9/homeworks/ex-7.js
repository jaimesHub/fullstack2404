// Nhập vào số n. Hãy in ra số ước của n.

let n = prompt("Input n");
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(`divisor = ${i}`);
    }
}