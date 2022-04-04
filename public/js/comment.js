// Function to get comment from the user and send it to the server.

const addCmmt = document.querySelector('#commentSbmt');

const addComment = async (event) => {
    event.preventDefault();
    alert('in function');
    const comment = document.querySelector('#comment').value;
    console.log(comment);
    // const res = await fetch('/api/comments', {

    // });
};

// Set the EventListener
addCmmt.addEventListener('click', addComment);