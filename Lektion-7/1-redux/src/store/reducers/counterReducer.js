import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actiontypes'

const initState = {
  count: 0
}


// reducer har som uppgift att returnera ett nytt state
const counterReducer = (state = initState, action) => {

  switch(action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - action.payload
      }

    default:
      return state
  }

}

export default counterReducer;