interface Model<Tproperties, Tmethods>{
    data: Tproperties,
    methods: Tmethods
} 

// properties
interface IUser{
    firstName: string,
    lastName: string
}

// Method
interface IMethod{
    fullName():string
}

type model = Model<IUser, IMethod>

class User implements model{
    data: IUser
    methods: IMethod

    constructor(firstName:string, lastName:string){
        this.data = {
            firstName,
            lastName
        },
        this.methods = {
            fullName: () => `User fullName ${firstName} ${lastName}`
        }
    }
}

const userResult = new User("Pritish", "Karmokar");
console.log(userResult.methods.fullName());