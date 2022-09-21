const repeatString = function(str, num) {
    if(num < 0) { return 'ERROR' }
    if(num === 0) { return '' };
    let repeatedStr = '';
    for(num; num > 0; num--) {
        repeatedStr += str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
