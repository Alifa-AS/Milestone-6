print5();
print10();
for(var i = 0; i<5; i++){
    // console.log(i);   
}
// console.log('outside', i);

// functional scope
function print5(){
    console.log('inside print5', 5);
}
const print10 = function(){
    console.log('inside print10', 10)
}