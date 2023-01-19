import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/actions/counterActions'

const Counter = () => {

  const { count } = useSelector(state => state.counter)
  // const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>COUNTER</h3>
      <p>counter is = { count }</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(5))}>-5</button>
      <button onClick={() => dispatch(decrement(10))}>-10</button>
    </div>
  )
}

export default Counter