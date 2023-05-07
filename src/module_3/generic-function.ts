// generic Function 
const genericFunction = <T>(param1: T): T[] => {
    // const result = param1*3/param2;
    return [param1];
} 

// generic function return tuple
const genericFunction2 = <T, T1>(param1: T, param2:T1): [T, T1] => {
    // const result = param1*3/param2;
    return [param1, param2];
} 

genericFunction<number>(5);
genericFunction<string>('pritish');
genericFunction2<number, string>(45, "Nazrul");
genericFunction2<number, Array<string>>(45, ["pritish", "Nazrul", "Niloy"]);

// spreed operator 
type myInfoType = {
    name: string,
    age: number
}
const myInfo:myInfoType= {
    name: "Osman",
    age: 23
}

const address:string = "Dhaka, Bangladesh";
const newData = {
    ...myInfo,
    address
}

const updateObject = <T>(param: T)=> {
    const address:string = "Dhaka, Bangladesh";
    const newData = {...param, address};
    return newData;
}

const resultt = updateObject<myInfoType>(myInfo);
resultt.age;

// task 
function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];
  
    return item[key];
  
  }
  
  const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  console.log(getArrayItem(users, 0, 'name'))