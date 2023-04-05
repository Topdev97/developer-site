import { createContext } from "react";

export const AuthContext = createContext<{token:string | null,setToken:any}>({token:null,setToken:null})