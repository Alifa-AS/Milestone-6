class Vehicle {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari cholena chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
       super(name,price);
       this.seat = seat; 
       this.ticketPrice = ticketPrice; 
    }
}

const BRTC = new Bus('BRTC bus', 50000, 52, 100);
    console.log(BRTC);

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name,price);
        this.load = load;
    }
}