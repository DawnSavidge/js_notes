// Write a function that finds the Max of three numbers

function getMaxNum(a, b, c){
    let results = a;
    if (b > result){
        result = b;
    }
    if (c > result) {
        result = c;
    }
    return result;
}

console.log(getMaxNum(4, 13, 52));

//Another Approach - this one works

function getMaxNum(a, b, c){
    let test = [a, b, c]
    let max = a;
    for (num of test){
        if (num > max){
            max = num;
        }
    }
    return max;
}

console.log(getMaxNum(4, 13, 52));

//Math.max

function getMaxNum(a, b, c){
    return Math.max(...[a, b, c])

}
console.log(getMaxNum(4, 13, 52));

