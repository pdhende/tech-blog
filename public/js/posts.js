const createBttn = document.querySelector('#postSubmit');
const updateBttn = document.querySelector('#postUpdate');
const deleteBttn = document.querySelector('#postDelete');

// Function to obtain details regarding new post and send it to the server
const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#content').value.trim();
    // console.log(title);
    // console.log(content);
    const res = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
    } else {
        console.log(res.statusText);
        // alert(res.statusText);
    }
};

// Function to obtain changes made to an existing post and send PUT request to server
const updatePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').textContent.trim();
    const description = document.querySelector('#content').value.trim();
    // console.log(title);
    // console.log(content);
    const postID = document.querySelector('#postId').value;
    const res = await fetch('/api/posts', {
        method: 'PUT',
        body: JSON.stringify({ postID, title, description }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
    } else {
        console.log(res.statusText);
        // alert(res.statusText);
    }
};

// Function to delete an existing post
const deletePost = async (event) => {
    event.preventDefault();

    const postID = document.querySelector('#postId').value;
    const res = await fetch(`/api/posts/${postID}`, {
        method: 'DELETE',
        // body: JSON.stringify({ postID }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
    } else {
        console.log(res.statusText);
        // alert(res.statusText);
    }
};

//Set the EventListeners
if(createBttn !== null){
    createBttn.addEventListener('click', newPost);
}else{
    updateBttn.addEventListener('click', updatePost);
    deleteBttn.addEventListener('click', deletePost);
}