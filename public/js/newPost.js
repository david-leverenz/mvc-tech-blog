const postFormHandler = async (event) => {
    event.preventDefault();
    // console.log(event);
    const post_title = document.querySelector('#post-title').value.trim();
    const post_contents = document.querySelector('#post-text').value.trim();


    if (post_title && post_contents) {

        const response = await fetch('/api/blog/', {
            method: 'POST',
            body: JSON.stringify({ post_title, post_contents }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {

            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#postBtn')
    .addEventListener('click', postFormHandler);