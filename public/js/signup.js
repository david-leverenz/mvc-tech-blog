const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log(event);
    const name = document.querySelector('#usernameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();

    if (name && email && password) {

        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {

            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#signupBtn')
    .addEventListener('click', signupFormHandler);