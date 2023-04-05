import { type Dispatch, Reducer, createContext, useReducer } from 'react'

import { User } from '../models/user.model'

export const initialState: User | null = null


export const userReducerActions = {
  SET_USER: 'SET_USER',
  LOGOUT: 'LOGOUT'
}

export const userReducer = (
  state: User | null,
  action: { type: string, payload?: User | null }
) => {
  switch (action.type) {
    case userReducerActions.SET_USER:
      
      const user = action.payload as User | null
      
      return user

    case userReducerActions.LOGOUT:
      return null
    default:

    return state
  }
}


export const UserContext = createContext<{state:User | null,dispatch: Dispatch<{ type: string, payload?: User | null }>}>({state:initialState, dispatch:() => {}})

// export const userContext = createContext<AppUser | Dispatch<{type:any; payload?:AppUser}>[]>([initialState,()=>{}]);
