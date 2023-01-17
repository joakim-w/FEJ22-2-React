import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <>
      <div className="bg">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Root