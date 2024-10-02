// data access
const data = [{id: 1, name:'abul', address:'kochu khet'}];
console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        {id:1, name: 'dell', price: 50000},
        {id:2, name: 'mackbook', price: 150000},
    ]
}

// second product price
console.log(products.data[1].price);


const user = {
    id: 1177,
    name: 'raj',
    address:{
        street:{
            first: '45/1 uttora',
            second: ' poribag',
            third: 'no dori'
        },

        city: 'Dhaka'
    }
}

console.log(user.address.street.second);


const user2 = {
    id: 5002,
    name: 'pori bibi',
    address:{
        city:'chittagong',
        country: 'Bangladesh'
    }
}

console.log(user2.address.street?.second)