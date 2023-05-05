class Animal{
    // name: string;
    // species: string;
    // sound: string;

    constructor(public name: string, public species: string, public sound: string){
        // this.name = name,
        // this.species = species,
        // this.sound = sound
    }
    makeSound():void{
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

// call enostence | inostence 
const dog = new Animal("German shepard", "Dog", "Ghew Ghew");
const cat = new Animal("American", "Cat", "mew mew");
dog.makeSound()
cat.makeSound()

