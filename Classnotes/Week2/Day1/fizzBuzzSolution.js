//*Challenge:
//Need the strictest one first

let FB = 30;

if (FB % 15 == 0) {
    console.log('Fizz Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz');
} else if (FB % 5 === 0){
    console.log('Buzz');
}else {
    console.log(FB);
};

//Switch

let FB = 45;

switch (true) {
    case (FB % 15=== 0):
        console.log('FizzBuzz');
        break;
    case (FB % 3 === 0):
        console.log('Fizz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz');
        break;
}



//Ternary - typically should be all on one line.

let FB = 40;

(FB % 15 === 0) 
    ? console.log('Fizz Buzz')
    : (FB % 3 === 0) ? console.log('Fizz')
    : (FB % 5 === 0) ? console.log('Buzz')
    : console.log(FB)


//For Loop

for (let i = 0; i,=100; i++) {
    if (i % 15 == 0) {
        console.log('Fizz Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i) % 5 === 0){
        console.log('Buzz');
    }else {
        console.log(i);
    };
}

