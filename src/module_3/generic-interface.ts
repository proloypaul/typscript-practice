// generic interface
interface GenericObjectStudent<T, T2, T3, T4=null>{
    id: number,
    name: T,
    passed: boolean,
    address?: T4,
    age: T2,
    school: T3
}

interface schoolDetails{
    sclName: "EklashPur High School",
    Head: "Saleh Ahmed",
    class: number
}
const student1:GenericObjectStudent<string, number, schoolDetails, string> = {
    id: 1,
    name: "Promit",
    passed: true,
    address: "Dhaka",
    age: 34,
    school: {
        sclName: "EklashPur High School",
        Head: "Saleh Ahmed",
        class: 8
    }
}
const student2:GenericObjectStudent<string, number, schoolDetails, undefined> = {
    id: 1,
    name: "Promit",
    passed: true,
    age: 34,
    school: {
        sclName: "EklashPur High School",
        Head: "Saleh Ahmed",
        class: 6
    }
}