import { secretNumbers, add as sum, x, y, Math } from './math.js';
import Str from './str.js';

console.log('Script loaded');
console.log(secretNumbers);

const math = new Math();

const res = math.double(3);

console.log(res);

const strObj = new Str();

console.log(strObj.title);
console.log(strObj.capitalize('hola'));
console.log(strObj.lowercase('HOLA'));
console.log(strObj.concat('Bienvenidos', 'a', 'mi', 'mundo', 'loco'));
