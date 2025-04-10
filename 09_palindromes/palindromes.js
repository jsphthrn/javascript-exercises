const palindromes = function (str) {
    REGULAR_EXPRESSION = /\w+/g;
    str = str.toLowerCase();
    str = str.match(REGULAR_EXPRESSION);
    str = str.join('');
    let a = str.split('');
    a.reverse();
    a = a.join('');
    a.toString();
    return (str === a) ? true : false;
    };

// Do not edit below this line
module.exports = palindromes;
