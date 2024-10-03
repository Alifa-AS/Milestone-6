const user = {id: 1, name: 'Gorib Amir', job: 'actor'}
// javascript object notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);


/**
 * { id: 1, name: 'Gorib Amir', job: 'actor' }  - javascript   
   {"id":1,"name":"Gorib Amir","job":"actor"}  -JSON
 */


//    2nd example

const shop = {
    owner: 'Alia',
    address: {
        street: 'mouchak',
        city: 'dhaka',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor' , 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON)
console.log(shopObj);