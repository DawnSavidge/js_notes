// Write a function that finds the Max of three numbersfunction getMaxNum(a, b, c){
    let result = a;
    if (b > result){
        result = b;
    } 
    if (c > result) {
        result = c;
    }
    return result;

}function getMaxNum(a, b, c){
    let test = [a, b, c];
    let max = a;
    for (num of test){
        if (num > max){
            max = num;
        }
    }
    return max;
    
}// Gets you thinking about the future
function getMaxNum(a, b, c){
    return Math.max(a, b, c);
}
console.log(getMaxNum(4, 13, 52));function getMaxNumFromArray(x){
    if (x && x.length > 0){
        let max = x[0];
        for (num of x){
            if (num > max){
                max = num;
            }
        }
        return max;
    }
}console.log(getMaxNumFromArray([2, 90, 42]));