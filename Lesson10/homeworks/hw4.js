// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
// let growth = [
//     [5,8,9,16],
//     [2,7,1,9],
//     [5,6,8,12],
//     [10,2,1,8],
//     [20,4,9,1]
// ]
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// -Tìm giá trị tăng trưởng theo quý lớn nhất.
// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).

let growth = [
    [5, 8, 9, 16], // growth[0][0]
    [2, 7, 1, 9], // growth[1][0]
    [5, 6, 8, 12], // growth[2][0]
    [10, 2, 1, 8], // growth[3][0]
    [20, 4, 9, 1] // growth[4][0]
];

const avarageGrowthEachYear = [];
let maxGrowth = 0;
let growthLargestQuarter = 0

for (let yearth = 0; yearth < growth.length; yearth++) {
    let total_growth = 0;

    for (let quarterYearth = 0; quarterYearth < growth[yearth].length; quarterYearth++) {
        total_growth += growth[yearth][quarterYearth];
    }

    const tempAverageGrowthYear = total_growth / growth[yearth].length

    if (tempAverageGrowthYear > maxGrowth)  maxGrowth = tempAverageGrowthYear;

    avarageGrowthEachYear.push(tempAverageGrowthYear);

    growthLargestQuarter += growth[yearth][growth[yearth].length - 1];
}

console.log(`avarageGrowthEachYear: ${avarageGrowthEachYear}`);
console.log(`maxGrowth: ${maxGrowth}`);
console.log(`growthLargestQuarter: ${growthLargestQuarter}`);

const averageGrowthByQuarters = [];
let column = 0;
while (column < growth.length - 1) {
    let temp = [];
    for (let row = 0; row < growth.length; row++) {
        temp.push(growth[row][column]);
    }

    console.log(temp);

    let total = 0;
    for (let item = 0; item < temp.length; item++) {
        total += temp[item];
    }

    averageGrowthByQuarters.push(total / temp.length);

    column++;
}

console.log(`averageGrowthByQuarters: ${averageGrowthByQuarters}`);

const result = [];




