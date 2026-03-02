// 1. Function to Load items from localStorage
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items-list");
    let totalDisplay = document.getElementById("total-price");
    let summary = document.getElementById("cart-summary");

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart"><h4>Your bag is empty!</h4><a href="menu.html" class="btn btn-dark mt-3">Shop Now</a></div>`;
        summary.style.display = "none";
        return;
    }

    summary.style.display = "block";
    container.innerHTML = "";
    let grandTotal = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;

        container.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="item-details">
                            <h5 class="mb-1">${item.name}</h5>
                            <p class="text-muted mb-0">Price: ₹${item.price}</p>
                        </div>
                        <div class="quantity-controls">
                            <button class="btn-qty" onclick="updateQty(${index}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="btn-qty" onclick="updateQty(${index}, 1)">+</button>
                        </div>
                        <div class="ms-4">
                            <strong>₹${itemTotal}</strong>
                        </div>
                        <i class="fas fa-trash remove-btn" onclick="removeItem(${index})"></i>
                    </div>
                `;
    });

    totalDisplay.innerText = "₹" + grandTotal.toLocaleString();
}

// 2. Update Quantity
function updateQty(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].quantity += change;

    if (cart[index].quantity < 1) {
        removeItem(index);
    } else {
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }
}

// 3. Remove Item
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// 4. Checkout
function checkout() {
    alert("Order Placed Successfully! Thank you for shopping with FIFA 26 WORLD.");

    window.location.href = "payment.html";
}

// Load cart on page startup
window.onload = loadCart;