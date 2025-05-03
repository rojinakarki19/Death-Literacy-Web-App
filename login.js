<script>
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (e) {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            e.preventDefault();
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            passwordInput.focus();
            e.preventDefault();
            return;
        }

        // If you want to log credentials to console for dev/test (not for production)
        console.log("Email:", email);
        console.log("Password:", password);
    });
});
</script>
