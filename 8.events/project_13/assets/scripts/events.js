const btn = document.querySelector('button');

// btn.onclick = () => {

// }

const onButtonClick = () => {
    alert('button was clicked!');
};

// btn.onclick = onButtonClick;

btn.addEventListener('click', onButtonClick);

setTimeout(() => {
    btn.removeEventListener('click', onButtonClick);
}, 2000);
