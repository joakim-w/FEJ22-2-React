import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../actiontypes"


export const increment = () => {
  return { type: INCREMENT_QUANTITY }
}

export const decrement = (amount) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: amount
  }
}