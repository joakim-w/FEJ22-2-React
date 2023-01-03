import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='Header'>
      <h1>{ title }</h1>
      <button className='clear-btn'>Remove all</button>
    </div>
  )
}

export default Header