// Obviously, a lot of work is to be done for this file!
console.log("Hello World");

// I am currently trying to get this code working.  I cannot figure out why this is giving an error.
const loginFormRender = async (event) => {
    event.preventDefault();
    
    // const loginButton = document.querySelector('#sign-in')
    
        const response = await fetch('/login', {
            method: 'GET',
            // body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {

            document.location.replace('/');
        } else {
            alert("JS error: " + response.statusText);
        }
    }


document
    .querySelector('#sign-in')
    .addEventListener('click', loginFormRender);