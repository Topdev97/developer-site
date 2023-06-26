import React, { useContext, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { AuthContext } from '../../context/AuthContext'

type AuthRouteProps = {
  children: ReactNode;
}

export const AuthRoute = ({ children }: AuthRouteProps) => {
  const { token, setToken } = useContext(AuthContext)
  
  
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to={'/login'}/>
  }
}
