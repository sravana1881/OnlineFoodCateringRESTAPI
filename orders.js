// Retrieve the cart from localStorage as a string
const cartString = localStorage.getItem('cart');

// Function to update localStorage with the current cart items
function updateLocalStorage(cartItems) {
    localStorage.setItem('cart', cartItems.join(';'));
}

// Function to recalculate total price after updates
function recalculateTotalPrice(cartItems) {
    let totalPrice = 0;
    const cartTableBody = document.querySelector('table tbody');
    cartTableBody.innerHTML = ''; // Clear current table rows

    if (cartItems.length === 0 || cartItems[0] === "") {
        cartTableBody.innerHTML = '<tr><td colspan="5">Your cart is empty.</td></tr>';
    } else {
        cartItems.forEach((itemString, index) => {
            const [itemName, itemPrice, itemQuantity] = itemString.split('|');
            const itemTotal = parseFloat(itemPrice) * parseInt(itemQuantity);
            totalPrice += itemTotal;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${itemName}</td>
                <td>$${parseFloat(itemPrice).toFixed(2)}</td>
                <td><input type="number" class="item-quantity" value="${itemQuantity}" min="1" data-index="${index}"></td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="delete-btn" data-index="${index}">Delete</button></td>
            `;
            cartTableBody.appendChild(row);

            // Handle quantity change
            const quantityInput = row.querySelector('.item-quantity');
            quantityInput.addEventListener('change', function() {
                // Update quantity in the cart
                cartItems[index] = `${itemName}|${itemPrice}|${quantityInput.value}`;
                updateLocalStorage(cartItems);

                // Recalculate the total price
                recalculateTotalPrice(cartItems);
            });

            // Handle delete button
            const deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
                // Remove item from cart
                cartItems.splice(index, 1);
                updateLocalStorage(cartItems);

                // Recalculate the total price
                recalculateTotalPrice(cartItems);
            });
        });
    }

    // Update total price in the page
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
}

// Check if the cart exists
if (cartString) {
    // Split the string into items
    const cartItems = cartString.split(';');
    const cartTableBody = document.querySelector('table tbody');

    // Check if the cart is empty
    if (cartItems.length === 0 || cartItems[0] === "") {
        cartTableBody.innerHTML = '<tr><td colspan="5">Your cart is empty.</td></tr>';
    } else {
        // Load cart items and update the table
        recalculateTotalPrice(cartItems);
    }
} else {
    // If cart is empty
    document.querySelector('table tbody').innerHTML = '<tr><td colspan="5">Your cart is empty.</td></tr>';
}

// Proceed to Payment Button functionality
document.getElementById('proceed-to-payment').addEventListener('click', function() {
    // Check if cart is empty before proceeding
    if (cartString && cartString.length > 0) {
        const totalAmount = document.getElementById('total-price').textContent;
            localStorage.setItem('total', totalAmount);
        window.location.href = '/Index/payment.html'; // Redirect to payment page
    } else {
        alert("Your cart is empty. Please add items to your cart before proceeding.");
    }
});

// Redirect to order history page
document.getElementById('view-order-history').addEventListener('click', function() {
    window.location.href = '/Index/orderHistory.html'; // Redirect to order history page
});
