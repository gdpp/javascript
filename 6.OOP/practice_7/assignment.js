class Course {
    constructor(title, len, price) {
        this.title = title;
        this.len = len;
        this.setPriceValue = price;
    }

    set setPriceValue(value) {
        if (value > 0) {
            this.price = value;
        } else {
            this.price = 89.99;
        }
    }

    get formattedPrice() {
        return `\$${this.price}`;
    }

    calculatePrice() {
        return this.len / this.price;
    }

    describeCourse() {
        return `The Course "${this.title}": has a duration of ${
            this.len
        } hrs. And It has a price of ${
            this.formattedPrice
        }. The Course offers ${this.calculatePrice()}/price`;
    }
}

class PracticalCourse extends Course {
    constructor(title, len, price, numExercises) {
        super(title, len, price);
        this.numOfExercises = numExercises;
    }
}

class TheoreticalCourse extends Course {
    constructor(title, len, price) {
        super(title, len, price);
    }

    publish() {
        return `${this.title} was published on 2022`;
    }
}

const course1 = new Course('Mastery Js', 52, 2.99);
const course2 = new Course('Dominate Css', 48, 1.99);

console.log(course1);
console.log(course2);

console.log(course1.describeCourse());
console.log(course2.describeCourse());

const practicalCourse = new PracticalCourse(
    'NodeJS From Zero To Hero',
    65.2,
    9.99,
    220
);

const theoreticalCourse = new TheoreticalCourse('SOLID Principles', 12, 1.99);
const theoreticalCourse2 = new TheoreticalCourse('Clean Code', 8, 0);

console.log(practicalCourse);
console.log(theoreticalCourse);

console.log(practicalCourse.describeCourse());
console.log(theoreticalCourse.describeCourse());
console.log(theoreticalCourse2.describeCourse());

console.log(theoreticalCourse.publish());
console.log(theoreticalCourse2.publish());

/*
? Use private fields to harden the getter/ setter approach from before. 
*/
