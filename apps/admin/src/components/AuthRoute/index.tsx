import React from 'react'
import { Navigate } from 'react-router-dom'

export const AuthRoute = ({children}) => {
    
    if(){
        return {children}
    } else {
        <Navigate to={'/login'}/>
    }
}
