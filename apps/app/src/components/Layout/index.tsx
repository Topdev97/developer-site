import React from 'react'
import { Navbar } from '../Navbar'

export const Layout = ({children}:any) => {
  return (
    <main>
        <Navbar />
        {children}
    </main>
  )
}
