//* Challenge:
//* Create a variable named FB that takes numbers
//* Write a conditional that:
//*Prints out "Fizz" if the number is divisible by 3
//*Prints out "Buzz" if the number is divisible by 5
//*Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
//*Write as a IF else, Switch, & Ternary


let FB = 30;

//If else from stackflow site

var i = 0;
for (i = 1; i <= 20; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

let FB = 30;
for (FB = 1; FB <=30; FB++){
    if (FB % 5 == 0 && FB % 3 ===0){
        console.log("FizzBuzz");
    } else if (FB % 5 === 0) {
        console.log('Buzz');
    } else if (FB % 3 === 0);
        console.log('Fizz');
}else{
        console.log(FB);
}

//Switch from stackflow

for (var x = 0; x<=20; x++){
    switch(x){
        case x%3==0:
            console.log("Fizz");
            break;
        case x%5===0:
            console.log("Buzz");
            break;
        case x%5===0 && x%3==0:
            console.log("FizzBuzz");
            break;
        default:
            console.log(x);
            break;
    };


};

//Ternary
for(i=1;i<=20;i++) {
    console.log(((i%3)?(i%5)?i:'Buzz':(i%5)?'Fizz':'FizzBuzz'));
    };



