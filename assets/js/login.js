const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('https://stack-o-lite.herokuapp.com/api/v1/auth/login', {
        method: 'post',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: emailField.value,
            password: passwordField.value,
        }),
    }).then(response => response.json()).then((data) => {
        if (data.status === 'success') {
            localStorage.setItem('stack-o-lite-access-token', data.data.token);
            // Add script to navigate to Dashboard from here
        } else {
            // Use data.message as error message
        }
    });
});
