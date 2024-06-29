// Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. 
// Hãy tính chỉ số BMI và đưa ra kết quả: 
// Nếu BMI < 18.5 → in ra “Nhẹ cân”. 
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
// Nếu 23 <= BMI < 25 → in ra “Thừa cân” 
// Nếu BMI >= 25 → in ra “Béo phì”

let w = Number(prompt("Input Weight"))

while (w < 0) {
    w = Number(prompt("Input Weight"))
}

let h = Number(prompt("Input Height"))

while (h < 0) {
    h = Number(prompt("Input Height"))
}

let bmi = w / (h ** 2);

if (bmi >= 25) {
    console.log("Béo phì");
} else if (bmi < 25 && bmi >= 23) {
    console.log("Thừa cân");
} else if (bmi < 23 && bmi >= 18.5) {
    console.log("Bình thường");
} else {
    console.log("Nhẹ cân");
}