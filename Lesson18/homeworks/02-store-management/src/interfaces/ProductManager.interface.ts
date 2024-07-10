import { Product } from "../models/Product.model";

export interface IProductManager {
    /**
     * 
     * @param product 
     * Thêm một sản phẩm mới vào danh sách sản phẩm.
     */
    addProduct(product: Product): void;

    /**
     * 
     * @param id 
     * Xóa sản phẩm khỏi danh sách dựa trên mã sản phẩm.
     */
    removeProduct(id: number): void;

    /**
     * 
     * @param id 
     * Lấy thông tin sản phẩm dựa trên mã sản phẩm.
     */
    getProductById(id: number): Product | undefined;

    /**
     * Liệt kê tất cả các sản phẩm hiện có.
     */
    listAllProducts(): Product[];
}