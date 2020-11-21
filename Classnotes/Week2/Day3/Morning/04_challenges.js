//Write a function that takes a string and counts the number
//of upper ad lower case letters and console.logs them

function stringCaseCounter(stringToCount){
    let uppers = 0;
    let spaces = 0;
    for (letter of stringToCount){
        if (letter == letter.toUpperCase()){        //if an "if" statement is false it will not run.
            console.log(letter);
        }
    }
}

stringCaseCounter("This Is a Test String")

//Another version - Wow!!  it works!

function stringCaseCounter(stringToCount){
    let uppers = 0;
    let spaces = 0;
    for (letter of stringToCount){
        if (letter == letter.toUpperCase()){
            if (letter != " "){
                uppers++;
            } else {
                spaces++;
            }
        }
    } console.log(`uppers: ${uppers}\
    \nspaces: ${spaces}\
    \n${stringToCount}`)
}

stringCaseCounter("This Is a Test String")