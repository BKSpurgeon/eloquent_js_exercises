function isEven(x){
    if (x === 1){
        return false;
    }
    else if (x === 2) {
        return true;
    } 
    else {
        return isEven((x-2));
    }
}

module.exports = isEven;
