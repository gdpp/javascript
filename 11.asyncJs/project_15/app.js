const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (args) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (success) => {
                resolve(success);
            },
            (error) => {
                reject(error);
            },
            args
        );
    });
};

const setTimer = (duration) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, duration);
    });
    return promise;
};

function trackUserHandler() {
    let positionData;

    getPosition()
        .then(
            (posData) => {
                positionData = posData;
                return setTimer(2000);
            },
            (err) => {
                console.log(err);
            }
        )
        .catch((error) => {
            console.log(error);
        })
        .then((data) => {
            console.log(data, positionData);
        });

    console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

let result = 0;

for (let i = 0; i < 1000000000; i++) {
    result += i;
}

console.log(result);
