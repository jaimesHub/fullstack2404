// Option chaining
type Customer = {
    name: string,
    address: {
        city: string,
        street?: string,
    },
};

const customer: Customer = {
    name: "James",
    address: {
        city: "Hanoi",
    },
}

console.log(customer.address?.street);

// Nullish Coalescing
// type User = {
//     name: string,
// }

// function getUserName(user: User) {
//     return user.name ?? "Guest";
// }