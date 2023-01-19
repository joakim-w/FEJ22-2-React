import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'

export const store = createStore(
  counterReducer
)