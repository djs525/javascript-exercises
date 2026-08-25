const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, curPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const curAge = getAge(curPerson.yearOfBirth, curPerson.yearOfDeath);
        return oldestAge < curAge ? curPerson : oldest
    });

};

// Do not edit below this line
module.exports = findTheOldest;
