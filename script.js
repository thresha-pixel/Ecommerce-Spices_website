document.addEventListener("DOMContentLoaded", function () {

    /* CONTACT FORM */
    const contactForm = document.getElementById("contactForm");
    const contactSuccess = document.getElementById("contactSuccess");

    contactForm.addEventListener("submit", function (e) 
    {
        e.preventDefault();

        contactSuccess.style.display = "block";
        contactSuccess.style.color = "green";
        contactSuccess.style.marginTop = "10px";
        contactSuccess.textContent = "✅ Message sent successfully!";

        contactForm.reset();

        setTimeout(() => {
            contactSuccess.style.display = "none";
        }, 3000);
    });

    /* GET STARTED EMAIL */
    const getStartedBtn = document.getElementById("getStartedBtn");
    const emailInput = document.getElementById("emailInput");
    const emailSuccess = document.getElementById("emailSuccess");

    getStartedBtn.addEventListener("click", function () {
        if (emailInput.value === "") {
            emailSuccess.style.display = "block";
            emailSuccess.style.color = "red";
            emailSuccess.textContent = "⚠️ Please enter your email address";
        } else {
            emailSuccess.style.display = "block";
            emailSuccess.style.color = "green";
            emailSuccess.textContent = "🎉 Thanks for subscribing!";
            emailInput.value = "";
        }

        setTimeout(() => {
            emailSuccess.style.display = "none";
        }, 3000);
    });

document.addEventListener("DOMContentLoaded", function () {

    let selectedProduct = {};
    const cartSection = document.getElementById("cart");
    const cartDetails = document.getElementById("cartDetails");
    const quantityInput = document.getElementById("quantity");
    const totalPrice = document.getElementById("totalPrice");
    const paymentSuccess = document.getElementById("paymentSuccess");

});
});
