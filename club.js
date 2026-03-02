  // Function to add items to localStorage
            function addToCart(name, price, image) {
                // 1. Get existing cart from localStorage or create empty array
                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                // 2. Check if item already exists
                let existingItem = cart.find(item => item.name === name);

                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    // 3. Add new item
                    cart.push({
                        name: name,
                        price: price,
                        image: image,
                        quantity: 1
                    });
                }

                // 4. Save back to localStorage
                localStorage.setItem("cart", JSON.stringify(cart));

                // 5. Update the UI badge
                updateCartBadge();

                // 6. Show confirmation

            }

            // Function to update the number on the cart icon
            function updateCartBadge() {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

                let badge = document.getElementById("cart-count");
                if (badge) {
                    badge.innerText = totalItems;
                }
            }

            // Run this when page loads to keep the badge number correct
            window.onload = updateCartBadge;