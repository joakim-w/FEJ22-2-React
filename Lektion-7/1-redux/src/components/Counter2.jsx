import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../store/actions/counterActions'

const Counter2 = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>COUNTER 2</h3>
      <p>counter is = { count }</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button>-1</button>
    </div>
  )
}

export default Counter2