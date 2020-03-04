// Square any array element simple method;

const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

//Square any array element using map;

function square(element){
    return element * element;
}
const result = numbers.map(square);
console.log(result);

const result3 = numbers.map(function(element){
    return element * element;   
})
console.log(result3);

const result = numbers.map(x => x*x);
console.log(result);

//use filter for result of any condition;

const bigger = numbers.filter(x => x>5);
console.log(bigger);

// use find for result of any condition number after that;
const isThere = numbers.find(x => x > 5);
console.log(isThere);