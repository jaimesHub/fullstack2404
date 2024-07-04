// homework 5
/**
 * Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0]. 
 * Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên.
 */

function getDuplicatedElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

// console.log(getDuplicatedElements([1, 2, 4, 5, 6], [1, 6, 8, 9, 0]))

// homework 6
/**
 * Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
 */

function mapIncreasedElements(arr) {
    return arr.map(element => element + 5);
}

// console.log(mapIncreasedElements([1, 54, 6, 7]));

// homework 7
/**
 * Cho array sau: m = [1, 2, 4, 5, 6, 7]; n = [3, 5, 675, 8, 96]. 
 * Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8, 10, 96, 7.
 */
function removeSelectedElementsInArrays(targetArr1, targetArr2, selectedArr) {
    const tempArr1 = [...targetArr1];
    const tempArr2 = [...targetArr2];

    const updatedArr1 = tempArr1.filter(item => !selectedArr.includes(item));
    const updatedArr2 = tempArr2.filter(item => !selectedArr.includes(item));

    return {
        original1: targetArr1,
        original2: targetArr2,
        selectedArr,
        targetArr1: updatedArr1,
        targetArr2: updatedArr2,
    }
}

// const m = [1, 2, 4, 5, 6, 7];
// const n = [3, 5, 675, 8, 96];
// const selectedArr = [1, 8, 10, 96, 7];

// console.log(removeSelectedElementsInArrays(m, n, selectedArr));

// homework 8
/**
    Cho array 1 như sau: 
    players = [
        { id: 11, name: 'Messi', age: 33 },
        { id: 12, name: 'Ronaldo', age: 34 },      
        { id: 13, name: 'Young', age: 35 },        
        { id: 14, name: 'Mane', age: 21 },          
        { id: 15, name: 'Salah', age: 24 },
    ]
    Hãy chuyển đổi nó về array có dạng sau: 
    playersModified = { 
        11: {id: 11, name: "Messi", age: 33},
        12: {id: 12, name: "Ronaldo", age: 34},
        13: {id: 13, name: "Young", age: 35},
        14: {id: 14, name: "Mane", age: 21},
        15: {id: 15, name: "Salah", age: 24}
    }.
 */

function modifyInfoPlayers(players) {
    return players.map(player => {
        const id = player.id
        return {
            [id]: player
        }
    })
}
// const players = [
//     { id: 11, name: 'Messi', age: 33 },
//     { id: 12, name: 'Ronaldo', age: 34 },      
//     { id: 13, name: 'Young', age: 35 },        
//     { id: 14, name: 'Mane', age: 21 },          
//     { id: 15, name: 'Salah', age: 24 },
// ]
// console.log(modifyInfoPlayers(players));

/**
 *Các bài sau sẽ viết trong filee helpers.js dưới dạng module và import trong file main.js để sử dụng
    Bài 9: Cho mảng A = [1,5,3,8,10]
    +Viết chương trình JS tính giá trị trung bình của mảng.
    +Viêt chương trình JS để sắp xếp 1 mảng theo thứ tự giảm dần
        Input: A = [1,5,3,8,10]
        Output: A = [10, 8, 5, 3, 1]
    +Tính tổng các số dương trong mảng
    +Tính tổng các số lẻ trong mảng
    +Tìm số lớn thứ 2 trong mảng
        Output: 8
    +Đếm các số chính phương có trong mảng
 */

import { 
    calAverageInArray, 
    sortDescInArray, 
    calPositiveNumbers,
    calTotalOddNumbers,
    findSecondLargestNumber,
    countSquareNumbers
} from "./modules/helpers.js";

// console.log(calAverageInArray([1, 5, 3, 8, 10]));

// console.log(sortDescInArray([1, 5, 3, 8, 10]));

// console.log(calPositiveNumbers([1, 5, 3, -8, 10]));

// console.log(calTotalOddNumbers([1, 5, 3, 8, 10]));

// console.log(findSecondLargestNumber([1, 5, 3, 8, 10]));

// console.log(countSquareNumbers([2, 5, 16, 9, 10]));