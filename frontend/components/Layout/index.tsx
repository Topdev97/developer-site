import React, { PropsWithChildren } from 'react'
import { Navbar } from '../Navbar'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
        <>
            <Navbar />
            <div className='pt-24 content'>
                {children}
            </div>
        </>
  )
}
