// Nhập vào 2 số m, n (m >= 2, n > =2). 
// Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. 
// VD: m = 4, n = 3

let m = Number(prompt("Input width m"));
while (m < 2) {
    m = Number(prompt("Input m again!"));
}

let n = Number(prompt("Input height n"));
while (n < 2) {
    n = Number(prompt("Input n again!"));
}
let result = ""
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        result += "* ";
    }
    result += "\n";
}

console.log(result);