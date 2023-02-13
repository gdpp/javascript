// class Person {
//     name = 'Gustavo';

//     constructor() {
//         this.age = 31;
//     }

//     greet() {
//         console.log(
//             `Hi my name is ${this.name} and I am ${this.age} years old.`
//         );
//     }
// }

function Person() {
    this.name = 'Gus';
    this.age = 31;
    this.greet = function () {
        console.log(
            `Hi my name is ${this.name} and I am ${this.age} years old.`
        );
    };
}
const person = new Person();
person.greet();
