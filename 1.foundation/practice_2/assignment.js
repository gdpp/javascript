const task3Element = document.getElementById('task-3');

function one() {
    alert('Hello World!');
}

function two(name) {
    alert(name);
}

one();
two('gustavo');

task3Element.addEventListener('click', one);

function three(a, b, c) {
    return `${a} ${b} ${c}`;
}

let res = three('Hello', 'World', 'Gustavo');

alert(res);
