import {add, multiply} from "./calculator.js"

/**
 * Represents the name of a student.
 * @type {string}
 */
const studentName = 'Rahel';

/**
 * Type checking for array of numbers.
 * @type {Array<number>}
 */
const arrayOfNumbers = [1, 2, 3, 4];

/**
 * Checks if a given number is an even number.
 * @param {number} number - A given number.
 * @return {boolean} - Whether or not a number is an even number.
 */
const isEvenNumber = number => number % 2 === 0;
console.log(isEvenNumber(6));

/**
 * Print out name on the console.
 * @param {string} studentName - Student name.
 * @return {void}
 */
const printName = studentName => console.log(studentName);
printName("Rahel");

/*
* Constructor
 */

/**
 * Creates an object representing a Student.
 * @constructor
 * @param {string} name - The student's full name.
 * @param {number} age - The student's age.
 * @param {boolean} isDeveloper - Whether or not the student is a developer.
 * @return {Object} The student object.
 */
const Student = (name, age, isDeveloper) => {
    return {
        name:name,
        age: age,
        isDeveloper:isDeveloper
    }
};

// mit JSDoc
const student = Student();
const newStudent = Student('Mike', 30, true);

const createPerson = (name, age, isDeveloper) => {
    return {
        name:name,
        age: age,
        isDeveloper:isDeveloper
    }
};

// ohne JSDoc
const newPerson = createPerson();


/*
* Documentation and properties of a class
*/

class Person {
    /**
     * Create a Person
     * @param {string} name - The persons's full name.
     * @param {number} age - The person's age.
     * @param {boolean} isStudent - Whether or not person is a student.
     */
    constructor(name, age, isStudent) {
        /**
         * @property {string} name - Persons name
         */
        this.name = name;
        /**
         * @property {number} age - Persons age
         */
        this.age = age;
        /**
         * @property {boolean} isStudent
         */
        this.isStudent = isStudent;
    }

    /**
     * @property Function isCool - shows if a student is cool
     * @return {boolean}
     */
    isCool() {
        return this.name.length > 3
    };
}

// link to a Class f.e
/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person('Rahel', 24, true);

/**
 * Print information about a student.
 * @param {Person} person
 * @return {void}
 */
const printPerson = (person) => {
    console.log(`${person.name} is ${person.age} years old and is ${person.isStudent ? 'student' : 'not student'} `)
};

printPerson(person1);

/*
* Create a type definition
*/

/**
 * An animal
 * @typedef {Object} Animal
 * @property {number} id - Animal ID
 * @property {string} name - Animal name
 * @property {string|number} [age] - Animal age
 * @property {boolean} isHealthy - Animal is healthy
 */

/**
 * @type {Animal}
 */
const animal = {
    id: 1,
    name: 'Gina',
    age: 10,
    isHealthy: true
};