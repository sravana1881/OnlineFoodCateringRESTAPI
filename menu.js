function navigateToCategory() {
    // Get the selected category value
    const category = document.getElementById("menu-category").value;

    if (category) {
        // Scroll to the respective category section
        document.getElementById(category).scrollIntoView({
            behavior:'auto'// auto scroll
        });
    }
}
// Simulate a shopping cart
let cart = [];

// Function to add item to cart
function addToCart(itemName, itemPrice, itemQuantity) {
    // Retrieve the existing cart from localStorage or initialize an empty cart
    let cart = localStorage.getItem('cart');
    if (cart) {
        // If the cart exists, convert it to an array of objects
        cart = cart.split(';').map(item => {
            const [name, price, quantity] = item.split('|');
            return { name, price: parseFloat(price), quantity: parseInt(quantity) };
        });
        
        // Check if the item already exists in the cart
        const existingItemIndex = cart.findIndex(item => item.name === itemName);
        if (existingItemIndex > -1) {
            // Update quantity if item already exists
            cart[existingItemIndex].quantity += itemQuantity;
        } else {
            // Add new item to cart
            cart.push({
                name: itemName,
                price: itemPrice,
                quantity: itemQuantity
            });
        }
    } else {
        // If no cart exists, create a new cart with the first item
        cart = [{
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity
        }];
    }

    // Store the updated cart in localStorage
    const cartString = cart.map(item => `${item.name}|${item.price}|${item.quantity}`).join(';');
    localStorage.setItem('cart', cartString);

    // Log the updated cart 
    console.log(cart);

    // Notify the user the item was added to the cart
    alert(`${itemName} added to cart!`);

    // Redirect to the orders page
    window.location.href = '/Index/orders.html';
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const menuItem = event.target.closest('.menu-item');
        const itemName = menuItem.querySelector('h3').innerText;
        const itemPrice = parseFloat(menuItem.querySelector('p').innerText.replace('$', ''));
        const quantity = parseInt(menuItem.querySelector('.quantity').value);

        addToCart(itemName, itemPrice, quantity);
    });
});

