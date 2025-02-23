const repeatString = function(string, numberRepeats) {
    if (numberRepeats < 0) {
        return ("ERROR");
    } else {
        let stringRepeat = "";
        for (let i = 1; i <= numberRepeats; i++) {
            stringRepeat += string;
        }
        return stringRepeat;
    }
};

// Do not edit below this line
module.exports = repeatString;
