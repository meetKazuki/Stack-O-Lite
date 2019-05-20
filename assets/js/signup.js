const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password')
const confirmPasswordField = document.getElementById('password-confirm');
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('https://stack-o-lite.herokuapp.com/api/v1/auth/signup', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstNameField.value,
            lastName: lastNameField.value,
            email: emailField.value,
            password: passwordField.value,
            confirmPassword: confirmPasswordField.value
        })
    }).then(response => response.json()).then((data) => {
        if (data.status === 'success') {
            localStorage.setItem('stack-o-lite-access-token', data.data.token);
            // add the script to navigate to Dashboard from here
        } else {
            // Display data.message as error message
            console.log(data.message);
        }
    });
});
