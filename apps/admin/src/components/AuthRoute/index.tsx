import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const AuthRoute = ({children}) => {
    const {token,setToken} = useLocalStorage('token',null)
    if(){
        return {children}
    } else {
        <Navigate to={'/login'}/>
    }
}
