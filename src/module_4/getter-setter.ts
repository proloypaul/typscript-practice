class BankAccount{
    constructor(readonly id: number, public name: string, protected _balance: number){};
    
}

class Addamount extends BankAccount{
    constructor(readonly id: number, public name: string, protected  _balance: number){
        super(id, name, _balance);
    }
    // addMoney(amount:number){
    //     this._balance = this._balance + amount;
    // }
    // getBalance():void{
    //     console.log(`My Balance = ${this._balance}`);
    // }

    // getter
    get getBalance():string{
        return `My Balance = ${this._balance}`;
    }
    // setter
    set addMoney(amount:number){
        this._balance = this._balance + amount;
    }

}

// const bankAccount = new BankAccount(345, "Pritish", 500);
// bankAccount.getBalance();
const addAmount = new Addamount(345, 'Pritish', 500);
// addAmount.getBalance();
console.log(addAmount.getBalance);
addAmount.addMoney = 500;
// addAmount.getBalance();
console.log(addAmount.getBalance);
