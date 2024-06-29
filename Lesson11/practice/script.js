// const trainingCenter = {
//     name: 'T3H',
//     address: 'Ho Tung Mau',
//     courses: [
//         'ReactJS', 
//         'NodeJS', 
//         '.Net', 
//         'Java', 
//         'DevOps'
//     ],
//     1: "One"
// };

// console.log(trainingCenter);

// // Truy xuất & sử dụng thuộc tính (get)

// // // Cách 1
// // console.log(trainingCenter.name);
// // console.log(trainingCenter.courses);

// // // Cách 2
// // let variable = 'address';
// // console.log(trainingCenter.variable); // undefined
// // console.log(trainingCenter[variable]);

// // // console.log(trainingCenter.1); // error
// // console.log(trainingCenter['1']);

// // console.log(trainingCenter.courses[1]); // nodejs

// // Thêm / Thay đổi key-value
// trainingCenter.address = "Ha Noi";
// console.log(trainingCenter);
// trainingCenter['1'] = "Number 1";
// console.log(trainingCenter);

// // Xoá key
// delete trainingCenter['1'];
// console.log(trainingCenter);

// // Duyệt key
// for (let key in trainingCenter) {
//     console.log(key);
//     console.log(trainingCenter[key]);
//     console.log("-----------------");
// }

// // Methods
// console.log(Object.keys(trainingCenter));
// console.log(Object.values(trainingCenter));

// // Reference object vs Primitive elements
// // https://javascript.info/object-copy

// const student1 = {
//     name: "Student1",
//     age: 18
// };

// const student2 = {};

// for (let key in student1) {
//     student2[key] = student1[key];
// }

// console.log(student1 === student2);

// Practice 1

// // 1. Khai báo 1 đối tượng để mô tả bản thân bao gồm: tên, tuổi, địa chỉ, giới tính, sở thích (nhiều sở thích), chiều cao, cân nặng, tình trạng hôn nhân, số điện thoại.
// let mySelf = {
//     name: "abc",
//     age: 18,
//     address: "Hanoi",
//     sex: "MALE",
//     hobbies: ["Football", "Game"],
//     height: 180,
//     weight: 80,
//     isMarried: false,
//     phoneNumber: "0987654321"
// }
// // 2. Khai báo 1 đối tượng là bạn trai/bạn gái của bạn: tên, tuổi, sự tốt bụng (1 - 10), nhà giàu (boolean).
// let myGirlFriend = {
//     name: "xyz",
//     age: 30,
//     kindLevel: 10,
//     isRich: true
// }
// // 3. Viết chương trình kiểm tra nếu tuổi của bạn và bạn gái (trai) đều lớn hơn 20, in ra màn hình “Tầm này cưới được rồi”. Ngược lại, in ra “Chờ thêm chút nữa”

// if (mySelf.age > 20 && myGirlFriend > 20) {
//     console.log("Tầm này cưới được rồi");
// } else {
//     console.log("Chờ thêm chút nữa");
// }

// Practice 2
// function logger(name) {
//     console.log('Hello world, ' + name);
// }

// logger('James');

// Practice 3
// 2. Khai báo 1 function nhận đầu vào là 2 số a, b. 
// Đầu ra là kết quả của phép tính (a + b)^2 .
function calucalte(a, b) {
    return (a + b) ** 2;
}

// Practice 4
// 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. 
// Đầu ra là giá trị số vừa nhập.
function input() {
    while(true) {
        let a = Number(prompt("Input n"));

        if (a > 0) {
            console.log(a);
            break;
        }
    }
}

input();



