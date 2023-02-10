// const numbers = [1, 2, 3];

// const moreNumbers = new Array('Hi', 'Welcome'); // []

// const anotherMoreNumbers = Array.of(9, 10);

// const splitLetters = Array.from('level');

// console.log(splitLetters);

const hobbies = ['Sports', 'Cooking'];

// Add element to the end
hobbies.push('Reading');
//Add element to beginning
hobbies.unshift('Swimming');

console.log(hobbies);

//Remove last element in array
const poppedValue = hobbies.pop();
console.log(poppedValue);
// Remove first element in array
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
// hobbies[5] = 'Climbing';
// console.log(hobbies);

// Splice
hobbies.splice(1, 0, 'Good Food', 'Hello World');
console.log(hobbies);

const removedElement = hobbies.splice(0, 1);
console.log(hobbies);

console.log(removedElement);

//Slice
const slicedHobbies = hobbies.slice(1, 2);

//Concat
const newHobbies = hobbies.concat(['Listen Music', 'Writing']);

console.log(hobbies);
console.log(newHobbies);

//IndexOf
const index = newHobbies.indexOf('Good Food');
console.log(index);

const lastIndex = newHobbies.lastIndexOf('writing');
console.log(lastIndex);

// find
const writing = newHobbies.find((hobby) => {
    return hobby === 'Writing';
});

console.log(writing);

//findIndex
const writingIndex = newHobbies.findIndex((hobby) => {
    return hobby === 'Writing';
});

console.log(writingIndex);

//Includes
console.log(newHobbies.includes('Good Food'));

//For each
const prices = [12.99, 9.99, 199.99, 599.99, 999.99];
const tax = 0.19;
const taxAdjustPrices = [];

prices.forEach((price) => {
    taxAdjustPrices.push(price * (1 + tax));
});

console.log(taxAdjustPrices);

// Map()
const stocks = [15, 67, 89, 24, 10];
const iva = 0.16;

const ivaAdjustedStocks = stocks.map((stock) => {
    return stock * (1 + iva);
});

console.log(ivaAdjustedStocks);

//sort
const sortedStocks = ivaAdjustedStocks.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});

//Reverse
const reversed = [1, 2, 3].reverse();

console.log(reversed);

//Filter
const filteredPrices = prices.filter((p) => p > 50.0);

console.log(filteredPrices);

//Reduce
const sum = stocks.reduce((prevValue, currValue, currIndex, stocks) => {
    return prevValue + currValue;
}, 0);

console.log(sum);

const numbersAlt = [1, 2, 3];

const r = numbersAlt.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 3000);

console.log(r);

// Split and Join

const sentence = 'new york;10.99;2000';

const splitArr = sentence.split(';');

console.log(splitArr);

const fragments = ['HELLO', 'WORLD', ':)'];
const newSentence = fragments.join(' ');

console.log(newSentence);

// Spread operator (...)

const copiedFragments = [...fragments];

console.log(copiedFragments);

// Destructuring

const nameData = ['Gustavo', 'Perez', 'Mr', 31];

const [firstName, lastName, ...otherData] = nameData;
console.log(firstName, lastName);

// Sets
const ids = new Set([1, 2, 3]);

ids.add(2);
ids.delete(1);
console.log(ids.has(2));

console.log(ids.entries());

//Maps

const person1 = { name: 'name1' };
const person2 = { name: 'name2' };

const personData = new Map([[person1, [{ date: 'now', price: 10 }]]]);
console.log(personData);
console.log(personData.get(person1));
