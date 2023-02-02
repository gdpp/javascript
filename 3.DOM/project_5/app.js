// Navigate The DOM
const h1 = document.getElementById('main-title');
const listItemElements = document.getElementsByTagName('li');

for (const item of listItemElements) {
    console.dir(item);
    item.style.fontWeight = 'bold';
}

const li = document.querySelector('li:last-of-type');
li.textContent = `${li.textContent} (Changed)`;

h1.textContent = `Message from Javascript`;
h1.style.color = '#ff00ff';
h1.style.backgroundColor = '#000000';

const ul = document.querySelector('ul');

console.log(ul.childen);
console.log(ul.childNodes);

const liFirst = document.querySelector('li');

console.log(liFirst.parentElement);
console.log(liFirst.parentNode);

console.log(document.documentElement.parentElement);
console.log(document.documentElement.parentNode);

console.log(ul.previousElementSibling);
console.log(ul.previousSibling);

const ulAlt = document.body.firstElementChild.nextElementSibling;
const firstLiAlt = ulAlt.firstElementChild;

console.log(firstLiAlt);

// Style The DOM
const section = document.querySelector('section');
const button = document.querySelector('button');

button.style.display = 'block';
button.style.marginBottom = '20px';

button.addEventListener('click', () => {
    // if (section.className === 'red-orange-bg enabled') {
    //     section.className = 'red-orange-bg disabled';
    // } else {
    //     section.className = 'red-orange-bg enabled';
    // }

    section.classList.toggle('enabled');
    section.classList.toggle('disabled');
});

// Create, Remove & Inserting Elements
const body = document.body;
const sectionAlt = document.querySelector('section');
const list = document.querySelector('ul');

body.insertAdjacentHTML(
    'beforebegin',
    '<section class="sandy-brown-bg"></section>'
);
body.insertAdjacentHTML(
    'afterbegin',
    '<section class="maize-crayola-bg"></section>'
);
body.insertAdjacentHTML(
    'beforeend',
    '<section class="persian-green-bg"></section>'
);
body.insertAdjacentHTML('afterend', '<section class="charcoal-bg"></section>');

list.innerHTML = list.innerHTML + '<li class="list-item"> Item 4 </li>';

const newLi = document.createElement('li');
newLi.textContent = 'Item 5';

list.appendChild(newLi);

list.prepend(newLi);

list.lastElementChild.before('<li> Item 6 </li>');

//list.remove();
list.parentElement.removeChild(list);
