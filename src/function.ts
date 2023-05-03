function addNum(num1:number, num2:number): number {
    return num1 + num2;
}

// arrow function
const multipaleNum2 = (num3:number, num4:number=5):string => {
    const result = num3*num4;
    return `result = ${result}`;
} 

console.log(multipaleNum2(3, 2));

const person: {
    name: string,
    age: number,
    balance: number,
    address: string,
    getBalance(money:number):void
} = {
    name: "sifat",
    age: 30,
    balance: 100,
    address: "Dhaka",
    getBalance(money:number){
        console.log(`your balance = ${this.balance + money}`)
    }

}