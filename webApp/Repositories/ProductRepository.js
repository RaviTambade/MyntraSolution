
var Products=require('../Data/Products');
exports.ProductRepository = class ProductRepository {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        return this.products.find(p => p.id == id);
    }
    deleteProduct(id) {
        this.products = this.products.filter(p => p.id != id);
    }
}                       