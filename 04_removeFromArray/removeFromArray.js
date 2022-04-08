const removeFromArray = function(array, ...args) {
    let result = [...array];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if(array[i] === args[j]) {
                result.splice(i, 1, '');
            }
        }
    }
    return result.filter(n => n);
};

// Do not edit below this line
module.exports = removeFromArray;
