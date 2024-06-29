// 6. Nhập vào 1 dãy số s. Mỗi số cách nhau bởi dấu “,”.
// -Tìm số đầu tiên trong dãy lớn hơn 5 và chia hết cho 2.
// -Tìm tất cả số lẻ trong dãy s .
// -Biến đổi dãy s thành dãy x mà các phần tử của dãy x là bình phương các phần tử của dãy s.

let s = prompt("Input s");

s = s.split(",")

for(let i = 0; i < s.length; i++) {
    if(Number(s[i]) > 5 && Number(s[i]) % 2 == 0) {
        console.log(Number(s[i]));
        break;
    }
}

const odds = [];
for(let i = 0; i < s.length; i++) {
    if(Number(s[i]) % 2 != 0) {
        odds.push(Number(s[i]));
    }
}

const x = [];
for(let i = 0; i < s.length; i++) {
    x.push(Number(s[i]) ** 2);
}

console.log(x);

