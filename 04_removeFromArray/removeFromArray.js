const removeFromArray = function(array, ...args) {
    for (const value of args) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value && typeof array[i] === typeof value) {
                array.splice(i,1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
