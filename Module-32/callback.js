function greeting(greetingHandler, name){
    greetingHandler(name); //call kora
}
// const name ('Halim mama')
// const numbers = [34,43,23];
// const laptop = {price: 12000, brand: 'lenevo', memory: '8gb' }

function greetingHandler(name){   //declare
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('good Evening', name)
}
function greetNight(name){
    console.log('good Night', name)
}
greeting(greetingHandler, 'tom hanks'); //pass value
greeting(greetingHandler, 'john doe'); 
greeting(greetingEvening, 'tom brady'); 
greeting(greetEvening, 'samira khan');
greeting(greetNight, 'sharuk khan');