/**
 * 
 * 8 ways to get undefined
 * 1. variable that is not initialized will give undefined
 * 2.function with no return
 * 3.parameter that is not passed will be undefined
 * 4.if return has nothing on the right side will return undefined
 * 5.property that does not exists on an object will give you undefined
 * 6.assessing array elements outside of the index range
 * 7.deleting an element inside an array 
 * 8.set a value directly to undefined
 * 
 */
// 1.
// let first;
// console.log(first);

// 2.
// let second;
// function abc(a,b){
//     const total = a + b;
// }
// const result = abc();
// console.log(result);

// 3.
// function third(a,b,c,d){
    // const total = a + b+ c + d;
//     console.log(a,b,c,d);
// }
// third(2,5);
// console.log(result);

// 4.
function noNegative(a,b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(2,-5);
console.log(total);

// 5.
const fifth = {id: 2, name: ' ponchom' , age: 40}
// console.log(fifth.age, fifth.salary);

// 6.
const sixth = [4, 6, 1, 3, 9 ];
// console.log(sixth[1], sixth[5] , sixth[8])

// 7.
const seventh = [4, 6, 1, 3, 9 ];
// you should not do it , instead use splice() 
delete seventh[1];
// console.log(seventh[1], seventh[5] , seventh[8]);
// console.log(seventh);

// 8.
const eighth = undefined;
const ninth = null;
const data = {result: [], update: null}
console.log(typeof undefined);
console.log(typeof null);
