import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../actiontypes'

const initState = {
  quantity: 0
}


// reducer har som uppgift att returnera ett nytt state
const quantityReducer = (state = initState, action) => {

  switch(action.type) {
    case INCREMENT_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1
      }

    case DECREMENT_QUANTITY:
      return {
        ...state,
        quantity: state.quantity - action.payload
      }

    default:
      return state
  }

}

export default quantityReducer;