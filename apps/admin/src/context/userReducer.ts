import { Credentials } from "../models/credentials.models"
import { User } from "../models/user.model"

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