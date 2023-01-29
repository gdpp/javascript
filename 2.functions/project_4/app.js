const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const defaultUserChoice = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let playerSelection;
let computerSelection;
let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(
        `${ROCK}, ${PAPER} or ${SCISSORS}?`,
        ''
    ).toUpperCase();

    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice, We chose ${defaultUserChoice} for you`);
        return defaultUserChoice;
    }

    return selection;
};

const getComputerChoice = () => {
    const random = Math.random();

    if (random < 0.34) {
        return ROCK;
    } else if (random < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) =>
    cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
          (cChoice === PAPER && pChoice === SCISSORS) ||
          (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;

const sumUp = (result, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    for (const x of numbers) {
        result(validateNumber(x));
    }
};

const showResult = (num) => {
    alert(`the number is ${num}`);
};

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }

    gameIsRunning = true;
    console.log('Game is starting...');
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    const winner = getWinner(computerSelection, playerSelection);
    let message = `You picked ${playerSelection} and the computer picked ${computerSelection}, therefore`;

    if (winner === RESULT_DRAW) {
        message = message + ' you had a draw';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + ' you win';
    } else {
        message = message + ' the computer win';
    }

    alert(message);
    gameIsRunning = false;
});

console.log(sumUp(showResult, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
