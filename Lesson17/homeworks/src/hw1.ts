const fullName: string = 'Ed Sheeran';
const age: number = 30;
const isStudent: boolean = false;

function printId(input: string | number) {
    if (typeof input === 'string') {
        console.log(`ID: ${input}`);
    } else if (typeof input === 'number') {
        console.log(`Employ ID: ${input}`);
    }
}

// Type alias
// Alias for Person
type Person = {
    name: string,
    age: number,
};

// Usage
const newPerson: Person = {
    name: "Ed Sheeran",
    age: 33,
}