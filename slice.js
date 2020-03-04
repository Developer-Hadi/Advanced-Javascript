const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2,5); //only cut from index number2 to index number4 that's men upto involved index number;

const remove =nums.splice(2,3, 45, 64);
const together = nums.join(" ami ");
console.log(together);
// console.log(part);
console.log(remove);
console.log(nums);