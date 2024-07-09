// Array
export const numbers: number[] = [2, 1, 6, 3, 8, 10];
export const sumArray = (numbers: number[]): number => {
    if (numbers.length === 0) {
        return 0;
    }

    return numbers.reduce((previousValue: number, currentValue: number, numbers) => {
        return previousValue + currentValue;
    }, 0);
}
// const result = sumArray(numbers);
// console.log(result);

// Tuple
type Employee = [string, number];
const emp1: Employee = ["James", 28];
// console.log(emp1);