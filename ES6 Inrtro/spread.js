const max = Math.max(5,3,6,9,7,8)
const numbers = [3, 5, 34, 65, 33, 79]
const arrayMax = Math.max(...numbers);


// console.log(max)
// console.log(...numbers)
console.log(arrayMax);

// use spread operator to copy
const friends = [4,2,8,6,9];
const bondhu = friends;
bondhu.push(12);
const dosto = [...friends] //copy
friends.push(100)
console.log(dosto)
friends.push(friends)

// advanced
