// Object shorthand
function get_person(){
    let name = 'Reza';
    let age = 22;

    return {
        name,
        age,
        greet() {
            return `Salam ${this.name}`;
        }
    };
}

console.log(get_person().greet());
/*
---------------------------------------------
 */

// Object destructuring
let person = {
    name: 'Reza',
    age: 22,
};

let {name,age} = person;
console.log(name);
/*
---------------------------------------------
 */
// AJAX example

function getData({result, count}) {
    console.log(result, count);
}

getData({
    name: 'Reza',
    age: 22,
    result: ['foo', 'bar'],
    count: 25,
});