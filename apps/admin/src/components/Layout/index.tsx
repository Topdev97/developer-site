import React, { useContext } from 'react'
import { Navbar } from '../Navbar'
import { userContext } from '../../context/UserContext'
import { Sidebar } from '../Sidebar'

export const Layout = ({children}:any) => {
  const [state,dispatch] = useContext(userContext)
  return (
    <main>

        <Navbar />
        {state && <Sidebar/>}
        {children}
    </main>
  )
}
