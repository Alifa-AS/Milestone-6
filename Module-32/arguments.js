function sum(a,b,c){
    // console.log(arguments[4])
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}

const total = sum(45, 89, 12, 33, 98, 56);
// console.log(total);

console.log(sum.length);