// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = "Data is fetched";
//         if(data){
//             resolve(data);
//         }else{
//             reject("Faild to fetched data");
//         }
//     })

// }

// const calledPromise = async():Promise<void> => {
//     const result = await makePromise();
//     console.log(result)
//     // return result 
// }
// type promiseObject = {
//     data: string,
// }
// const makePromise2 = ():Promise<promiseObject> => {
//     return new Promise<promiseObject>((resolve, reject) => {
//         const data:promiseObject = {data: "data is fetched"};
        
//         if(data.data){
//             resolve(data);
//         }else{
//             reject("Failed to fetch data");
//         }
//     })
// }

// const calledPromise2 = async():Promise<void> => {
//     const result = await makePromise2();
//     console.log(result)
// }

// load api data 
interface userDataType{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchUserData = async(): Promise<userDataType> => {
    const respose = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = await respose.json();
    return result;
}
const loadUserData = async(): Promise<void> => {
    const result = await fetchUserData();
    console.log(result);
}
loadUserData();