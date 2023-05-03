// unknown type
const carSpeed = (speed: unknown) => {
    if(typeof speed === 'number'){
        // convert km to ms
    }
    if(typeof speed === 'string'){
        // first speed convert string to number then km to ms
    }
}
const carSpeed2 = (speed: number | null) => {
    if(typeof speed === 'number'){
        // convert km to ms
    }
    if(typeof speed === 'string'){
        // first speed convert string to number then km to ms
    }
}

carSpeed('10');
carSpeed2(10)
carSpeed2(null)

// never type 
// when you never return any type then use never type
function throwError(message:string):never{
    throw new Error(message);
}

throwError("Error hoyeche")