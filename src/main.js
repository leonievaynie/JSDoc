import {add} from "./calculator.js"

/**
 * Represents the name of a student.
 * Type checking for string.
 * @type {string}
 */
const studentName = 12222;

/**
 * Type checking for array of numbers.
 * Problem: sobald ein Wert in Array korrekt ist -> wird nicht mehr falsch angezeigt
 * @type {Array<string>}
 */
const arrayOfNumbers = [ 2, false, 4, 5];

/**
 * Creates an object representing a Student.
 * @param {string} name - The student's full name.
 * @param {number} age - The student's age.
 * @param {boolean} isDeveloper - Whether or not the student is a developer.
 * @return {Object} The student object.
 */
function createStudent(name, age, isDeveloper) {
    //Todo show code completion for properties of name
    return {
        name:name,
        age: age,
        isDeveloper:isDeveloper
    }
};

function createPerson(name, age, isDeveloper) {

    return {
        name:name,
        age: age,
        isDeveloper:isDeveloper
    }
}

// Todo Vorteil: Zeigt auch gleich den type der Parameter der Funktion an in der Vorschau

class Student {
    /**
     * Creates a Student
     * @param {string} name The student's full name.
     * @param {number} age The student's age.
     * @param {boolean} isDeveloper Whether or not the student is a developer.
     * @constructor
     */
    constructor(name, age, isDeveloper) {
        /**
         * @property {string} name - Persons name
         */
        this.name = name;
        /**
         * @property {number} age - Persons age
         */
        this.age = age;
        /**
         * @property {boolean} isDeveloper
         */
        this.isDeveloper = isDeveloper;
    }

    /**
     * @property Function isCool - shows if a student is cool
     * @return {boolean}
     */
    isCool() {
        return this.name.length > 3
    };
}

// todo all Properties of students are showed in code completion

// link to a Class f.e
/**
 * Student one
 * See {@link Student}
 */
const student1 = new Student('Rahel', 24, true);

/**
 *
 * @param {Student} student
 */
function printStudent(student){
    console.log(`${student.name} is ${student.age} years old and is ${student.isDeveloper ? 'developer' : 'not developer'} `)
}

/**
 * A Person
 * @typedef {Object} Person
 * @property {number} id - Person ID
 * @property {string} name - Person name
 * @property {string|number} [age] - Person age
 * @property {boolean} isHealthy - Person is healthy
 */

/**
 * @type {Person}
 */
const person1 = {
    id: 1,
    name: 'Rahel Koch',
    age: 24,
    isHealthy: true
};
