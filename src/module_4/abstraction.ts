// interface class 
interface Ivehicle{
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Vehicle implements Ivehicle{

    constructor(public name: string, public brand: string, public price: number){};
    startEngine(): void {
        console.log("Call me for start your Engine")
    }

    stopEngine(): void {
        console.log("call me for stop your engine")
    }
    move(): void {
        console.log("call me for moving");
    }
    test(): void {
        console.log("I am for testing purpose");
    }
}

const callvehicle = new Vehicle("Car", "marchetic", 20000000);

// abstract class 
// We can follow abstract class but we doesn't create instance


abstract class Vehicle2{

    constructor(public name: string, public brand: string, public price: number){};
    abstract startEngine(): void 

    abstract stopEngine(): void 
    move(): void {
        console.log("call me for moving");
    }
    test(): void {
        console.log("I am for testing purpose");
    }
}

// We have to access abstract proparty when we extends abstract class otherwise it will be error
class Car extends Vehicle2{
    startEngine(): void {
        console.log("Call me for start your Engine")
    }

    stopEngine(): void {
        console.log("call me for stop your engine")
    } 
}