// hw1
function reverseString(str) {
    // Input: "abcdef"
    // Output: "fedcba"

    // let newArr = [...str];
    // return newArr.reverse().join('');

    result = "";
    str.split("").reverse().forEach(element => {
        result += element;
    });
    return result;

}

// console.log(reverseString("abcdef"));

// hw2
function removeDuplicate(arr) {
    // Input: [1, 2, 3, 5, 4, 2, 6, 4]
    // Output: [1, 2, 3, 5, 4, 6]

    const result = [];
    arr.filter(item => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;

    // const result = arr.reduce((tempArr, item) => {
    //     return tempArr.push(item);
    // }, []);

    // return result;
}

// console.log(removeDuplicate([1, 2, 3, 5, 4, 2, 6, 4]))

// hw3
function countNumberInAnArray(arr) {
    // Input: [1, 2, 2, 5, 4, 2, 5, 4]
    // Output: {1: 10, 2: 4, 3: 0}

    const numbersWithCount = {};
    for(const item of arr) {
        if (!numbersWithCount[item]) {
            numbersWithCount[item] = 1;
        } else {
            numbersWithCount[item]++;
        }
    }
    
    let maxCount = 0;
    for (const number in numbersWithCount) {
        // console.log(number, numbersWithCount[number])
        if (numbersWithCount[number] > maxCount) {
            maxCount = number;
        }
    }

    console.log(maxCount)

    return maxCount > 0 ? `The ${maxCount} has the largest quantity with ${numbersWithCount[maxCount]}` : `No result`;
}

// console.log(countNumberInAnArray([5, 2, 2, 5, 5, 2, 5, 4]));