// Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.

let m = Number(prompt("Input m"));
while (m <= 0) {
    m = prompt("Input m again!");
}

let n = Number(prompt("Input n"));
while (m <= 0) {
    n = prompt("Input n again!");
}

let smaller = Math.min(m, n);
// console.log(smaller);
let gcd = 1;
for (let i = 1; i <= smaller; i++) {
    if (m % i === 0 && n % i === 0) {
        gcd = i;
    }
}
console.log(`Greatest Common Divisor: ${gcd}`);

let lcm = (m * n) / gcd;
console.log(`Least Common Mutiple: ${lcm}`);