fetch('https://stack-o-lite.herokuapp.com/api/v1/auth/login', {
    method: 'post',
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        email: 'johndoe25@gmail.com',
        password: 'johndoe25',
    }),
}).then(response => response.json()).then((data) => {
    if (data.status === 'success') {
        localStorage.setItem('stack-o-lite-access-token', data.data.token);
        // Add script to navigate to Dashboard from here
    } else {
        // Use data.message as error message
    }
});