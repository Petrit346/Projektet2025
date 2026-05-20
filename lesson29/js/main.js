var programmingL = ['java','html','python'];

console.log(programmingL);

console.log(programming[1]);

programmingL.pop();
console.log(programmingL);

programmingL.push('css');
console.log(programmingL);

programmingL.unshift('react');
console.log(programmingL);

programmingL.shift();
console.log(programmingL);

programmingL.splice(0,2, 'javascript');
console.log(programmingL);

console.log(Math.random()*100);

console.log(Math.floor(Math.random()*100));

var student=["Darisin","Donartin"];

var [s1,s2] = students;

console.log(s1);

var places = ["Prishtine","Prizreni","Peja","Gilani"];

var [, firstplace,secondplace] = places;

console.log(secondplace);