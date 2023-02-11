// const dynamic = 'level';

// let person = {
//     name: 'Gustavo',
//     age: 21,
//     hobbies: ['programming', 'cooking'],
//     [dynamic]: '...',
//     greet: () => {
//         alert('Hi everybody');
//     },
//     'role position': 'developer',
// };

// person.greet();

// person.age = 31;
// person.isAdmin = true;

// console.log(person);

// delete person.isAdmin;

// console.log(person);

// console.log(person['role position']);

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

function addMovieHandler() {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim === '' || extraName.trim === '' || extraValue === '') {
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        info: {
            title,
            [extraName]: extraValue,
        },
        getFormattedTitle: function () {
            return this.info.title.toUpperCase();
        },
    };

    movies.push(newMovie);
    renderMovies();
}

function renderMovies(searchTerm = '') {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filterMovies = !searchTerm
        ? movies
        : movies.filter((movie) => movie.info.title.includes(searchTerm));

    filterMovies.forEach((movie) => {
        const movieEl = document.createElement('li');

        const { info, ...otherProps } = movie;

        //const { title: movieTitle } = info;
        const { getFormattedTitle } = movie;

        let text = getFormattedTitle() + ' - ';

        for (const key in info) {
            if (key !== 'title') {
                text += `${key}:${info[key]}`;
            }
        }

        movieEl.textContent = text;
        movieList.append(movieEl);
    });
}

function searchMovieHandler() {
    const term = document.getElementById('filter-title').value;
    renderMovies(term);
}
