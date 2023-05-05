class commonProparty{
    constructor(public name: string, public age:number, public address:string){}
    makeSleep(hours:number): string{
        return `${this.name} will sleep ${hours}hr`;
    }
}
class Student extends commonProparty{
    constructor(public name: string, public age: number, public address: string){
        super(name, age, address);
    }
    
    // makeSleep(hours:number): string{
    //     return `${this.name} will sleep ${hours}`;
    // }
}

class Teacher extends commonProparty{
    constructor(public name:string, public age:number, public address: string, public designation: string){
        super(name, age, address);
    }
    teacherClasses(classNum:number):string{
        return `Teacher ${this.name} will take ${classNum} clesses`
    }
}

// call instence 
const student11 = new Student("Pritish", 18, "America");
console.log(student11.makeSleep(9));
const teacher = new Teacher("Rajib", 45, "Chittagong", "jkkjk");
console.log(teacher.teacherClasses(6))
console.log(teacher.makeSleep(7))
