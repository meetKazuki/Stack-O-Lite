fetch('https://stack-o-lite.herokuapp.com/api/v1/auth/signup', {
    method: 'post',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe25@gmail.com',
        password: 'janedoe25',
        confirmPassword: 'janedoe25'
    })
}).then(response => response.json()).then((data) => {
    if (data.status === 'success') {
        localStorage.setItem('stack-o-lite-access-token', data.data.token);
        // add the script to navigate to Dashboard from here
    } else {
        // Display data.message as error message
    }
});
