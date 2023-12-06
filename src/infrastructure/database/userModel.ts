import mongoose,{Document,Schema} from "mongoose";

interface User extends Document{
    name:String,
    email:String,
    password : String,
}

const userSchema : Schema<User> = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
}) 

const UserModel = mongoose.model<User>('user',userSchema)
export {UserModel}