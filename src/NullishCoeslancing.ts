// nullish Coeslancing operator
const home: string = "";
const home2: null = null;
const result:string = home ?? "NO home" // default no home
const result2:string = home2 ?? "No Home";
console.log(result, result2);