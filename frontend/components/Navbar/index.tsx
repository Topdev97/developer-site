import Link from 'next/link'
import React from 'react'
import { Route } from '../../models/route.model'
import ActiveLink from '../ActiveLink'
const routes: Route[] = [
  {
    name: 'About me',
    path: '/',
    private: false,
    onlyPublic: false
  },
  {
    name: 'Services',
    path: '/services',
    private: false,
    onlyPublic: false
  },
  {
    name: 'Projects',
    path: '/projects',
    private: false,
    onlyPublic: false
  },
  {
    name: 'Contact',
    path: '/contact',
    private: false,
    onlyPublic: false
  }
]
export const Navbar = () => {
  // const { isAuth, toggleDark }: any = useContext(context)
  const [checkHamburger, setCheckHamburger] = React.useState(false)
  
  const toggleMobileMenu = () => {
    setCheckHamburger(!checkHamburger)
  }
  const toggleDark = () => {
    window.document.documentElement.classList.toggle('dark')
  }

  return (

    <nav className="z-10">
      <div className="menu--desktop primary-navigation">
        <div className="desktop-logo--container">
        </div>
        <ul className="hidden lg:flex gap-2">
          {routes.map((route) => {
            
            return (
              <li key={route.path}>
                <ActiveLink
                  activeClassName='link-active'
                  href={route.path}
                  className='link'
                >
                  {route.name}
                </ActiveLink>
              </li>
            )
          })}
          <li>
            <button onClick={toggleDark}><svg className="w-6 h-6 fill-black dark:fill-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg></button>
          </li>
        </ul>
      </div>
      <div className="menu--mobile">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" checked={checkHamburger} onChange={toggleMobileMenu} />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <div className="logo">
            <img src='' alt='' />
          </div>
          <div className="menu-items">
            {routes.map((route) => {
              
              return (
                <li key={route.path}>
                  <Link
                    onClick={toggleMobileMenu}       
                    href={route.path}
            
                  >
                    {route.name}
                  </Link>
                </li>
              )
            })}

            <li>
              <button onClick={toggleDark}><svg className="w-6 h-6 fill-black dark:fill-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg></button>
            </li>
          </div>
        </div>
      </div>
    </nav>

  )
}
