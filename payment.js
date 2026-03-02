function placeOrder(e) {
    e.preventDefault();
    alert("Order Placed Successfully 🎉");
    localStorage.removeItem("cart");
    window.location.href = "menu.html";
}