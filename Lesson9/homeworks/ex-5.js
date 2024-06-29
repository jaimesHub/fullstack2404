// Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.

let a, b, x;

do {
    a = prompt("Input a");
    b = prompt("Input b")
} while(a >= b);

do {
    x = prompt("Input x")
} while(x === 0);

for (let numb = a; numb < b; numb++) {
    if(numb % x === 0) {
        console.log(`The smallest number which divide ${x} is 0 in (${a}, ${b}) is ${numb}`);
        break;
    }
}