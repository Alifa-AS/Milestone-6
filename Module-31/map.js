const numbers = [ 4,6,8,4,9];

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled)


// callback function
function doubleIt(num){
    return num * 2;
}

const result = numbers.map(doubleIt);
// console.log(result);

// another way
const double2 =  n => n*2

const output = numbers.map(double2)
const output2 = numbers.map(n => n * 2);
console.log(output)
