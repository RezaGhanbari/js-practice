function applyDiscount(cost, discount=.10) {

    return cost-(cost*discount);
}

console.log(applyDiscount(95, .4));
console.log(applyDiscount(95));