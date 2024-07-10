import { IProductManager } from "../interfaces/ProductManager.interface";
import { Product } from "./Product.model";

export class ProductManager implements IProductManager {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(id: number): void {
        const index = this.products.findIndex(product => product.id === id);

        if (index === -1) {
            console.log("Product not found!");
            return;
        }

        this.products = this.products.filter(product => product.id !== id);
    }

    getProductById(id: number): Product | undefined {
        const index = this.products.findIndex(product => product.id === id);

        if (index === -1) {
            console.log("Product not found!");
            return;
        }

        return this.products[index];
    }

    listAllProducts(): Product[] {
        return this.products;
    }

    /**
     * Utility Types : Pick
     * @param id 
     * Chỉ lấy tên và danh mục của sản phẩm.
     */
    getProductNameAndCategory(id: number): Pick<Product, 'name' | 'category'> | undefined {
        const index = this.products.findIndex(product => product.id === id);

        if (index === -1) {
            console.log("Product not found!");
            return;
        }

        const { name, category } = this.products[index];

        return { name, category };
    }

    /**
     * Utility Types : Omit
     * @param id 
     * Lấy thông tin sản phẩm mà không bao gồm giá.
     */
    getProductWithoutPrice(id: number): Omit<Product, 'price'> | undefined {
        const index = this.products.findIndex(product => product.id === id);

        if (index === -1) {
            console.log("Product not found!");
            return;
        }

        const { id: productId, name, category } = this.products[index];

        return { id: productId, name, category };
    }

    /**
     * 
     * @param id 
     * @param updatedInfo 
     * Cập nhật thông tin sản phẩm, cho phép cập nhật một phần thông tin.
     */
    updateProduct(id: number, updatedInfo: Partial<Product>): void {
        const index = this.products.findIndex(product => product.id === id);

        if (index === -1) {
            console.log("Product not found!");
            return;
        }

        this.products[index] = {
            ...this.products[index],
            ...updatedInfo
        };
    }

    /**
     * Tìm kiếm sản phẩm theo danh mục
     * @param category 
     * 
     */
    findProductsByCategory(category: string): Product[] {
        return this.products.filter(product => product.category === category);
    }

    /**
     * Tính tổng giá trị tồn kho
     */
    calculateTotalInventoryValue(): number {
        return this.products.reduce((total, product) => {
            return product.price + total;
        }, 0);
    }
}