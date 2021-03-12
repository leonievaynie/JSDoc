/**
 * @module exampleDoc
 */

export {
    /**
     * Get the sum of two values.
     * @function
     * @param x {number}
     * @param y {number}
     * @return sum of x and y
     */
    plus
}
import { id } from "week3/church/church"


function fun1()    { return 1; } //fun1 is defined

/**
 * Arrow Function
 * @param x
 * @return {function(*): *}
 */
const plus = x => y => x + y;

/**
 * "normal" Function
 * @param x
 * @param y
 * @return {*}
 */
function plus2 (x, y) {
    return x + y;
}

/**
 * Class representing a person
 */
class Person {
    /**
     * Create a name.
     * @param {String} name
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * Shows if a Person is cool.
     * @returns {boolean} If name.length > 3
     */
    isCool() {
        return this.name.length > 3
    };
}

/**
 * Object representing a Student.
 * @param name
 * @returns {{setName: (function(*): *), getAge: (function(): number), getName: (function(): *), setAge: (function(*): *)}}
 * @constructor
 */
const Student = name => {
    let age = 0;
    return {
        getAge: () => age,
            setAge: newAge => age = newAge,
            getName: () => name,
            setName: newName => name = newName
    }
};

/**
 *
 * @param y
 * @returns {boolean}
 */
Array.prototype.eq = function eq(y) {

    if (this.length === y.length) {
        return this.every((elem, index) => (elem === y[index]));
    } else return false;

};


plus(id(fun1()));