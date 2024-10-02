// static/ strongly type programming 
// js is a dynamic type programming language
// primitive data type - number, string, boolean(pecha pechi kora jabe na, 1 tai value thkbe)
// non-primitive - array, object (pecha pechi kora jabe)

// reassign value
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);


let p = {job: 'web developer'}
let q = p ;
// q = {job: 'Backend'}
q.job = 'front end developer'
console.log(p,q)