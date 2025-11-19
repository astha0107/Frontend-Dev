class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(percentage) {
        let discountAmount = (this.price * percentage) / 100;
        this.price = this.price - discountAmount;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}
let p1 = new Product(1, "phone", 15000, "Electronics");
let p2 = new Product(2, "Shoes", 800, "Fashion");
let p3 = new Product(3, "Laptop", 55000, "Electronics");
let p4 = new Product(4, "Earphones", 1200, "Accessories");
let products = [p1, p2, p3, p4];

p1.applyDiscount(10); 
console.log("All Products:");
products.forEach(product => console.log(product.getDetails()));
let expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts with price > 1000:");
expensiveProducts.forEach(product => console.log(product.getDetails()));
