// Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20. 
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”. 
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer. 
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

const correct = Math.floor(Math.random() * 20) + 1;
console.log(`Answer: ${correct}`);
let retry = 5;

while (retry > 0) {
    let userChoice = Number(prompt(`Choose your number! There are (${retry} times for guessing!)`));

    if (userChoice === correct) {
        console.log("Đoán đúng");
        break;
    } else {
        console.log("Đoán sai");
        retry = retry - 1;

        if (retry === 0) console.log("Bạn đã thua cuộc");
    }
}