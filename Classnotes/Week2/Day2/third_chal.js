/*
CHALLENGE


Make a tip calculator using a function
Have it RETURN the value
Capture that returned value in a VARIABLE
Print that variable
*/

//calciTip(100, 0.20) => 120

//Example from class:
// function fullName(fName, LName){
//     let full = fName + " " + LName;
//     console.log(`Hello, my name is ${full}`)
//     return full; // return allows you to use
//                     // the result of the functpion
// }


// my Attempt:
// let myFullName = ("Dawn", "Savidge");

// console.log(myFullName);

// function tipCalp(100, 0.20) => 120 {
//     let amt = 100 + 
// }




let calcTip = (bill, tipPerc) => {
    let totalMult = 1 + tipPerc
    return bill * totalMult;
}

let totalBill = calcTip(100, 0.2);
console.log(totalBill);


//OR

let totalBill2 = calTipTwo(100, 0.2);
console.log(totalBill2);

function calTipTwo (bill, tipPerc) {
    return (bill * tipPerc) + bill;
}