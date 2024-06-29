// Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.

let n = prompt("Input n")
let is_primer = true;
for (let numb = 2; numb < n; numb++) {
    if (n % numb === 0) {
        is_primer = false;
    }
}

if (is_primer)  console.log(`${n} is a primer!`);
else console.log(`${n} is not a primer!`);