const palindromes = function (str) {
    //reverse given str
    //check if reversed str chars match original str
    //return false if at any point there are no matches
    //return true if statement doesnt break
    let splitStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '').split("");
    let endIndex = splitStr.length - 1;
    for(let startIndex = 0; startIndex < splitStr.length; startIndex++) {
        if(splitStr[startIndex] !== splitStr[endIndex]) {
            return false;
        }
        endIndex--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
