import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <div>
          <NavLink className="btn link-btn" to="/create">Create New Post</NavLink>
          <button className='btn btn-sm btn-dark'>Dark</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar