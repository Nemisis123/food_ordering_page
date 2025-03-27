const menuItems = [
    {
        id: 1,
        name: 'Margherita Pizza',
        price: 120,
        image: 'https://th.bing.com/th/id/OIP.A_7IadfotxHc56iM-XuY5AHaJd?w=188&h=240&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Classic Italian pizza with tomato sauce and mozzarella'
    },
    {
        id: 2,
        name: 'Burger Deluxe',
        price: 80,
        image: 'https://th.bing.com/th/id/OIP.gii3q5cift5FQ2P77IzobAHaE8?w=270&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Juicy beef patty with lettuce, tomato, and special sauce'
    },
    {
        id: 3,
        name: 'Pasta Alfredo',
        price: 140,
        image: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2017/10/c54907276a7cb6e0545ae2128bdc984e86b6cb9d.jpeg',
        description: 'Creamy pasta with parmesan cheese and garlic'
    },
    {
        id: 4,
        name: 'French Fries',
        price: 40,
        image: 'https://th.bing.com/th/id/OIP.T96-l_gUGQYf8e0GFOosngHaHm?w=176&h=181&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Crispy golden fries served with ketchup and mayo'
    },
    {
        id: 5,
        name: 'Club Sandwich',
        price: 40,
        image: 'https://th.bing.com/th/id/OIP.PxIyeBGagpCEKI3hqG1ZcAHaLH?w=115&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Triple-decker sandwich with chicken, lettuce, tomato, and cheese'
    },
    {
        id: 6,
        name: 'Honey Chilli Potato',
        price: 50,
        image: 'https://th.bing.com/th/id/OIP.MKAue9GXNAs0bwAxM5ZYRQHaGn?w=210&h=188&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Crispy potato fingers tossed in sweet and spicy honey chilli sauce'
    },
    {
        id: 7,
        name: 'Steam Momos',
        price: 50,
        image: 'https://th.bing.com/th/id/OIP.Ixd6VbLuvoiDLm4n0m-6cAHaFj?w=241&h=181&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Juicy steamed dumplings filled with spiced vegetables or chickene'
    },
    {
        id: 8,
        name: 'Fried Momos',
        price: 60,
        image: 'https://th.bing.com/th/id/OIP.k50Tud0qT0AIZ80naOpjmwHaKX?w=129&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Crispy fried dumplings served with schezwan sauce and mayo'
    },
    {
        id: 9,
        name: 'Hakka Noodles',
        price: 60,
        image: 'https://th.bing.com/th/id/OIP.fanZPy9rtueJs2yW6jQDqgHaHa?w=171&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Stir-fried noodles with vegetables in Indo-Chinese style'
    },
    {
        id: 10,
        name: 'Schezwan Noodles',
        price: 80,
        image: 'https://th.bing.com/th/id/OIP.CIT0L5BdXJmAkPu_qFVgLQHaLH?w=188&h=282&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Spicy noodles tossed in schezwan sauce with vegetables and herbs'
    },
    {
        id: 11,
        name: 'Sushi Platter',
        price: 180,
        image: 'https://th.bing.com/th/id/OIP.09B9IDU0AZySe8AhU8VEkwHaE7?w=295&h=196&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Assorted fresh sushi rolls with wasabi and pickled ginger'
    },
    {
        id: 12,
        name: 'Biryani Special',
        price: 120,
        image: 'https://th.bing.com/th/id/OIP.YHlUrhTbe7_vimcTYdF6NgHaHa?w=183&h=183&c=7&r=0&o=5&dpr=2&pid=1.7',
        description: 'Aromatic basmati rice cooked with tender meat and authentic spices'
    }
];

// search bar function
function searchMenu(searchTerm) {
    const filteredItems = menuItems.filter(item => {
        const searchString = searchTerm.toLowerCase();
        return (
            item.name.toLowerCase().includes(searchString) ||
            item.description.toLowerCase().includes(searchString)
        );
    });

    const menuGrid = document.querySelector('.menu-grid');
    menuGrid.innerHTML = '';

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
            <div class="no-results">
                <h3>No items found matching "${searchTerm}"</h3>
                <p>Try searching for something else</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price} INR</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Adding event listeners for search
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        searchMenu(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchMenu(searchInput.value);
        }
    });

    // Real-time search 
    searchInput.addEventListener('input', (e) => {
        if (e.target.value === '') {
            displayMenu(); // Show all items when search is cleared
        } else {
            searchMenu(e.target.value);
        }
    });
});

let currentRatingItem = null;

function showRatingModal(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (!item) return;

    currentRatingItem = item;

    // Set item details in modal
    document.getElementById('rating-item-img').src = item.image;
    document.getElementById('rating-item-name').textContent = item.name;

    // Reset stars
    document.querySelectorAll('.star-rating i').forEach(star => {
        star.classList.remove('active');
    });

    // Show modal
    document.getElementById('rating-modal').style.display = 'block';
}

