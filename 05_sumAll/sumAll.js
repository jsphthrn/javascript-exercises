const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0 || num1 !== Number(num1.toFixed(0)) || num2 !== Number(num2.toFixed(0))) {
        return "ERROR";
    } else {
        let finalSum = 0;
        if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                finalSum += i;
            }
        } else { 
            for (let i = num1; i <= num2; i++) {
                finalSum += i;
            }
        }
        return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
