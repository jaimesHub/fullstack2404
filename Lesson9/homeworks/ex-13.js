// Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3

let n = Number(prompt("Input n"));
while (n < 2) {
    n = Number(prompt("Input n again!"));
}
let result = ""
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        result += "* ";
    }
    result += "\n";
}

console.log(result);