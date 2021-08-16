document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail == 'Tamim@gmail.com' && userPassword == '1234') {
        window.location.href = "banking.html";
    }
})