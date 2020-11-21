/*
CHALLENGE

 - Create a function that, when invoked, lists out the numbers 1 -10.
 */

//  My Attempt:
//  let x = 0;
//  let y = 1;

//  function add(x, y) {
//      var x = x;
//      let x;
//  }

//  add();
//  console.log(x);

//Erin
// function challenge() {
//     console.log(1,2,3,4,5,6,7,8,9,10);
// }
// challenge();

// let array = [1,2,3,4,5,6,7];

// function challenge(){
//     for (num in array){
//         console.log(array[num]);
//     }
// }


//Jusin

function counting() {
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}

// countin():

/*
CHALLENGE
 

  - Given the array, create a function that lists out the values individually.
  */

//   My Attempt:
//   let arr = ["Justin", "Ann", "Adam", "Joe"]

//   function individuals [arr: 0,1,2,3]{
//   return individuals;
//   }

//   console.log(individuals);

//Mia

// let arr = ["Justing", "Ann", "Adam", "Joe"];

// function name() {
//     for (i=)    // and whatever the fuck the rest of it was before it was gone.


//Justin


let arr = ["Justin", "Ann", "Adam", "Joe"]

function arrList() {
    for (name of arr) {
        console.log(name);
    }
}
arrList();