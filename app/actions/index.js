import mirrorCreator from 'mirror-creator'

const actionTypes = mirrorCreator([
  'DECREMENT',
  'INCREMENT'
])

const decrement = (dispatch, getState) => dispatch({
  type: actionTypes.DECREMENT
})

const increment = (dispatch, getState) => dispatch({
  type: actionTypes.INCREMENT
})

export default actionTypes

export {
  decrement,
  increment
}
