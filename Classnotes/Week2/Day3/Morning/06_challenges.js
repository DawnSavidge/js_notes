//When you learn more types you can do things like this
//type conversion

function findUniques(a){
    return Array.from(new Set(a));
}

function findUniques(a){
    return [...new Set(a)];
}

console.log(findUniques)[1, 2, 3, 4, 5, 6, 7, 3, 6, 1]));