// Add this to your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    // Add rating functionality
    const stars = document.querySelectorAll('.star-rating i');
    const submitRating = document.getElementById('submit-rating');
    const closeRating = document.getElementById('close-rating');
    const ratingModal = document.getElementById('rating-modal');
    let selectedRating = 0;

    // Star rating selection
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);

            // Highlight stars on hover
            stars.forEach(s => {
                if (parseInt(s.dataset.rating) <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        star.addEventListener('mouseout', () => {
            // Reset to selected rating when not hovering
            stars.forEach(s => {
                if (parseInt(s.dataset.rating) <= selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        star.addEventListener('click', () => {
            selectedRating = parseInt(star.dataset.rating);

            // Update active stars
            stars.forEach(s => {
                if (parseInt(s.dataset.rating) <= selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });

    // Submit rating
    submitRating.addEventListener('click', () => {
        if (!currentRatingItem || selectedRating === 0) {
            alert('Please select a rating');
            return;
        }

        // Add new rating
        currentRatingItem.ratings.push({
            rating: selectedRating,
            comment: document.getElementById('rating-comment').value,
            date: new Date()
        });

        // Recalculate average
        currentRatingItem.averageRating = (
            currentRatingItem.ratings.reduce((sum, r) => sum + r.rating, 0) /
            currentRatingItem.ratings.length
        ).toFixed(1);

        // Close modal and refresh display
        ratingModal.style.display = 'none';
        displayMenu();

        // Reset
        selectedRating = 0;
        document.getElementById('rating-comment').value = '';

        alert('Thank you for your rating!');
    });

    // Close rating modal
    closeRating.addEventListener('click', () => {
        ratingModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === ratingModal) {
            ratingModal.style.display = 'none';
        }
    });
});

let cart = [];
// Add discount calculation function
function calculateDiscountedPrice(originalPrice) {
    return Math.round(originalPrice * 0.7); // 30% off
}
// Add these properties to each menu item
menuItems.forEach(item => {
    // Generate random number of ratings (between 5 and 20)
    const numberOfRatings = Math.floor(Math.random() * 16) + 5;

    // Create array of random ratings
    item.ratings = [];
    for (let i = 0; i < numberOfRatings; i++) {
        item.ratings.push({
            rating: Math.floor(Math.random() * 3) + 3, // Random rating between 3-5
            comment: '',
            date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000) // Random date within last month
        });
    }

    // Calculate average rating
    item.averageRating = (item.ratings.reduce((sum, r) => sum + r.rating, 0) / item.ratings.length).toFixed(1);
});

// Update displayMenu function to show ratings
function displayMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    menuGrid.innerHTML = '';

    menuItems.forEach(item => {
        const discountedPrice = calculateDiscountedPrice(item.price);
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        // Generate stars based on average rating
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.round(item.averageRating)) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }

        menuItem.innerHTML = `
            <div class="discount-badge">30% OFF</div>
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <div class="item-rating">
                ${starsHTML}
                <span>(${item.averageRating}) ${item.ratings.length} reviews</span>
            </div>
            <p>${item.description}</p>
            <div class="price-container">
                <span class="original-price">${item.price} INR</span>
                <span class="discounted-price">${discountedPrice} INR</span>
            </div>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
            <button class="rate-now" onclick="showRatingModal(${item.id})">Rate Now</button>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Update searchMenu function to include ratings
function searchMenu(searchTerm) {
    const filteredItems = menuItems.filter(item => {
        const searchString = searchTerm.toLowerCase();
        return (
            item.name.toLowerCase().includes(searchString) ||
            item.description.toLowerCase().includes(searchString)
        );
    });

    const menuGrid = document.querySelector('.menu-grid');
    menuGrid.innerHTML = '';

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
            <div class="no-results">
                <h3>No items found matching "${searchTerm}"</h3>
                <p>Try searching for something else</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const discountedPrice = calculateDiscountedPrice(item.price);
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        // Generate stars based on average rating
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.round(item.averageRating)) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }

        menuItem.innerHTML = `
            <div class="discount-badge">30% OFF</div>
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <div class="item-rating">
                ${starsHTML}
                <span>(${item.averageRating}) ${item.ratings.length} reviews</span>
            </div>
            <p>${item.description}</p>
            <div class="price-container">
                <span class="original-price">${item.price} INR</span>
                <span class="discounted-price">${discountedPrice} INR</span>
            </div>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
            <button class="rate-now" onclick="showRatingModal(${item.id})">Rate Now</button>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Update addToCart function to use discounted price
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const cartItem = {
        ...item,
        price: calculateDiscountedPrice(item.price)
    };
    cart.push(cartItem);
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Display cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - ${item.price} INR <span class="discount-text">(30% off)</span></p>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    totalAmount.textContent = total.toFixed(2);
}
// Update the checkout button click handler
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        // Create and show error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>Please add items to your cart before checkout</span>
        `;

        document.querySelector('.modal-content').appendChild(errorMessage);

        // Remove the message after 3 seconds
        setTimeout(() => {
            errorMessage.style.opacity = '0';
            setTimeout(() => errorMessage.remove(), 300);
        }, 3000);
    } else {
        // Save cart to localStorage and redirect
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'checkout.html';
    }
});

// Cart modal functionality
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cancelCart = document.getElementById('cancel-cart');


// Add this at the beginning of your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.slider-dots');

    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(n) {
        currentSlide = n;
        slider.style.transform = `translateX(-${currentSlide * 100 / 3}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto slide
    setInterval(nextSlide, 5000);
});

// cancel cart event listener
cancelCart.addEventListener('click', () => {
    cart = []; // Clear the cart array
    updateCartCount(); // Update the cart count display
    displayCart(); // Refresh the cart display
    alert('All items have been removed from your cart!');
});

cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'block';
    displayCart();
});

// close cart event listener
closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Initialize the website
displayMenu();