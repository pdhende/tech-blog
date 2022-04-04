const createBttn = document.querySelector('#postSubmit');

// Function to obtain details regarding new post and send it to the server
const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    console.log(title);
    console.log(content);
    // const res = await fetch('api/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({ title, content }),
    // });
    // alert('hi');
};

createBttn.addEventListener('click', newPost);

// alert('hi');