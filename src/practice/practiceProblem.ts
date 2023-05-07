// 1. Convert the following JavaScript array into a TypeScript tuple
// const userInfo = [101, "Ema", "John", true,  , "2023"];

// solve 
const userInfo2: [number, string, string, boolean, void, string] = [101, "Ema", "john", true, ,"2023"]

// 2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

const compareTwoArrayValue = (param1:number[], param2:number[]):number[] => {
    let result:number[] = [];
    for(let i:number = 0; i<param1.length; i++){
        for(let j:number=0; j<param1.length; j++){
            if(param1[i] === param2[j]){
                result.push(param1[i])
            }
        }
        
    }
    return [...result]
}

const arr1:number[] = [1, 2, 3, 4, 5];
const arr2:number[] = [2, 4, 6, 8];
// console.log(compareTwoArrayValue(arr1, arr2))

//3. You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
        // Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface ProductType{
    id: number,
    name: string,
    price: number,
    category: string,
}

const productsArray: ProductType[] = [
    {
        id: 1,
        name: "Hp",
        price: 50000,
        category: "laptop"
    },
    {
        id: 2,
        name: "Sampony",
        price: 30000,
        category: "mobile"
    },
    {
        id: 3,
        name: "Lenovo",
        price: 90000,
        category: "laptop"
    },
    {
        id: 4,
        name: "type C charger",
        price: 50000,
        category: "charger"
    },
]

//  solve by typescript function
const productCategoryFunc = (param: ProductType[]): ProductType[] => {
    const result = param.filter(product => product.category === "laptop");
    return result;
}
// console.log(productCategoryFunc(productsArray));

// try to solve using Pure Generic function
// const GenericFunc = <T>(param: T[]): T[] => {
//     const result = param.filter(product => product.category === "laptop")
//     // console.log(result)
//    return result
// };
// const resultOfGenericFunc = GenericFunc(productsArray);
// console.log(resultOfGenericFunc);

// solved using alias and Generic 
type GenericFunc1<T> = (param1: T) => ProductType[]
const getLaptop:GenericFunc1<ProductType[]> = (param1) => {
    const result = param1.filter(product => product.category === "laptop");
    // console.log(result);
    return result;
}
// console.log(getLaptop(productsArray));

// 4.Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type productTupleTypeG<T, T1, T2> = [T, T1, T2];  // generic tuple
type productArrayG<T> = Array<T>; // generic array
///product in array of type using Generic 
const productsArray1:productArrayG<productTupleTypeG<string, number, number>> = [["Hp", 56000, 2], ["Dell", 70000, 2], ["Lenovo", 80000, 1], ["Asus", 50000, 3]];

let totalCost:number = 0;
productsArray1.map(product =>{
    totalCost = totalCost + product[1]*product[2];
})
console.log(totalCost);

// another away
// for(let i:number=0; i<productsArray1.length; i++){
//     const productcost: number = productsArray1[i][1];
//     result1 = result1 + productcost;
// }
// console.log(result1);


// 5.Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

const numbersOfArray: number[] = [34, 23, 56, 37, 2];
let sumOfEven:number = 0;
for(let i:number=0; i<numbersOfArray.length; i++){
    if(numbersOfArray[i]%2 == 0){
        // console.log(numbersOfArray[i]);
        sumOfEven = sumOfEven + numbersOfArray[i];
    }
}
// console.log(`sum of even number: ${sumOfEven}`);

// 6. Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface PersonType{
    name: string,
    age: number,
    email: string
}

const persionArray:PersonType[] = [
    {
        name: "Pritish",
        age: 18,
        email: "pritish@gmail.com"
    },
    {
        name: "Fardin",
        age: 19,
        email: "fardin@gmail.com"
    },
    {
        name: "Sifat",
        age: 17,
        email: "sifat@gmail.com"
    },
    {
        name: "Nazrul",
        age: 22,
        email: "nazrul@gmail.com"
    }
]

const collectDataUsingEmail = (param1:PersonType[], param2:string|null) => {
    // console.log(param2)
    let result: string | PersonType = 'Email nai';
    param1.map(person => {
        if(param2 as string in person){
            result = person as PersonType;
        }else{
            result = "Email ache" as string;
        }
    });
    console.log(result);
}

// collectDataUsingEmail(persionArray, 'nazrul@gmail.com');