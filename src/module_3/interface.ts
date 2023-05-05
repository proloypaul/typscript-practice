// alis declaretion
type A_user = {
    name: string,
    age: number,
}

const userWithAlish:A_user = {
    name: "Alis",
    age: 4
}
// add more key using alis
type updateA_user = A_user &{
    role: string
}
const updatedUserWithAlis:updateA_user = {
    name: "updatedAlis",
    age: 4,
    role: "student"
}

// interface declaretion
interface I_user{
    name: string,
    age: number,
} 

const userWithInterface:I_user = {
    name: "interface",
    age: 6
}

// add more key or extends more key in I_user

interface updatedI_user extends I_user{
    role: string,
    passed: boolean
}

const updatedUserWithInterface:updatedI_user = {
    name: "updated interface",
    age: 6,
    role: "student",
    passed: true
}

// function using declare using alis and interface 
// alis
type commonFunctionTypeUsingAlis = (num1:number, num2: number) => number
// using case
const dividedTwoNum:commonFunctionTypeUsingAlis = (a, b) => {
    const result = a/b;
    return result;
}
const subNum:commonFunctionTypeUsingAlis = (a, b) => {
    const result = a - b;
    return result;
}

// interface
interface commonFunctiontypeUsingInterface{
    (a:number, b:number) : number;
}
// use case
const dividedTwoNum1:commonFunctiontypeUsingInterface = (a, b) => {
    const result = a/b;
    return result;
}
const subNum1:commonFunctiontypeUsingInterface = (a, b) => {
    const result = a - b;
    return result;
}

// array alis and interface
// alis
type arrayNumType = number[];
const arrayNum:arrayNumType = [3, 4, 6];

// interface
interface arrayNumTypeUsingInterface{
    [index: number] : number;
    // [index: number] : string; // string of array
}
const arrayNum1:arrayNumTypeUsingInterface = [3, 4, 6, 5, 5];