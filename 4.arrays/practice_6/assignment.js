const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNumbers = numbers.filter((num) => {
    return num > 5;
});

const objNumbers = numbers.map((num) => {
    return { num: num };
});

numbers.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
}, 0);

function findMax(numbers) {
    // Finds the largest number in a list of arguments
    // Finds both the minimum and maximum and returns those as an array
    return [Math.min(numbers), Math.max(numbers)];
}

const [minValue, maxValue] = findMax(filterNumbers);
