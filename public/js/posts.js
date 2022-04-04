const createBttn = document.querySelector('#postSubmit');
const createNPBttn = document.querySelector('#createNewPost');

// Function to render the create new post form
const displayForm = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/posts/newpost', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        // If successful, redirect the browser to the dashboard page
        console.log(res);
        document.location.replace('/api/posts/newpost');
    } else {
        console.log(res.statusText);
        alert(res.statusText);

    }
};

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


//Set the EventListeners
console.log(createBttn);
console.log(createNPBttn);
if(createBttn !== null) {
    createBttn.addEventListener('click', newPost);
}else {
    createNPBttn.addEventListener('click', displayForm);
}