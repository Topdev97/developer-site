import { createContext } from "react";

export const AuthContext = createContext<{token:string | null,setToken:unknown}>({token:null,setToken:null})