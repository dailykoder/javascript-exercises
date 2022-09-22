const fibonacci = function(num) {
    //set the first 2 numbers of the sequence 1 1 
    //until our fib array is filled up to the num given's length, add the last 2 values 
    //return indexed number from the fib array
    if(num < 0) { return 'OOPS' };
    let fibArr = [1, 1];
    let firstNumIndex = 0;
    let parsedNum = parseInt(num);
    while(fibArr.length <= parsedNum - 1) {
        let secondNumIndex = firstNumIndex + 1;
        let fibCalc = fibArr[firstNumIndex] + fibArr[secondNumIndex];
        fibArr.push(fibCalc);
        firstNumIndex++
    }
    return fibArr[parsedNum - 1];
};


// Do not edit below this line
module.exports = fibonacci;
