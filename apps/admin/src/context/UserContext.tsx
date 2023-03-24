import { type Dispatch, Reducer, createContext, useReducer } from 'react'
import { userReducer } from './userReducer'
import { Credentials } from '../models/credentials.models'
import { User } from '../models/user.model'

const initialState: User | null = null
export const userContext = createContext<[User | null, Dispatch<{ type: string, payload?: User | null }>]>([initialState, () => {}])

// export const userContext = createContext<AppUser | Dispatch<{type:any; payload?:AppUser}>[]>([initialState,()=>{}]);

export const UserContext = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer<Reducer<User | null,{ type: string; payload?: User | null }>>(userReducer, initialState)
  return (
    <userContext.Provider value={[state, dispatch]}>
      {children}
    </userContext.Provider>
  )
}