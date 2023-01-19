import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {

  const count = useSelector(state => state.count)

  return (
    <div>
      <h3>COUNTER</h3>
      <p>counter is = { count }</p>
      <button>+1</button>
      <button>-1</button>
    </div>
  )
}

export default Counter