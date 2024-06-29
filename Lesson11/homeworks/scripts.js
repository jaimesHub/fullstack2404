// import { users } from "./data";

// 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). 
// Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 
// và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.

function homework1(a, b, c) {
    const result = [];
    if (a == 0) {
        if (b = 0) {
            return result;
        }

        return result.push(-1 * c / b);
    }

    const delta = b ** 2 - 4 * a * c;

    if (delta > 0) {
        const x = ((-1 * b) + Math.sqrt(delta)) / (2 * a);
        const y = ((-1 * b) - Math.sqrt(delta)) / (2 * a);
        result.push(x);
        result.push(y);
    }

    if (delta == 0) {
        result.push(-1 * b / (2 * a));
    }

    return result;
}

// 2. Khai báo 1 function với đầu vào là 3 số a, b, c. 
// Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. 
// Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.
function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    }
    return false;
}

// 3. Khai báo 1 function với đầu vào là day, month, year. 
// Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
// https://www.freecodecamp.org/news/how-to-validate-a-date-in-javascript/
function isDateValid(day, month, year) {
    const dateInput = day + "/" + month + "/" + year;
    const dateObj = new Date(dateInput);
    return !isNaN(dateObj);

    // // DD/MM/YYYY
    // console.log(isDateValid("15", "05", "2019")); // false

    // // MM/DD/YYYY
    // console.log(isDateValid("05", "15", "2019")); // true

    // // YYYY/MM/DD
    // console.log(isDateValid("2019", "05", "15")); // true
}

// 4. Cho bộ dữ liệu về users như sau: data.js
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// -Đếm số lượng user có age > 50.
// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }

import {users} from "./data.js";
// console.log(users);
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
function findUserById(n) {
    for(let user of users) {
        if (user.id === n) {
            return user;
        }
    }
    return "Not found!";
}
// const user = findUserById(10);
// console.log(user);

// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
function findUserByName(keyword) {
    for(let user of users) {
        const fullName = user.first_name + " " + user.last_name;
        if (fullName.toLowerCase().includes(keyword.toLowerCase())) {
            return user.email;
        }
    }
    return "Not found!";
}
// const user = findUserByName("ne o'");
// console.log(user);

// -Đếm số lượng user có age > 50.
function countUserLargeThan50() {
    let quantity = 0;
    for (let user of users) {
        if (user.age > 50)  quantity++;
    }
    return quantity
}
// console.log(countUserLargeThan50());

// -Đếm số lượng user đã kết hôn và chưa kết hôn.
function calculateMarriedAndNotMarriedUsers() {
    let marriedUser = 0;
    for (let user of users) {
        if(user.is_married) marriedUser++;
    }
    const singleUser = users.length - marriedUser;

    return {
        marriedUsers: marriedUser,
        singleUsers: singleUser
    }
}

// console.log(calculateMarriedAndNotMarriedUsers());

// -Đếm số lượng user theo từng ngành nghề tương ứng.
function countUserByCareer() {
    const result = {};

    for(let user of users) {
        if(!result.hasOwnProperty(user.job)) {
            result[user.job] = 1;
        } else {
            result[user.job]++;
        }
    }
    
    return result;
}
// console.log(countUserByCareer());;

// 5. Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.
// ```jsx

// const storage = {
//     name: 'Fake Storage',
//     address: 'HN',
//     owner: 'Dung Tien',
//     items: [
//         {
//             id: 1, name: 'Product 1', category: 'Furniture', pricce: 20
//         },
//         {
//             id: 2, name: 'Product 2', category: 'Device', pricce: 110
//         },
//         {
//             id: 3, name: 'Product 3', category: 'Cloth', pricce: 2
//         },
//     ]
// }

// Xây dựng chương trình tương tác với kho hàng. 
// Nhập vào action là yêu cầu ứng với các thao tác: 
// Action 1 -> Ý nghĩa: Sửa thông tin kho hàng 
// Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho 
// Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng 
// Action 4 -> Ý nghĩa: Xóa mặt hàng 
// -Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác. 
// -Mô tả chi tiết 
//      +action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới. 
//      +action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại. 
//      +action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm. Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng. 
//      +action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.

