
import { User } from "./user.model";

export interface Credentials{
    user:User | null,
    token:string | null
}