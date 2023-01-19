import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actiontypes"


export const increment = () => {
  return { type: INCREMENT_COUNTER }
}

export const decrement = (amount) => {
  return {
    type: DECREMENT_COUNTER,
    payload: amount
  }
}