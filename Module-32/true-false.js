/**
 * Truthy:
 * 1.true
 * 2.any number (+ve, -ve ) will be truthy, other than 0
 * 3.Any string other than empty string (' ')
 * 4. '0', 'false'
 * 5. {}, []
 * 
 * Falsy:
 * 1.false
 * 2. 0
 * 3('').Empty string
 * 4. undefined
 * 5. null
 * 
 */

const x = [];
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy')
}

// optional
// check falsy
const y = '';
if(!y){
    console.log('value is falsy')
}

// check  truthy
const z = {class: 9};
if(!!x){
    console.log('value is truthy')
}