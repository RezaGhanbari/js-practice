// ES5 model
function sum(...numbers){
    return numbers.reduce(function (prev, curr) {
        return prev+curr;
    })
}

console.log(sum(2,3,4,5,6,1));

// ES6 model
// REST
let sum2 = (...numbers) => {
    return numbers.reduce( (prev, curr) => prev+curr)
};
console.log(sum2(2,3,5,6,1));

// Spread
let sum3 = (x,y) => {
    return x+y;
};

let nums = [1,2];
console.log(sum3(...nums));