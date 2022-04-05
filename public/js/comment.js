// Function to get comment from the user and send it to the server.

const addCmmt = document.querySelector('#commentSbmt');

const addComment = async (event) => {
    event.preventDefault();
    // alert('in function');
    const description = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('#postId').value;
    console.log(post_id);
    const res = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ description, post_id }),
        headers: { 'Content-Type': 'application/json' }
    });
    if(res.ok){
        console.log('in res.ok');
        // const comments = '/api/comments/viewcomment';
        document.location.replace('/api/comments/viewcomment');
    } else {
        console.log(res.statusText);
    }
};

// Set the EventListener
addCmmt.addEventListener('click', addComment);