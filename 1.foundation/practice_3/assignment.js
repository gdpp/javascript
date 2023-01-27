const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

let arrNum = [1, 4, 67, 99, 453];

if (randomNumber > 0.7) {
    alert('GREATER THAN 0.7');
}

for (let i = arrNum.length - 1; i > 0; i--) {
    console.log(arrNum[i]);
}

for (const item of arrNum) {
    console.log(item);
}

if (
    (randomNumber > 0.7 && randomNumber2 > 0.7) ||
    randomNumber < 0.2 ||
    randomNumber2 < 0.2
) {
    alert('DOUBLE CONDITON');
}
