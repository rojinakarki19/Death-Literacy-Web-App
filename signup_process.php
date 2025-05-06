<?php
// signup_process.php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST['fullname']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];

    // Hash the password before storing it
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Example: save to database (mocked here)
    // $db->query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [...]);

    echo "Registration successful for: " . htmlspecialchars($name);
}
?>
