import React, { useContext,ReactNode } from 'react'
import { Sidebar } from '../Sidebar'
import { AuthContext } from '../../context/AuthContext';
import './style.css'
type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({children}:LayoutProps) => {
  const {token} = useContext(AuthContext)
  return (
    <>

        {token && <Sidebar/>}
        <div  className='page-content'>
          {children}

        </div>
    </>
  )
}
