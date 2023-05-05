// generic type using array
type GenericArray<T> = Array<T>

const arrayNum2: number[] = [45, 66, 4, 5];
const arrayNum21: Array<number> = [4, 5, 6]
const arrayNum22: GenericArray<number> = [6, 43, 3];

const arrayString: string[] = ["sifat", "fardin", "Osman"];
const arrayString1: Array<string> = ["Pritish", "Osman", "Vabuba"];
const arrayString2: GenericArray<string> = ["Promit", "Hridoy", "Niloy"];

type objTypes = {
    name: string,
    age: number,
    passed: boolean
}
const ArrayInsideObject: GenericArray<objTypes> = [
    {
        name: "Omrito",
        age: 45,
        passed: true
    },
    {
        name: "Mistry",
        age: 44,
        passed: true
    },
    {
        name: "Omit",
        age: 45,
        passed: false
    },

]
console.log(arrayNum22)
console.log(arrayString2)
console.log(ArrayInsideObject[1].name)

// generic type using tuple
type GenericTuple<a, b> = [a, b];

const copuleNames:GenericTuple<string, string> = ["Pritish", "Promi"];
const nameAndAge:GenericTuple<string, number> = ["Pritish", 45];

