// Compact Example:

function reverseString(inputString){                      // a is a parameter
    return inputString.split("").reverse().join("");
}

let reversedString = reverseString("Justin");
console.log(reversedString);                    //saved it to 'reversedstring


//Methods - you have a method and a type - .log is a ??? -'dot notation'

//Objects on Monday


//inputString.split("").reverse().join(""); - after adding the last three lines we don't need this anymore.
let stringDotSplitReturn = inputString.split("")
console.log(stringDotSplitReturn)
let arrayDotReverseReturn = stringDotSplitReturn.reverse()
console.log(arrayDotReverseReturn)
let arrayDotJoinReturn = arrayDotReverseReturn.join("")
console.log(arrayDotReverseReturn)


// If you see a red dot on the screenLeft. - Or put a red dot - it's a breakpoint 

//Adapter Pattern - very common pattern in software design
let wordArr = ["Justin","is","making","a","string"]

function arrayToString(a){
    return a.join("")
}

console.log(reverseString(arrayToString(wordArr)));

//Or with this console.log
console.log(true > 1);

let x = 1;
if (x) {
    console.log(x)
}

//Call Back

function arrayToString(s){
    return a.join("")
}

let wordArr = ["Justin","is","making","a","string"]

function apply(func, data){
    return func(data);
}

let result = apply(arrayToString, wordArr);
console.log(result);

//Another way

console.log(apply((x) => x*x, 3));

//Some where ...

function arrayToString(a){
    return a.join("")
}

let wordArr = ["Justin","is","making","a","string"]

function apply(func, data){
    return func(data);
}

let result = apply(arrayToString, wordArr);
console.log(result);

//This is a simple use of a call back
apply(console.log, "This is data fro the callback")

//Call backs are aweseom cause I can make functions for them in-line

console.log(apply(x => x*10, 5))
//  - this is a fat arrow function identity


//Recursion
function printOne(arr){
    if (arr.length > 0){
        console.log(arr[0]);
        printOne(arr.slice(1));
    }
}

printOne(wordArr);