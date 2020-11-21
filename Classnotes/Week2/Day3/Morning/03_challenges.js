//Write a function that reverses a string

//Wow, the answer looks so strange i thought it was an error!!
function reverseString(a){
    let result = "";
    for (let i = a.length - 1; i >= 0; i--){
        result += a[i];
    }
    return result;
}

console.log(reverseString("This is something to reverse"));


function reverseString(a){
    let result = [];
    let length = a.length;
    for (let i = 0; i < length; i++){
        result.push(a.charAt(length - i - 1));
    }
    return result.join('');
}

console.log(reverseString("This is something to reverse"));



// Compact Example - chaining method - good interview question

function reverseString(a){
    return a.split("").reverse().join("");
}

console.log(reverseString("This is something to reverse"));