const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// single parameter chile bracket chara o likhte parbo 
const getAge = (person) => person.age;
const student = {name: 'ananta', age: 45}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([3,4,5,6,2])
console.log(third);


const doubleIt = num => num*2; 

// no parameter
const getPI = () => Math.PI
console.log(getPI());

// large arrow function 
const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}