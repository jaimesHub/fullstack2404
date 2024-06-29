// 5. Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.

let arr = [3, 6, 1, 7, 3, 5, 11, 16];
let total = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) total += arr[i];
}

console.log(`Result: ${total}`);