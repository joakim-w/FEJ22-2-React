import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/features/counterSlice'

const Counter = () => {

  const { count } = useSelector(state => state.counter)
  
  const dispatch = useDispatch()
  
  return (
    <div>
      <h3>COUNTER</h3>
      <p>Counter is = { count }</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
    </div>
  )
}

export default Counter