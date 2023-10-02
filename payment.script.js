//  document.addEventListener("DOMContentLoaded", function() {
//     const payButton = document.getElementById("pay-button");
//     payButton.addEventListener("click", processPayment);
// });

// function processPayment() {
//     const cardNumber = document.getElementById("card-number").value;
//     const expDate = document.getElementById("exp-date").value;
//     const cvc = document.getElementById("cvc").value;

//     // Mock payment processing (replace with actual payment gateway integration)
//     if (cardNumber && expDate && cvc) {
//         alert("Payment successful!");
//         // You can also send payment details to the server for further processing.
//     } else {
//         alert("Please fill in all payment details.");
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const checkoutForm = document.getElementById("checkout-form");
//     checkoutForm.addEventListener("submit", processCheckout);

//     function processCheckout(event) {
//         event.preventDefault();

//         // Collect form data
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const address = document.getElementById("address").value;
//         const city = document.getElementById("city").value;
//         const zip = document.getElementById("zip").value;
//         const cardNumber = document.getElementById("card-number").value;
//         const expDate = document.getElementById("exp-date").value;
//         const cvc = document.getElementById("cvc").value;

//         // Validate the form data (you can add more validation)
//         if (!name || !email || !address || !city || !zip || !cardNumber || !expDate || !cvc) {
//             alert("Please fill in all fields.");
//             return;
//         }

//         // Simulate a successful order placement (replace with actual processing logic)
//         alert("Order placed successfully!");
//         checkoutForm.reset();
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
    const checkoutForm = document.getElementById("checkout-form");
    checkoutForm.addEventListener("submit", processCheckout);

    function processCheckout(event) {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const zip = document.getElementById("zip").value;
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
        const cardNumber = document.getElementById("card-number").value;
        const expDate = document.getElementById("exp-date").value;
        const cvc = document.getElementById("cvc").value;

        // Validate the form data (you can add more validation)
        if (!name || !email || !address || !city || !zip || !cardNumber || !expDate || !cvc) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate a successful order placement (replace with actual processing logic)
        alert(`Order placed successfully with ${paymentMethod} payment method!`);
        checkoutForm.reset();
    }
});
