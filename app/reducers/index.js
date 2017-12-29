import { combineReducers } from 'redux'
import actions from '../actions'

const counter = (state = 0, action) => {
  switch (action.type) {
    case actions.DECREMENT:
      return state - 1
    case actions.INCREMENT:
      return state + 1
    default:
      return state
  }
}

const getCounter = (state) => state.counter

export default combineReducers({
  counter
})

export {
  getCounter
}
