let name = "Justin"
console.log(name);

b();

function b(){
    console.log("I have been hoisted")
}

// variables have to be declared before they will run.
//functions do not. Hoisting will bring the requirement to run first.
