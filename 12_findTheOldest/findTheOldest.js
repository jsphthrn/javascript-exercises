const findTheOldest = function(arr) {
    const current = new Date();
    arr.sort((personA, personB) => {
        let deathA;
        let deathB;
        (!personA.yearOfDeath) ? deathA = current.getFullYear() : deathA = personA.yearOfDeath;
        (!personB.yearOfDeath) ? deathB = current.getFullYear() : deathB = personB.yearOfDeath;
        return ((deathA - personA.yearOfBirth) > (deathB - personB.yearOfBirth)) ? -1 : 1;
    });

    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
