//Arguments, array like objects, log all array elements;

// function add(num1, num2){
//     console.log([...arguments]);
//     return num1 + num2 + [arguments];
// }
// const result = add(55,16, 64, 45);
// console.log(result);

// function add(num1, num2){
//     console.log([...arguments]);

//     var result=0;
//     for(let i=0; i<arguments.length; i++){
//         const sum= arguments[i];
//         var result = result + sum;
//     }
//     return result;
// }
// const total = add(55,66,85,65,448);
// console.log(total);

function add(){
    return [...arguments].reduce((a,b) => a+b, 0);
}
const sum = add(555, 5 ,5,6,7,4);
console.log(sum);