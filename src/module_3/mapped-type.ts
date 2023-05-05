const arrayNum3: number[] = [45, 67, 34, 23, 56];
arrayNum3.map(value => console.log(value.toString())); // conver number to string inside array value

type houseDetailsType = {
    name: string,
    height: number,
    weight: number,
}
// mapped using generic
type modifyHouseDetailsType<T> = {
    // [key in keyof houseDetailsType] : houseDetailsType[key]; 
    
    // set type dynamicly using generic
    [key in keyof T] : T[key];
}

// const setHouseDetailsData : modifyHouseDetailsType = {name: "torior House", height: 10, weight: 100};
// console.log(setHouseDetailsData.height);

// set type dynamicly using generic declaration
const setHouseDetailsData:modifyHouseDetailsType<{name: string, height: string, weight: number}> = {name: "torior house", height: '20', weight: 345};

