// Arrow Functions

let conArrow = () => console.log("this is concise");    //concise for only one line
conArrow();

//alternative:

let blockArrow = () => {                            //Curly brackets for multiple lines. called 'Block'
    console.log("This is a block arrow function");  //Also called Fat Arrow
}                                                   //Cannot be hoisted the same way.
blockArrow();                                       //Use this for now. Concise will come later.

let name = () => "Justin"

let name2 = () => {    //alternative to a fat arrow is a skinny arrow - not a function ->
    return "Justin"
}

console.log(name2());