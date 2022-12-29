import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='bg-dark p-3 text-center'>
      <h1 className='text-white'>{ title }</h1>
    </div>
  )
}

export default Header