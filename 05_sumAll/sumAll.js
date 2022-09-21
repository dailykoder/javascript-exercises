const sumAll = function(startNum, endNum) {
    //check if either number is not a number, return error if so
    //check if either number is less than 0, return error if so
    //make sure the starting number is less than the end number
    //loop through the start to end numbers and add to sum total
    //return sum
    if(checkNumberValidity(startNum) && checkNumberValidity(endNum)) {
        let sum = 0;
        if(startNum > endNum) {
            for(endNum; endNum <= startNum; endNum++) {
                sum += endNum;
            }
        } else {
            for(startNum; startNum <= endNum; startNum++) {
                sum += startNum;
            }
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

const checkNumberValidity = function(num) {
    if(typeof num === 'number' && num >= 0) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = sumAll;
