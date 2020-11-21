/*
CHALLENGE
************    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

// let firstName = 'Dawn';
// let lastName = 'Savidge';

// function wholeName(x, y){
//     let total = x + y;
//     console.log(`Hello, My name is ${firstName} + ${lastName} = ${total}`) 
// }

// wholeName(x, y)
// wholeName("Dawn", "Savidge");

// Example from class:

// let x = 5;
// let y = 6;

// function add2(num1, num2) {
//     let total = num1 + num2;
//     console.log(`${num1} + ${num2} = ${total}`);
// }

// add2(x, y)
// add2(7, 10);


//Solution:


function fullName(fName, LName){
    let full = fName + " " + LName;
    console.log(`Hello, my name is ${full}`)
}

fullName("Dawn", "Savidge");

