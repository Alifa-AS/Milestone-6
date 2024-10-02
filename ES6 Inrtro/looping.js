// for of use on array & string not in Object
// for imn use on object

const numbers = [1,3,4,6,8];
// for(let i = 0; i < numbers.length; i++){}

// while

// for of use korbo beshi
// for(const num of numbers){
    // console.log(num);
// }

// const nobab = 'siraj ud doula';
// for(const char of nobab){
//     // console.log(char);
// }

// object
const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true
};

//  for(const key of glass){
// //     console.log(key);  eta hbe na
//  }

for(const key in glass){
    const value = glass[key];
//     console.log(key, value);
  }


// optional
const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    const value = glass[key];
    console.log(key,value);
}