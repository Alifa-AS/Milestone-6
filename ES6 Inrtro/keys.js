const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true
};

console.log(glass);
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values);

// entries
const pair = Object.entries(glass);
// console.log(pair);
// array of array, two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

// delete an property from object
// rules-1
// delete glass.isCleaned;
// console.log(glass);

// rules-2 vejal delete
const{isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// freeze
// Object.freeze(glass);
// glass.source = 'Bangladesh';
// glass.price = 5000;
// delete glass.name;
// console.log(glass);


// seal
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);
