// This hooks to the backend post route to login a user.
const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log(event);
    const email = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (email && password) {

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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
    .querySelector('#loginBtn')
    .addEventListener('click', loginFormHandler);