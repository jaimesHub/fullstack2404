// string
let username: string = 'James';
console.log(username);

// number
let age: number = 18;
console.log(age);

// object
let student: { name: string, gender: string, age: number } = {
    name: 'Student 1',
    gender: 'girl',
    age: 18,
}
console.log(student);

// any
let randomValue: any = 10;
console.log(randomValue);
randomValue = false;
console.log(randomValue);
randomValue = "Hello world";
console.log(randomValue);

// boolean
let isStudent: boolean = true;

// array
// way 1
let hobbies: string[] = ['reading', 'gaming'];
let scores: number[] = [96, 54, 12];
// way 2
let favorites: Array<string> = ['reading', 'gaming'];
let numbers: Array<number> = [34, 123, 432];

// void
function logMessage(message: string): void {
    console.log(message);
}

// null and undefined
let u: undefined = undefined;
let n: null = null;

// tuple
let product: [number, string] = [1, 'laptop'];
let person: [string, number, boolean] = ['John', 30, false];
let data: [number, number, string[]] = [1, 2, ["apple", "banana", "cheery"]];
let profile: [string, number, boolean?] = ["Alice", 28];
function getData(): [string, number] {
    return ["Hello", 5];
}

// enum
enum Direction {
    North,
    South,
    East,
    West
}

let dir: Direction = Direction.North // value: 0

enum Status {
    Success = 1,
    Pending = 2,
    Error = 3
}

let stat: Status = Status.Success // value: 1

enum Color {
    Red = 4,
    Green,
    Blue,
}

let color: Color = Color.Green // value: 5

enum Days {
    Monday = 1,
    Tuesday = 3,
    Wednesday = 5,
    Thursday = 7,
    Friday = 9
}

let day: Days = Days.Thursday // value: 7

enum Months {
    January = 1,
    February = January * 2,
    March = February + 1
}

let month: Months = Months.February // value: 2

enum Colors {
    Blue,
    Red = 'red',
    Green = 'green', // cần phải gán giá trị nếu phía trước nó là 1 giá trị khác số
}

// unknown 
function isString(value: unknown): boolean {
    return typeof value === 'string';
}

// let str1: unknown = 'Hello';
// let str2: unknown = 123;

let userInput: unknown = "Hello Typescript";
// convert type from unknown to string
let str2: string = userInput as string;
// str2.toUpperCase(); // HELLO TYPESCRIPT

// convert type from unknown to number
let num2: number = userInput as number; // Error: Cannot convert unknown to number directly
// never
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while(true) {
        console.log("Hello");
    }
}

// function never call its callback
function fail(message: string, callback: () => never) {
    throw new Error(message);
}

// Union Type
// val: string | number

// Intersection Types
interface Car {
    brand: string,
    wheels: number,
}

interface Electric {
    range: number,
    batteryCapacity: string;
}

type ElectricCar = Car & Electric;
let teslaModels: ElectricCar = {
    brand: 'Tesla',
    wheels: 4,
    range: 400,
    batteryCapacity: "100 kWh",
}

// Literal Types
let statuss: "active" | "inactive";
statuss = "active"; // ok
statuss = "inactive" // ok
// statuss = "delete" // not ok

// Type Aliases
type userID = number;
type userName = string;
let userId: userID = 1;
let usernamee: userName = "Jane";

// Type Assertions
let someValue: unknown = "Hello World";
let strLength: number = (someValue as string).length;

// Nullable Types
let phoneNumber: number | null;
phoneNumber = 123456789; // ok
phoneNumber = null; // ok

// Optional Chaining (?.)
const studentt: any = {
    name: 'james',
    age: 20,
    girlFriend: {
        name: 'Student 2'
    }
}

// let nameGirlFriend = studentt.girlFriend.name; // TypeError
let nameGirlFriend = studentt.girlFriend?.name; // Solution

// Nullish Coalescing (??)
let defaultName = "Guest";
let inputName = null; // or undefined
let userName2 = inputName ?? defaultName; // Guest


