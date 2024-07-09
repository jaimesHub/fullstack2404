// Product management

// class Product {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//     description: string;

//     constructor(
//         id: number,
//         name: string,
//         price: number,
//         quantity: number,
//         description: string
//     ) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//         this.description = description;
//     }
// }

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
}

type UpdateProduct = {
    name?: string;
    price?: number;
    quantity?: number;
    description?: string;  
}

class ProductManagement {
    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    // List of products management
    add(product: Product): Product {
        this.products.push(product);
        return product;
    }

    delete(productId: number): Product[] {
        const updatedProducts = this.products.filter(product => product.id != productId);
        this.products = [...updatedProducts];
        return this.products;
    }

    update(productId: number, input: UpdateProduct): Product | string{
        const foundProduct = this.products.find(product => product.id === productId);

        if (!foundProduct) {
            return "Not found;"
        }

        const { 
            name,
            price,
            quantity,
            description
        } = input;

        if (name) {
            foundProduct.name = name;
        }

        if (price) {
            foundProduct.price = price;
        }

        if (quantity) {
            foundProduct.quantity = quantity;
        }

        if (description) {
            foundProduct.description = description;
        }

        for (let product of this.products) {
            if (product.id === foundProduct.id) {
                product = {...foundProduct};
            }
        }

        return foundProduct;
    }

    list(): Product[] {
        return this.products;
    }

    // Handling with data
    calculateTotalPrice(): number {
        let total = 0;
        this.products.forEach((product) => total += product.price);
        return total;
    }

    findProductById(id: Number): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}