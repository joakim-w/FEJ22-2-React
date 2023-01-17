import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useThemeContext } from '../hooks/useThemeContext'

const Navbar = () => {

  const { isDarkTheme, theme, toggleTheme } = useThemeContext()
  const { isAuthenticated, logout } = useAuth()

  return (
    <nav className='navbar'>
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <div>
          {isAuthenticated && <NavLink className="btn link-btn" to="/create">Create New Post</NavLink>}
          <button onClick={toggleTheme} className='btn btn-sm btn-dark' style={{color: theme.text, backgroundColor: theme.ui}}>{isDarkTheme ? 'Light' : 'Dark'}</button>
          {isAuthenticated && <button onClick={logout} className='btn link-btn btn-sm' style={{marginRight: 0, marginLeft: '1rem'}}>logout</button>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar