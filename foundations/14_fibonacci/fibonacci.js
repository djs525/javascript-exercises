const fibonacci = function(member) {
    member = parseInt(member)
    if (member === 0){
        return 0;
    } else if (member < 0){
        return "OOPS"
    }
    one = 1
    two = 1
    for (let i = 0; i < member - 2; i ++){
        temp = one 
        one = one + two
        two = temp
    }
    return one
};

// Do not edit below this line
module.exports = fibonacci;
