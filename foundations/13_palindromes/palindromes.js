const palindromes = function (string) {
    l = 0
    r = string.length - 1
    string = string.toLowerCase()

    function isAlphanumeric(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
    }

    while (l <= r) {
        if (!isAlphanumeric(string[l])){
            l += 1
            continue
        }
        if (!isAlphanumeric(string[r])){
            r -= 1
            continue
        }

        if (string[l] != string[r]){
            return false
        }
        l += 1
        r -= 1
        
    }
    return true

};

// Do not edit below this line
module.exports = palindromes;
