//Pure function

function add(n1, n2) {
    return n1 + n2;
}

//Inpure Function
function addRandom(n1) {
    return n1 + Math.random();
}

//Pure function with side effects

let prevRes = 0;

function addMopreNum(n1, n2) {
    const sum = n1 + n2;
    prevRes = sum;
    return sum;
}

//Factory Function
// A function that produces another function

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(100));

//closures
let user = 'Gus';

function greetUser() {
    let name = 'Anna';
    console.log('Hi ' + name);
}

let name = 'Edward';

user = 'Daniel';

greetUser();

//Recursion
// function powerOf(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
// }

function powerOf(x, n) {
    return x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));
