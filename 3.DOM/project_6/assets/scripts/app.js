const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const startAddMovieBtn = document.querySelector('header button');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const cleanMovieForm = () => {
    for (const inp of userInputs) {
        inp.value = '';
    }
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    cleanMovieForm();
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    cleanMovieForm();
};

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = (movieId) => {
    let foundIndex = 0;

    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }

        foundIndex++;
    }

    movies.splice(foundIndex, 1);

    const listRoot = document.getElementById('movie-list');

    listRoot.children[foundIndex].remove();

    closeMovieDeletionModal();
    updateUI();
};

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionButton =
        deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionButton.addEventListener(
        'click',
        deleteMovieHandler.bind(null, movieId)
    );
};

const renderNewMovie = (id, title, imgUrl, rate) => {
    const newMovieElement = document.createElement('li');

    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imgUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rate}/5 stars</p>
        </div>
    `;

    newMovieElement.addEventListener(
        'click',
        deleteMovieHandler.bind(null, id)
    );

    const listRoot = document.getElementById('movie-list');

    listRoot.append(newMovieElement);
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' ||
        imgUrlValue.trim() === '' ||
        ratingValue === '' ||
        parseInt(ratingValue) < 1 ||
        parseInt(ratingValue) > 5
    ) {
        alert('Please enter a valid value between 1 and 5');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        img: imgUrlValue,
        rate: ratingValue,
    };

    movies.push(newMovie);

    const { id, title, img, rate } = newMovie;

    showMovieModal();
    toggleBackdrop();
    cleanMovieForm();
    renderNewMovie(id, title, img, rate);
    updateUI();
};

startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);
