// This logs a user out.  It is called when the logout button is clicked.  It's tied to the userRoutes.js route.
const logout = async ()=> {

    const response = await fetch("/api/users/logout",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {

        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
    
};

document
    .querySelector('#logoutBtn')
    .addEventListener('click', logout);