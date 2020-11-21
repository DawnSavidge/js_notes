// Write a function that takes a list of numbers and returns a new list
//containing only the unique numbers


function findUniques(a){
    let result = []
    for (num of a){
        let match = false;
        for (unum of result){
            if (num == unum){
                match = true;
            }
        }
        if (!match){
            result.push(num);
        }
    }
    return result;
}

console.log(findUniques([1, 2, 3, 4, 5, 6, 7, 3, 6, 1]));

//His Code:
// Write a function that takes a list of numbers and returns a new list
// containing only the unique numbersfunction findUniques(a){
function findUniques(a){    
    let result = []
    for (num of a){
        let match = false;
        for (unum of result){
            if (num == unum){
                match = true;
            }
        }
        if (!match){
            result.push(num);
        }
    }
    return result;
}
console.log(findUniques([1, 2, 3, 4, 5, 6, 7, 3, 6, 1]));