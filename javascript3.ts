// Product class to represent each product
class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    renderProduct() {
        return `
            <div class="product">
                <img src="${this.image}" alt="${this.name}">
                <h3>${this.name}</h3>
                <p>$${this.price}</p>
                <button onclick="addToCart(${this.id})">Add to Cart</button>
            </div>
        `;
    }
}

// Cart class to manage the cart and its functionality
class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    addProduct(product) {
        this.items.push(product);
        this.total += product.price;
        this.updateCartUI();
    }

    updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear existing items

        this.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(li);
        });

        document.getElementById('total-price').innerText = this.total.toFixed(2);
    }
}

// Initialize Cart
const cart = new Cart();

// Sample product data
const productsData = [
    { id: 1, name: "Product 1", price: 19.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Product 2", price: 29.99, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Product 3", price: 39.99, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Product 4", price: 49.99, image: "https://via.placeholder.com/200" }
];

// Generate product list dynamically
const productListSection = document.getElementById('product-list');
productsData.forEach(productData => {
    const product = new Product(productData.id, productData.name, productData.price, productData.image);
    productListSection.innerHTML += product.renderProduct();
});

// Add product to cart
function addToCart(productId) {
    const productData = productsData.find(p => p.id === productId);
    const product = new Product(productData.id, productData.name, productData.price, productData.image);
    cart.addProduct(product);
}
