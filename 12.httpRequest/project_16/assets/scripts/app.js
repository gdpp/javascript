const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('post');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

fetchBtn.addEventListener('click', fetchPosts);
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = event.currentTarget.querySelector('#title').value;
    const body = event.currentTarget.querySelector('#content').value;

    createPost(title, body);
});

postList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        sendHttpRequest(
            'DELETE',
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
    }
});

function sendHttpRequest(method, url, data) {
    // const promise = new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.responseType = 'json';

    //     xhr.open(method, url);

    //     xhr.onload = function () {
    //         if (xhr.status >= 200 && xhr.status < 300) {
    //             resolve(xhr.response);
    //         } else {
    //             reject(new Error('Something went wrong!'));
    //         }
    //     };

    //     xhr.onerror = function () {
    //         reject(new Error('Failed to send request!'));
    //     };

    //     xhr.send(JSON.stringify(data));
    // });

    return fetch(url, {
        method: method,
        // body: JSON.stringify(data),
        // headers: {
        //     'Content-Type': 'application/json',
        // },
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
            throw new Error('Something went wrong!');
        });
}

async function fetchPosts() {
    const responseData = await sendHttpRequest(
        'GET',
        'https://jsonplaceholder.typicode.com/posts'
    );

    // const listOfPosts = JSON.parse(xhr.response);
    const listOfPosts = responseData;

    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl);
    }
}

async function createPost(title, body) {
    const userId = Math.random();
    const post = {
        title,
        body,
        userId,
    };

    const formData = new FormData(form);
    // formData.append('title', title);
    // formData.append('body', body);
    formData.append('userId', userId);
    // formData.append('someFile', 'photo.jpg');

    sendHttpRequest(
        'POST',
        'https://jsonplaceholder.typicode.com/posts',
        formData
    );
}
