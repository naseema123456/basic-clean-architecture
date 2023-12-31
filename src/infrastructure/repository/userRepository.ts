import User from '../../domain/user'
import { UserModel } from '../database/userModel'
import UserRepository from '../../use_case/interface/userController'

class userRepository implements UserRepository{
    async save(user:User){
        const newUser = new UserModel(user)
        await newUser.save()
        return newUser
    }

    async findByEmail(email:string){
        console.log('email exist check')
        const existingUser = await UserModel.findOne({email})
        if(existingUser){
            return existingUser
        }
        else{
            return null
        }
    }
}
export default userRepository