//Apply map, filter, find on an array of objects;
const students = [
    {id: 21, name: 'Sunny'},
    {id: 31, name: 'Reaz'},
    {id: 51, name: 'Samira'},
    {id: 11, name: 'Purnima'}
];

//Simple for loop method how to output objects name property;
const studentName =[];
for(let i=0; i<students.length; i++){
    const sName = students[i].name;
    studentName.push(sName);
}

console.log(studentName);

//map method to output objects name and id property;

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(x => x.id);
console.log(ids);
//Filter method to output objects for bigger id's property;
const bigger = students.filter(x => x.id>10);
console.log(bigger);
//Find method to output objects for one bigger property;
const biggerOne = students.find(x => x.id>10);
console.log(biggerOne);