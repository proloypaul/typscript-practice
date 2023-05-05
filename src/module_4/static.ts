// example of static in class 
class Counter{
    static countValue:number = 0;
    
    static incrementValue(): number{
        return Counter.countValue = Counter.countValue + 1;
    }
    static decrementValue():number{
        return Counter.countValue = Counter.countValue - 1;
    }
}

console.log(Counter.incrementValue());
console.log(Counter.incrementValue());
console.log(Counter.incrementValue());
console.log(Counter.incrementValue());
console.log(Counter.decrementValue());
console.log(Counter.decrementValue());
console.log(Counter.decrementValue());
console.log(Counter.incrementValue());
console.log(Counter.incrementValue());

