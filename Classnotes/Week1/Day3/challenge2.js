// CHALLENGE 2
// Types Challenge
/* BRONZE
* Create an Object that contains a string, number, boolean, and object.
* Console.log the type of one of the values in the object.
 */
/* SILVER
* Write a conditional that checks the type of one of the values stored in the object 
* and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
 */

 //Object inside of an object.

let student = {
    firstName: 'Cody',
    age: 22,
    isSmart: true,
    }   
    console.log(typeof student);

    console.log(typeof student.firstName);

if (typeof student != "string"){
    alert("What are you?!");
}

typeof age;


    if (age != String) {
        console.log("What are you?!");
    }
