document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const fullNameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (e) {
        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if (fullName.length < 3) {
            alert("Full name must be at least 3 characters long.");
            fullNameInput.focus();
            e.preventDefault();
            return;
        }

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

        // Optional: Save name/email for convenience
        localStorage.setItem("signupName", fullName);
        localStorage.setItem("signupEmail", email);
    });
});
