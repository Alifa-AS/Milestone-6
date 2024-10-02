//  filter selects elements basedon a condition and return an array with the elements that full filled the condition

const numbers = [12, 7, 19, 25, 33];
const players = [75, 65, 72, 55, 58];
// const selected =  players.filter(p => p > 70);
// const selected =  players.filter(p => p > 80);
// const selected =  players.filter(p => p > 50);
const selected =  players.filter(p => p % 2 === 1);

console.log(selected);

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Kim', 'Safwar'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);