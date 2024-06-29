// Nhập vào số n (n >= 3). 
// Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n. 
// VD: n = 3

let n = Number(prompt("Input n"));
while (n < 3) {
    n = Number(prompt("Input n"));
}

let result = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        result += "* ";
    }
    result += "\n";
}

console.log(result);