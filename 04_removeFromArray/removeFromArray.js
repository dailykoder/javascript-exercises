const removeFromArray = function(arr, ...args) {
    //loop through arguments array
    //check if index exists in main array with indexOf()
    //splice the elements from the args array
    //return new removed array
    if(args.length === 1) { 
        let index = arr.indexOf(args[0]);
        if(index > -1) {
            arr.splice(index, 1);
            return arr 
        } else {
            return arr
        }
    } else {
        for(let i = 0; i < args.length; i++) {
            let index = arr.indexOf(args[i]);
            if(index > -1) {
                arr.splice(index, 1);
            }
        }
        return arr
    }
};

// Do not edit below this line
module.exports = removeFromArray;
