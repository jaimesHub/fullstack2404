// Shopping cart
// Interface
interface Product {
    name: string,
    price: number
};

export const products: Product[] = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 14 },
    { name: "Product 3", price: 12 },
    { name: "Product 4", price: 11 }
];

export function calculateTotal(products: Product[]): number {
    let total = 0;

    products.forEach((product) => {
        total += product.price;
    });

    return total;
}

// Temperature Converter
// class
export class TemperatureConverter {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    toCelsius(celsius: number): number {
        return (celsius * 9/5) + 32;
    }

    toFahrenheit(fahrenheit: number): number {
        return (fahrenheit - 32) * 5/9;
    }
}

// Module & Export
import { add, subtract, multiply, divide } from './mathOperations';

console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));