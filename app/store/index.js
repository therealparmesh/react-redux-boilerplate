import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const enhancer = composeWithDevTools(applyMiddleware(thunk))

export default createStore(reducers, {}, enhancer)
