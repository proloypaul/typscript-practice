// Pick 
interface PersonType22{
    name: string,
    age: number,
    email: string,
    contactNo: number,
    address: string
}

type personAddressUsingPick = Pick<PersonType22, "address"|"contactNo"|"email">;

// Omit
type personAddressUsingOmit = Omit<PersonType22, "name"|"age">;

// To make all properties option using partial
type personOptionalType = Partial<PersonType22>;

// To make all properties required 
type personRequiredProperties = Required<PersonType22>

// To make all properties readonly
type personReadonlyProperties = Readonly<PersonType22>

// using indexing signature when we need all properties string
type myObjType = {
    [key: string]: string
}

const myObj:myObjType = {
    name: "Pritish",
    address: "Dhaka",
    class: "Seven"
}

// Record utility
type myObj2Type = Record<"name"|"address"|"class", string>

const myObj2:myObj2Type = {
    name: "Sifat",
    address: "Cumilla",
    class: "Eight"
}
