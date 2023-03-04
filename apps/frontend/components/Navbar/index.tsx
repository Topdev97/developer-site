import Link from 'next/link'
import React from 'react'
import ActiveLink from '../ActiveLink'
import { CV } from '../CV'
import { config } from '../../config'
const routes = [
  {
    name: 'About me',
    path: '/',
    external:true
  },
  {
    name: 'Projects',
    path: '/projects',

    external:true
  },
  {
    name: 'Contact',
    path: '/contact',

    external:true
  }
]
export const Navbar = () => {
  
  const toggleDark = () => {
    window.document.documentElement.classList.toggle('dark')
  }

  return (

    <nav className="z-10">
      <div className="logo">
        <img src="" alt="Logo" />
        </div>      
        <ul className="menu">
          {
            routes.map((route)=>{
              if(route.external){

                return <a className='nav-link' href={route.path}>{route.name}</a>
              } else {
                return <Link className='nav-link' href={`${config.basePath}/${route.path}`}>{route.name}</Link>
              }
            })
          }
        </ul>
    </nav>

  )
}
