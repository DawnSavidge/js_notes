// SCOPE

// let x = 12;   // initializataion and assignment

// function scope(){
//     let x = 33;
//     console.log(x);
// }

// // scope();
// // console.log(x);

// let y = 12;
// function scope(){
//     y = 33;
//     console.log(y);
// }

// scope();
// console.log(y);

//Why use 'let' over 'var'?    - Var leaks.  "Let" - block scope - lives inside curly braces.

// var x = 12;

// function varTest(){
//     var x = 33;
//     if (true) {
//         var x = 45;
//         console.log(x);
//     }
//     console.log(x);
// }

// varTest();
// console.log(x);

let x = 12;

function letTest() {
    var x = 33;
    if (true) {         // The content block.
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

letTest();
console.log(x);     // node [file name] runs the code in PowerShell.
