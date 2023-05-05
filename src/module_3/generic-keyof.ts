type personTypes = {
    name: string,
    age: number,
    class: number
}
type newType = "age" | "name" | "class";

type newTypeUsingKeyOf = keyof personTypes;

const aa: newType = 'name';
const bb:newTypeUsingKeyOf = 'class';

function getProperty<X, Y extends keyof X> (obj:X, key: Y){
 obj[key];
}

getProperty({name: "kdjls", age: 89, class: 8}, "class");