// console.log('Init project successfully!');

import { ProductManager } from "./models/ProductManager.model";

// Tạo một đối tượng ProductManager
const productManager = new ProductManager();

// Tạo một vài sản phẩm và thêm chúng vào ProductManager.
const product1 = {
    id: 1,
    name: 'Product 1',
    price: 100,
    category: 'Category 1'
};

const product2 = {
    id: 2,
    name: 'Product 2',
    price: 200,
    category: 'Category 2'
};

const product3 = {
    id: 3,
    name: 'Product 3',
    price: 300,
    category: 'Category 3'
};

const product4 = {
    id: 4,
    name: 'Product 4',
    price: 400,
    category: 'Category 4'
};

productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);
productManager.addProduct(product4);


// Thực hiện thêm, xóa, và cập nhật sản phẩm.
const product5 = {
    id: 5,
    name: 'Product 5',
    price: 500,
    category: 'Category 2'

};
productManager.addProduct(product5); // Thêm sản phẩm mới
productManager.removeProduct(2); // Xóa sản phẩm có id = 2

productManager.updateProduct(3, { price: 350 }); // Cập nhật giá của sản phẩm có id = 3
productManager.updateProduct(4, { name: 'Product 4 Updated' }); // Cập nhật tên của sản phẩm có id = 4
productManager.updateProduct(5, { name: 'Product 5 Updated', price: 550 }); // Cập nhật tên và giá của sản phẩm có id = 5
productManager.updateProduct(1, { category: 'Category 2' }); // Cập nhật danh mục của sản phẩm có id = 1

// Tìm kiếm sản phẩm theo danh mục và tính tổng giá trị hàng tồn kho.
const products = productManager.findProductsByCategory('Category 2');
console.log(products);

// Liệt kê tất cả các sản phẩm và hiển thị thông tin chi tiết.
const allProducts = productManager.listAllProducts();
console.log(allProducts);
