const numbers = [12, 7, 9, 5, 3];

const doubled = numbers.map(num => num * 2);
// console.log(doubled);
const  fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);
const halves = numbers.map(num => num / 2);
// console.log(halves);


// different type example
const friends = ['yoyo', 'Tomas', 'jj', 'Jhon'];

const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);