const createBttn = document.querySelector('#postSubmit');

// Function to obtain details regarding new post and send it to the server
const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#content').value.trim();
    console.log(title);
    console.log(content);
    const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        // If successful, redirect the browser to the dashboard page
        // console.log(response);
        document.location.replace('/dashboard');
    } else {
        console.log(response.statusText);
        alert(res.statusText);

    }

};

createBttn.addEventListener('click', newPost);