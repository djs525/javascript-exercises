const repeatString = function(word, count) {
    let string = "";

    if (count < 0) return "ERROR";

    for (let i = 0; i < count; i++){
        string += word;
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
