import React, { useContext,ReactNode } from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar'
import { AuthContext } from '../../context/AuthContext';

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({children}:LayoutProps) => {
  const {token} = useContext(AuthContext)
  return (
    <main>

        <Navbar />
        {token && <Sidebar/>}
        {children}
    </main>
  )
}
