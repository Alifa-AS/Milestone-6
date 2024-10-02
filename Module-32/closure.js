function Kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServer = Kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());