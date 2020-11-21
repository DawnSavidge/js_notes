// Write a function to sum all numbers in an array

function sumList(arr){
    let total = 0;
    for (num of arr){
        total += num;
    }
    return total;
}

console.log(sumList([1, 2, 3, 4, 5, 6]));

//second version

function sumList(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

console.log(sumList([1, 2, 3, 4, 5, 6]));

//third version - Justin's crazy solution - It works!

function sumList(arr){
    return arr.reduce((a, b) => a + b, 0);   //reduce - an array method
}

console.log(sumList([1, 2, 3, 4, 5, 6]));
