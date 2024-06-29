// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).(https://www.geeksforgeeks.org/merge-sort/?ref=lbp)


let d1 = prompt("Input d1").split(",");
// console.log(d1);
let d2 = prompt("Input d2").split(",");
// console.log(d2);

// Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
let areAllItemsInD2 = true;
for(let i = 0; i < d1.length; i++) {
    if(!d2.includes(d1[i])) {
        areAllItemsInD2 = false;
        break;
    }
}

if (areAllItemsInD2 == true) console.log(`All items in d1 are in d2`);
else console.log(`Some items in d1 are not in d2`);

// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
let isAnyRemain = false;

let total = 0;
for (let i = 0; i < d1.length; i++) {
    total += Number(d1[i]);
}

for (let i = 0; i < d2.length; i++) {
    if (total == 0) break
    if(Number(d2[i]) % total == 0) {
        isAnyRemain = true;
        break;
    }
}

if (isAnyRemain) console.log(`There is at least one item divide d1's total with remainer = 0`);
else console.log(`There is NO at least one item divide d1's total with remainer = 0`);

// Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
let res = [];
for (let i = 0; i < d2.length; i++) {
    if(d2[i] % 2 == 0 && !res.includes(d2[i])) res.push(d2[i]);
}

for (let i = 0; i < d1.length; i++) {
    if(d1[i] % 2 == 0 && !res.includes(d1[i])) res.push(d1[i]);
}
console.log(`Result: ${res}`);

// Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. 
// Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 
// (Sử dụng core của thuật toán Merge Sort).(https://www.geeksforgeeks.org/merge-sort/?ref=lbp)
