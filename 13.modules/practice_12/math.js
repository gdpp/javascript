export const secretNumbers = [1, 2, 4, 8];

export let x = 30,
    y = 100;

export let title = 'Math Module';

export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    return x / y;
}

export class Math {
    double(x) {
        return x * x;
    }
}
