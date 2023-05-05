type myInfoType1 = {
    name: string,
    age: number,
    class: string
}
const myInfo1:myInfoType1= {
    name: "Osman",
    age: 23,
    class: "9",
}

const address1:string = "Dhaka, Bangladesh";
const newData1 = {
    ...myInfo,
    address
}

type mendatoryObjectType = {
    name: string,
    age: number,
}

const updateObject1 = <T extends mendatoryObjectType>(param: T)=> {

    const address:string = "Dhaka, Bangladesh";
    const newData = {...param, address};
    return newData;
}

const resultt1 = updateObject<myInfoType1>(myInfo1);
resultt1.class;