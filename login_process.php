<?php
session_start();

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Replace with your actual user authentication logic
if ($email === "admin@example.com" && $password === "securepassword") {
    $_SESSION['user'] = $email;
    header("Location: dashboard.php");
    exit;
} else {
    echo "Invalid email or password. <a href='login.html'>Try again</a>";
}
?>
