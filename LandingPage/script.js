document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        // Simulate login request
        console.log("Login Request - Username: " + username + ", Password: " + password);
        // Here you can make an AJAX request to your backend for login
    });

    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let username = document.getElementById('regUsername').value;
        let password = document.getElementById('regPassword').value;
        let email = document.getElementById('email').value;
        // Simulate registration request
        console.log("Registration Request - Username: " + username + ", Password: " + password + ", Email: " + email);
        // Here you can make an AJAX request to your backend for registration
    });
});
