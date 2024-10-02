class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleep`);
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }

}

const kodom = new Person('kokom ali', 21)
console.log(kodom);
kodom.sleep();
const badam = new Person('kacha Badam', 23)
badam.sleep();

// vejal
const lazy = kodom.sleep;
lazy();