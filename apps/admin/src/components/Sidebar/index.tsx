import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import { userReducerActions } from '../../context/UserContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { AuthContext } from '../../context/AuthContext';

const routes = [
    {
        path:'/projects',
        name:'Projects'
    },
    {
        path:'/labels',
        name:'Labels'
    },
    {
        path:'/profile',
        name:'Profile'
    }
]

export const Sidebar = () => {
    const {state, dispatch} = useContext(UserContext);
    const {token,setToken} = useContext(AuthContext)
    const [darkMode,setDarkMode] = useLocalStorage('darkmode')
    const handleLogoutClick = () => {
        setToken(null)
        dispatch({type:userReducerActions.LOGOUT})
      }
      const handleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
        setDarkMode(!darkMode)
      }

    return (
    <aside>
        <ul>
            {routes.map((route)=>{
                return (
                    <li key={route.name}>
                        <Link to={route.path} >{route.name}</Link>
                    </li>
                )
            })}
                        <li>
              <button onClick={handleLogoutClick} className="btn--secondary">Logout</button>
              <button onClick={handleDarkMode} >Dark Mode</button>
            </li>

        </ul>
    </aside>
  )
}
