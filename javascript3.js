class Cart {
    constructor() {
        this.items = [];
        this.total = 0;  
    }


    addProduct(product) {
        
        this.items.push(product);
        this.total += product.price; 
        this.updateCartDisplay();
    }

    updateCartDisplay() {
        const containerforitems = document.getElementById('itemsincart');
        containerforitems.innerHTML = '';


        this.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            containerforitems.appendChild(li);
        });


        document.getElementById('total-price').innerText = this.total.toFixed(2);
    }
}


const cart = new Cart();


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productDiv = event.target.closest('.product');
        const product_id = productDiv.getAttribute('data-id');
        const product_name = productDiv.getAttribute('data-name');
        const product_price = parseFloat(productDiv.getAttribute('data-price'));
        const product_image = productDiv.getAttribute('data-image');


        const product = { 
            id: product_id, 
            name: product_name, 
            price: product_price, 
            image: product_image 
        };


        cart.addProduct(product);
    });
});
