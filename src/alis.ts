type commonType = {
    company: "Programming Hero", // specipic it's call literal type
    name:string,
    age:number,
    isMarried: boolean,
    wifeName?: string // optional it all so called optional type
    readonly location: string
}
const user2: commonType = {
    company: "Programming Hero",
    name: "pritish",
    age: 50,
    isMarried: true,
    location: "Dhaka Bangladesh" // don't change location value case it is readonly 
}
const user3: commonType = {
    company: "Programming Hero",
    name: "sifat",
    age: 20,
    isMarried: false,
    location: "Dhaka Bangladesh" // don't change location value case it is readonly 
}

console.log(user3.age);