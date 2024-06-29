// const number = 20;
// const PI = 3.14;

// // Local storage
// // Lưu trữ và cập nhật dữ liệu
// // C1
// localStorage.setItem('number', number);
// // C2
// localStorage.PI = PI;

///////////////

// const student = {
//     name: 'Hung',
//     age: 20,
//     address: 'Ha Noi'
// }

// // Không hỗ trợ lưu trữ các dữ liệu kiểu tham chiếu
// // localStorage.setItem('student', student);

// // JSON.stringify(data) ==> chuyển đổi kiểu dữ liệu ban đầu -> thành kiểu dữ liệu string
// localStorage.setItem('student', JSON.stringify(student));

// // Lấy dữ liệu từ localStorage
// const studentStorage = localStorage.getItem('student');
// console.log(studentStorage);

// const parsedStudent = JSON.parse(studentStorage);
// console.log(parsedStudent.name);

// // Xoá dữ liệu từ localStorage
// // localStorage.removeItem('PI');
// // localStorage.clear(); // delete all

// Cookie

// create cookie
// document.cookie = 'username=Jaimes; max-age=60';
// document.cookie = 'course=Javascript;max-age=9000';

// let data = document.cookie;

// function getValueCookie(name) {
//     let data = document.cookie;
//     data = data.split(';');
    
//     for (let element of data) {
//         const name_value = element.trim().split('=');
//         console.log(name_value);
//         if(name_value[0] === name) {
//             return name_value[1];
//         }
//     }
// }

// console.log(getValueCookie('course'));