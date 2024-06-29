/**
 * 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
-Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
-Tìm những chuỗi trong mảng có chứa giá trị text.
-Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
-Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
 */

let texts = ['asij', 'dq', 'dqw', 'vj', 'bvwi', 'ncwofn'];

// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
let result = texts[0];
for(let i = 1; i < texts.length; i++) {
    if(texts[i].length < result.length) {
        result = texts[i];
    } else if (texts[i].length == result.length) {
        continue;
    }
}
console.log(`The first string which has min length in array: ${result}`);

// Tìm những chuỗi trong mảng có chứa giá trị text.
let input = prompt("Input text");
const result_str = [];
for (let i = 0; i < texts.length; i++) {
    if (texts[i].includes(text)) {
        result_str.push(texts[i]);
    }
}
console.log(`Strings which contain ${text}: ${result_str}`);

// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
let newS = [];
for(let i = 0; i < texts.length; i++) {
    if (texts[i].length <= 2) continue;

    console.log(texts[i]);
    newS.push(texts[i].slice(0,3));
}
console.log(`Result: ${newS}`);


// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
let rs = '';
for(let i = 0; i < texts.length - 1; i++) {
    rs += texts[i] + '-';
}

rs += texts[length - 1];
console.log(`Result: ${rs}`);