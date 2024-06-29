// Nhập vào chuỗi s (chỉ gồm chữ số) và số l. 
// Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.

let s = prompt("Input a string named s");

while (s.length === 0) {
    s = prompt("Input a string named s again!");
}

let l = Number(prompt("Input a number"));
while (l <= s.length) {
    l = Number(prompt("Input a number again!"));
}

while (s.length < l) {
    s = 0 + s;
}

console.log(s);
