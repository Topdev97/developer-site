import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../context/UserContext';
import { userReducerActions } from '../../context/userReducer';
import { useLocalStorage } from '../../hooks/useLocalStorage';

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
    const [state, dispatch] = useContext(userContext);
    const [token,setToken] = useLocalStorage('token',null)
    const handleLogoutClick = () => {
        setToken(null)
        
        
        dispatch({type:userReducerActions.LOGOUT})
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
            </li>

        </ul>
    </aside>
  )
}
