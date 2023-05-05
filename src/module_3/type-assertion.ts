// type assertion 
let emni:any;
emni = "I love to work hard";
console.log((emni as string).length); // assertion declaretion 
<string>emni.length // another way assertion declaretion

const kmToGram = (kmValue: string|number) :string|number|undefined => {
    let gramValue;
    if(typeof(kmValue) === "number"){
        gramValue = kmValue*1000;
        // return `The converted Result: ${gramValue}`;
    }else if(typeof(kmValue) === "string"){
        gramValue = parseFloat(kmValue)*1000;
        // return `The converted Result: ${gramValue}`;
    }

    return `The converted Result: ${gramValue}`;
}

const resultTobeNumber = kmToGram(5) as number;
// const resultTobeNumber = <number>kmToGram(7) // another way declaretion using assertion 
const resultTobeString = kmToGram("10") as string;

