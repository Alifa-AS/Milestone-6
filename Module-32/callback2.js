function number(num1,num2){
    num2(num1)
}
function  callback(call1){
    console.log('value', call1)
}
number(23,callback)