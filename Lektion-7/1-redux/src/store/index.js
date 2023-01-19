import { applyMiddleware, compose, createStore } from 'redux'
import counterReducer from './reducers/counterReducer'
import quantityReducer from './reducers/quantityReducer'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

export const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)