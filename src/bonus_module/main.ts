const addTwoNum22 = (param1:number, param2:number):number => {
    return param1+param2;
}

const substractionThreeNum22 = (param1:number, param2:number, param3:number):number => {
    return (param1 - param2 - param3);
}

const multiplication22 = (param1:number, param2:number):number => {
    const result = param1 * param2;
    return result;
}
const divisionNum22 = (param1:number, param2:number):number => {
    return param1/param2;
} 
const averageNum = (param1:number, param2:number, param3:number):number => {
    return (param1 + param2 + param3)/3;
}

export default {
    addTwoNum22,
    substractionThreeNum22,
    multiplication22,
    divisionNum22,
    averageNum
}