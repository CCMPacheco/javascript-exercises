const sumAll = function(integer1, integer2) {
let sum = 0;
let minor = 0;
let mayor = 0;
let arrayOfIntegers = [];

if (typeof(integer1) !== 'number' || typeof(integer2) !== 'number' || integer1 < 0 || integer2 < 0) {
    return 'ERROR';
}

if (integer1 >= integer2) {
    mayor = integer1;
    minor = integer2;
} else {
    mayor = integer2;
    minor = integer1;
}

for (minor; minor <= mayor; minor++) {
    arrayOfIntegers.push(minor);
}
sum = arrayOfIntegers.reduce((a, b) => a + b)
return sum;

};

// Do not edit below this line
module.exports = sumAll;
