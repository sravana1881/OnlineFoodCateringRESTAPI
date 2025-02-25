document.addEventListener('DOMContentLoaded', function () {
    // Load order total from localStorage
    const orderTotal = localStorage.getItem('total');
    const orderTotalElement = document.getElementById('orderTotal');
    
    // Display order total only (without any other info)
    if (orderTotalElement) {
        orderTotalElement.textContent = `$${orderTotal}`;
    }

    // Handle Confirm Order
    document.getElementById('confirmOrderBtn').addEventListener('click', function () {
        const nameOnCard = document.getElementById('nameOnCard').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const cvv = document.getElementById('cvv').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const zipCode = document.getElementById('zipCode').value;

        // Validate all fields
        if (nameOnCard && cardNumber && cvv && expiryDate && zipCode) {
            // Create an object to store the payment details and order total
            const paymentDetails = {
                orderTotal: orderTotal,
                nameOnCard: nameOnCard,
                cardNumber: cardNumber,
                cvv: cvv,
                expiryDate: expiryDate,
                zipCode: zipCode,
                status: 'Confirmed',
                date: new Date().toLocaleString(),
            };

            // Store the payment details in localStorage (as JSON)
            localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));

            // Update the status message to inform the user about the success
            const statusMessageElement = document.getElementById('statusMessage');
            if (statusMessageElement) {
                statusMessageElement.textContent = 'Payment Successful!';
            }

            // Store order status as 'confirmed' in localStorage
            localStorage.setItem('orderStatus', 'confirmed');
            
            // Optionally clear the form after successful payment
            document.getElementById('paymentForm').reset();
        } else {
            const statusMessageElement = document.getElementById('statusMessage');
            if (statusMessageElement) {
                statusMessageElement.textContent = 'Please fill out all fields.';
            }
        }
    });

    // Handle Cancel Order
    document.getElementById('cancelOrderBtn').addEventListener('click', function () {
        // Set order status to canceled in localStorage
        localStorage.setItem('orderStatus', 'canceled');
        const statusMessageElement = document.getElementById('statusMessage');
        if (statusMessageElement) {
            statusMessageElement.textContent = 'Order Canceled!';
        }
    });
});
