// Fetch the order history from localStorage
const paymentDetails = JSON.parse(localStorage.getItem('paymentDetails'));
alert("payment details :" +paymentDetails);
// Get the container where the orders will be displayed
const orderHistoryContainer = document.getElementById('orderHistory');
alert("order history" +orderHistoryContainer);

// Get the table body where the orders will be inserted
const tableBody = orderHistoryContainer.querySelector('tbody');

// Check if there are payment details available
if (paymentDetails && Array.isArray(paymentDetails) && paymentDetails.length > 0) {
    // Loop through each order in the payment details
    paymentDetails.forEach(order => {
        // Create a table row for the order
        const row = document.createElement('tr');
        
        // First row: order details
        row.innerHTML = `
            <td rowspan="${order.items.length + 1}">${order.orderId}</td>
            <td rowspan="${order.items.length + 1}">${new Date(order.date).toLocaleDateString()}</td>
            <td rowspan="${order.items.length + 1}">$${order.amount}</td>
            <td rowspan="${order.items.length + 1}">${order.status}</td>
            <td rowspan="${order.items.length + 1}">${order.cardName}</td>
        `;

        // Append the order details row to the table
        tableBody.appendChild(row);

        // Now add each item in the order as a new row
        order.items.forEach(item => {
            const itemRow = document.createElement('tr');
            
            // Add item name and price to the row
            itemRow.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price}</td>
            `;
            
            // Append the item row to the table
            tableBody.appendChild(itemRow);
            alert(" data " +tableBody)
        });
    });
} else {
    // If no orders are found, show a message to the user
    orderHistoryContainer.innerHTML = '<p>No orders found.</p>';
}

// Handle the "Back to Orders" button click event
document.getElementById('backToOrdersBtn').addEventListener('click', () => {
    // Redirect to the orders page
    window.location.href = '/Index/orders.html';
});
