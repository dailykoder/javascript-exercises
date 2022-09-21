const reverseString = function(str) {
    //take a str input, split it to an array of letters
    //access end of array and put into another array
    //join array back into string using join()
    let splitStr = str.split('');
    let reversedArr = [];
    let counter = splitStr.length - 1;
    for(counter; counter >= 0; counter--) {
        reversedArr.push(splitStr[counter]);
    }
    return reversedArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
