document.addEventListener('DOMContentLoaded', () => {
    // Load cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');
    
    // Display cart items
    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'checkout-item';
        itemDiv.innerHTML = `
            <p>${item.name} - ${item.price} INR</p>
        `;
        checkoutItems.appendChild(itemDiv);
        total += item.price;
    });
    
    checkoutTotal.textContent = total;

    // Form submission
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

        if (paymentMethod === 'online') {
            // Simulate payment gateway
            alert('Redirecting to payment gateway...');
            // Here you would normally integrate with a real payment gateway
        }

        // Calculate delivery time (45 minutes from now)
        const deliveryTime = new Date(Date.now() + 45 * 60000);
        const timeString = deliveryTime.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        document.getElementById('delivery-time').textContent = timeString;
        document.getElementById('success-modal').style.display = 'flex';

        // Clear cart
        localStorage.removeItem('cart');
    });

    // Back to home button
    document.getElementById('back-to-home').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});