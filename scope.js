// If any variable declared with var only that will be access out of second bracket and on the other hand if declared with const, let that will not access.

//Scope, block scope, access outer scope variable;

let bonus = 50;
function sum(first, second){
    let result = first + second + bonus;
    // console.log(result);
    // console.log(bonus);
    if(result>40){
        var mood = "Happy";
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(4, 6);
console.log(output);