function showMenu() {
    console.log(`
        Action 1: Sửa thông tin kho hàng (Select 1)
        Action 2: Tạo mặt hàng trong kho (Select 2)
        Action 3: Tìm kiếm mặt hàng (Select 3)
        Action 4: Xóa mặt hàng (Select 4)
        Exit: Select 0
    `);
}

function selectAction() {
    return Number(prompt("Choose action"));
}

function showStoreInformation() {
    const storage = {
        name: 'Fake Storage',
        address: 'HN',
        owner: 'James',
        items: [
            {
                id: 1, name: 'Product 1', category: 'Furniture', price: 20
            },
            {
                id: 2, name: 'Product 2', category: 'Device', price: 110
            },
            {
                id: 3, name: 'Product 3', category: 'Cloth', price: 2
            },
        ]
    }
    return storage;
}

function updateStoreInformation(old, newInfo) {
    for(let key in old) {
        old[key] = newInfo[key];
    }

    console.log(newInfo);
}

function createProduct(storage, item) {
    storage.items.push(item);
}

function searchItemById(storage, itemId) {
    const items = storage.items;
    for(let item of items) {
        if(item.id == itemId) {
            return item;
        }
    }
    return undefined;
}

function findProduct(storage, name) {
    const result = []
    let items = storage.items;
    for(let item of items) {
        if (item.name.toLowerCase().includes(name.toLowerCase())) {
            result.push(item);
        }
    }
    return result;
}

function deleteProduct(storage, itemId) {
    const items = storage.items;
    if (!searchItemById(storage, itemId)) {
        console.log("Not found!");
        return;
    }

    for(let i = 0; i < items.length; i++) {
        if (items[i].id == itemId) {
            items.splice(i, 1);
        }
    }
}

function run() {
    console.log("Welcome to storage management program");
    const storage = showStoreInformation();
    console.log(storage);
    showMenu();
    while(true) {
        let action = selectAction();
        if (action == 0) {
            console.log("Goodbye!");
            return;
        }

        if(action == 1) {
            console.log("Sửa thông tin kho hàng");
            console.log("Nhập thông tin");
            const newStorage = {}
            newStorage["name"] = prompt("Nhập tên cửa hàng");
            newStorage["address"] = prompt("Nhập địa chỉ");
            newStorage["owner"] = prompt("Nhập chủ sở hữu");
            newStorage["items"] = [];
            const quantity = Number(prompt("Nhập số lượng sản phẩm cần nhập"));
            for (let i = 0; i < quantity; i++) {
                const item = {};
                item.id = i;
                item.name = prompt("Nhập tên sản phẩm");
                item.category = prompt("Nhập loại");
                item.price = Number(prompt("Nhập giá"));
                newStorage.items.push(item);
            }
            
            updateStoreInformation(storage, newStorage);

            console.log("Update done!");
            
            showMenu();
        }

        if (action == 2) {
            console.log("Tạo sản phẩm mới");
            console.log("Nhập thông tin");
            const newItem = {}
            let id = Number(prompt("Nhâp mã"));
            while(searchItemById(storage, id)) {
                id = Number(prompt("Mã đã tồn tại. Nhập lại mã khác"));
            }
            newItem.id = id;
            newItem.name = prompt("Nhập tên sản phẩm");
            newItem.category = prompt("Nhập loại sản phẩm");
            newItem.price = Number(prompt("Nhập giá"));
            
            createProduct(storage, newItem);
            console.log("Tạo xong!");
            
            showMenu();
        }

        if (action == 3) {
            const name = prompt("Nhập tên sản phẩm cần tìm kiếm");
            const foundItems = findProduct(storage, name);

            if(foundItems.length != 0) {
                console.log(foundItems);
            }

            else console.log("Not found!");
            
            showMenu();
        }

        if (action == 4) {
            const id = Number(prompt("Nhập mã cần xoá"));
            deleteProduct(storage, id);
            console.log(storage);
            
            showMenu();
        }
    }
}

run()