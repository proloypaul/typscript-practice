// keyof guard
type multipaleNumTypes = string | number;
function multipaleNum(param1:multipaleNumTypes, param2: multipaleNumTypes): multipaleNumTypes{
    if(typeof param1 == 'number' && typeof param2 == 'number'){
        const result = param1 * param2;
        return result as number; 
    }else{
        return `Those value are ${param1 = typeof param1} && ${param1 = typeof param1}` as string;
    }
}
console.log(multipaleNum("3", "5"))
console.log(multipaleNum(6, 3))

// guard in 
type normalUserType = {
    name: string,
}
type adminUserType = {
    name: string,
    role: 'admin' // literal type
}

const normaluser:normalUserType = {
    name: "Pritish"
}
const adminUser:adminUserType = {
    name: "Sifat",
    role: 'admin'
}

function findOUtAdmin(user:normalUserType|adminUserType): string{
    if('role' in user){
        return 'admin';
    }else{
        return 'normal user'
    }
}

console.log(findOUtAdmin(adminUser));

// instence of guard
class Animal1{
    constructor(public name: string, public species:string, public sound:string){}
    makeSound():void{
        console.log(`This ${this.name} says ${this.sound}`);
    }
}

class Dog extends Animal1{
    constructor(public name: string, public species: string, public sound: string){
        super(name, species, sound)
    }
    makeBark():void{
       console.log(`I am dog bro I all ways barking`) 
    }
}
class Cat extends Animal1{
    constructor(public name: string, public species: string, public sound: string){
        super(name, species, sound)
    }
    makeMeaw():void{
       console.log(`I am cat bro I all says ${this.sound}`); 
    }
}
function getAnimal(animal: Animal1){
    if(animal instanceof Dog){
        animal.makeBark()
    }else if(animal instanceof Cat){
        animal.makeMeaw();
    }else{
        animal.makeSound();
    }
}
const callAnimal1 = new Dog("German Dog", "Dog", "Ghew Ghew") 
const callAnimal2 = new Cat("England Cat", "Cat", "Meaw Meaw") 
getAnimal(callAnimal2);