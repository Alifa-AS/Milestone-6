const products = [
    {id: 1, name:'Lenovo', price: 65000},
    {id: 2, name:'dell', price:45000},
    {id: 3, name:'hp', price: 40000},
    {id: 4, name:'mac', price: 15000},
]

// similarity maintain kore
// has some properties, method

// by constructor method

class Product{
    country = 'Bangladesh';
    constructor(name){
            this.name = name;
        }
    speak(talk){
        console.log(`talking about ${talk}`)
        }
    }
    
    const lenevo = new Product('le le lenovo')
    console.log(lenevo);
    lenevo.speak('kita kou mia');


    // Example-2
    class Teacher{
        constructor(name, subject){
            this.name = name;
            this.subject = subject;
        }
        lecture(){
            console.log('sir is teaching math')
        }
    }

    const tapan = new Teacher('Tapan sir', 'physics')
    console.log(tapan);
    const rashid = new Teacher('Rashid', 'English')
    console.log(rashid);