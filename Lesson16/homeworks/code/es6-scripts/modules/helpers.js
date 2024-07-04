export function calAverageInArray(arr) {
    let total = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    // console.log("total: ", total);

    return total / arr.length;
}

function compareNumbers(a, b) {
    return b - a;
}

export function sortDescInArray(arr) {
    return arr.sort(compareNumbers);
}

export function calPositiveNumbers(arr) {
    const positiveNumbers = arr.filter(item => item > 0);

    if (positiveNumbers.length > 0) {
        return positiveNumbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    } else {
        return 0;
    }
}

export function calTotalOddNumbers(arr) {
    const oddNumbers = arr.filter(item => item % 2 !== 0);

    if(oddNumbers.length > 0) {
        return oddNumbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }

    return 0;
}

export function findSecondLargestNumber(arr) {
    if (arr.length <= 1) {
        return "Not found";
    }

    const sortedArr = sortDescInArray(arr);
    // console.log(sortedArr);

    return sortedArr[1];
}

function isPerfectSquare(x)
{
    if (x >= 0) {
        let sr = Math.sqrt(x);
        return ((sr * sr) == x);
    }
    
    return false;
}

export function countSquareNumbers(arr) {
    const squareNumbers = arr.filter(item => isPerfectSquare(item));

    return squareNumbers.length > 0 ? squareNumbers.length : 0;
}