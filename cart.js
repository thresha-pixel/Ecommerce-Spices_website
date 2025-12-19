document.addEventListener("DOMContentLoaded", function () {

  const cartSection = document.getElementById("cart");
  const cartProduct = document.getElementById("cartProduct");
  const quantityInput = document.getElementById("quantity");
  const total = document.getElementById("total");
  const payBtn = document.getElementById("payBtn");
  const successMsg = document.getElementById("successMsg");

  let productPrice = 0;

  // ADD TO CART → SHOW CART
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const productName = this.dataset.name;
      productPrice = parseInt(this.dataset.price);

      cartProduct.innerHTML = `<strong>${productName}</strong> - ₹${productPrice}`;
      quantityInput.value = 1;
      total.innerText = `Total: ₹${productPrice}`;

      cartSection.style.display = "block"; // 🔥 show cart only here
      cartSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // UPDATE TOTAL WHEN QUANTITY CHANGES
  quantityInput.addEventListener("input", function () {
    total.innerText = `Total: ₹${productPrice * this.value}`;
  });

  // PAYMENT
  payBtn.addEventListener("click", function () {
    successMsg.style.display = "block";
    successMsg.innerText = "✅ Payment Successful!";

    setTimeout(() => {
      cartSection.style.display = "none"; // hide again after payment
      successMsg.style.display = "none";
    }, 3000);
  });

});
