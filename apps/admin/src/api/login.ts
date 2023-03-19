import {Auth} from '../models/auth.model'
class AuthService{

    async login(email:string,password:string):Promise<Auth>{
        return {
            token:''
        }
    }

    

}


export default new AuthService()