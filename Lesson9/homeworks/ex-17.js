// Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. 
// Hãy nhập vào số n cho đến khi giá trị của n bằng a.

let a = Math.floor(Math.random() * 5) + 5;

console.log(`anwser: ${a}`);

let n = Number(prompt("input n"));

let count = 1;

while (n != a) {
    n = Number(prompt("input n again!"));
    count++;
}

console.log(`After ${count} times, you guess correctly!`);