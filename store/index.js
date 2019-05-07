import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer'

const makeStore = (initialState, options) => {
  return createStore(reducers, initialState, compose(applyMiddleware(thunk)))
}

export default makeStore