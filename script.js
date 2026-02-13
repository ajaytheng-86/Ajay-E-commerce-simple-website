let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById("cartCount").innerText = cart.length;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

document.getElementById("cartBtn").onclick = function () {
  document.getElementById("cart").classList.toggle("hidden");
};

function checkout() {
  alert("Order placed successfully!");
  cart = [];
  total = 0;
  updateCart();
  document.getElementById("cartCount").innerText = 0;
}
