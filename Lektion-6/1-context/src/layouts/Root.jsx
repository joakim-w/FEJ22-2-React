import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useThemeContext } from '../hooks/useThemeContext'

const Root = () => {

  const { theme } = useThemeContext()

  return (
    <>
      <div className="bg" style={{backgroundColor: theme.bg}}>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Root