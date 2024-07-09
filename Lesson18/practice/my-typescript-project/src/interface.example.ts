interface User {
    name: string;
    readonly age: number;
    rank?: string; // Optional property
}

const user1: User = { name: 'John', age: 20, rank: 'A' };
// console.log(user1);
user1.name = 'John Doe';
// console.log(user1);
// student1.age = 21; // Error: Cannot assign to 'age' because it is a read-only property

const user2: User = { name: 'Jane', age: 21 };
// console.log(user2);

// Inheritance
// interface Student extends User {
//     school: string;
//     classroom: string;
// }

// const student1: Student = { 
//     name: 'Alice', 
//     age: 22, 
//     school: 'FPT University',
//     classroom: 'A1' 
// };
// console.log(student1);
// student1.age = 30;  // Error: Cannot assign to 'age' because it is a read-only property
// console.log(student1);

// type vs interface
// type k có tính kế thừa, interface có tính kế thừa
type Customer = {
    name: string;
    age: number;
};

// class 
class Person {
    name: string;
    age: number;

    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name}`);
    }

    sayBye(): void {    
        console.log(`Goodbye, ${this.name}`);
    }

    sayHelloTo(name: string): void {
        console.log(`${this.name} says hello to ${name}`);
    }
}

// const person1: Person = new Person('John', 20);
// console.log(person1);
// person1.greet();
// person1.sayBye();
// person1.sayHelloTo('Alice');

// class inheritance
class Employee extends Person {
    employeeId: string; // access modifier: public by default

    constructor(initName: string, initAge: number, initEmployeeId: string) {
        super(initName, initAge);
        this.employeeId = initEmployeeId;
    }

    // override
    greet(): void {
        console.log(`Hello, my name is ${this.name} and my employee ID is ${this.employeeId}`);
    
    }
}

const employee1: Employee = new Employee('John', 20, 'E001');
// employee1.greet();

// Using Interface with class
interface IPerson {
    name: string;
    age: number;
    run(): void;
    sleep(): void;
}

class Student implements IPerson {
    name: string;
    age: number;

    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }

    run(): void {
        console.log(`${this.name} is running`);
    }

    sleep(): void {
        console.log(`${this.name} is sleeping`);
    }
}

