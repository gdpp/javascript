const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 30;
const MONSTER_ATTACK = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEALTH = 'PLAYER_HEALTH';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let battleLog = [];
let currentPlayerHealth = playerLife;
let currentMonsterHealth = playerLife;
let hasBonusLive = true;
let playerLife;

try {
    playerLife = getMaxValue();
} catch (error) {
    console.log(error);
    playerLife = 100;
    alert('Invalid user input, not a number');
    throw error;
}

adjustHealthBars(playerLife);

function getMaxValue() {
    const enteredValue = prompt('Enter the life for you and the monster:');
    const parsedValue = parseInt(enteredValue);

    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw { message: 'Invalid user input, not a number' };
    }

    return parsedValue;
}

function onAttack() {
    attackMonster(MODE_ATTACK);
}

function onStrongAttack() {
    attackMonster(MODE_STRONG_ATTACK);
}

function onHealPlayer() {
    let healValue;

    if (currentPlayerHealth >= playerLife - HEAL_VALUE) {
        alert(`You can't heal to more than your max initial health.`);
        healValue = playerLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;

    writeToLog(
        LOG_EVENT_PLAYER_HEALTH,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth,
        'PLAYER'
    );

    endRound();
}

function attackMonster(mode) {
    const playerDamage =
        mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent =
        mode === MODE_ATTACK
            ? LOG_EVENT_PLAYER_ATTACK
            : LOG_EVENT_PLAYER_STRONG_ATTACK;

    const damage = dealMonsterDamage(playerDamage);
    currentMonsterHealth -= damage;

    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth,
        'MONSTER'
    );

    endRound();
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK);
    currentPlayerHealth -= playerDamage;

    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth,
        'PLAYER'
    );

    if (currentPlayerHealth <= 0 && hasBonusLive) {
        hasBonusLive = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(currentPlayerHealth);
        alert(`Extra life used!`);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
        reset();
        writeToLog(
            LOG_EVENT_GAME_OVER,
            null,
            currentMonsterHealth,
            currentPlayerHealth,
            'N/A'
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lost!');
        reset();
        writeToLog(
            LOG_EVENT_GAME_OVER,
            null,
            currentMonsterHealth,
            currentPlayerHealth,
            'N/A'
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('DRAW!');
        reset();
        writeToLog(
            LOG_EVENT_GAME_OVER,
            null,
            currentMonsterHealth,
            currentPlayerHealth,
            'N/A'
        );
    }
}

function reset() {
    currentPlayerHealth = playerLife;
    currentMonsterHealth = playerLife;
    resetGame(playerLife);
}

function writeToLog(event, value, monsterHealth, playerHealth, target) {
    let logEntry;

    logEntry = {
        event,
        value,
        target,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
    };

    battleLog.push(logEntry);
}

function printLog() {
    for (let i = 0; i < battleLog.length; i++) {
        console.log('----------');
    }

    let i = 0;
    for (const logEntry of battleLog) {
        console.log(`#${i}`);
        for (const item in logEntry) {
            console.log(item);
            console.log(`${item} => ${logEntry[item]}`);
        }
    }
}

attackBtn.addEventListener('click', onAttack);
strongAttackBtn.addEventListener('click', onStrongAttack);
healBtn.addEventListener('click', onHealPlayer);
logBtn.addEventListener('click', printLog);
