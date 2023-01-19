import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/actions/quantityActions'

const Quantity = () => {

  const dispatch = useDispatch()
  const { quantity } = useSelector(state => state.quantity)

  return (
    <div>
      <h3>QUANTITY</h3>
      <p>quantity is = { quantity }</p>
      <button onClick={() => dispatch(increment())} >+1</button>
      <button onClick={() => dispatch(decrement(1))} >-1</button>
    </div>
  )
}

export default Quantity