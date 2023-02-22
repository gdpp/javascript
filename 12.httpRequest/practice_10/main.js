document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://api.punkapi.com/v2/beers/random';

    const startBtn = document.querySelector('.beer-btn');
    const randomBeer = document.querySelector('.title-beer');
    const descDisplay = document.querySelector('.desc-beer');

    function getData() {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { name, description, volume } = data[0];
                const { value, unit } = volume;

                randomBeer.innerHTML = name + ' ' + value + ' ' + unit;
                descDisplay.innerHTML = description;
            });
    }

    startBtn.addEventListener('click', getData);
});
