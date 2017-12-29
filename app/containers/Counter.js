import { connect } from 'react-redux'
import { getCounter } from '../reducers'
import { decrement, increment } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state, ownProps) => ({
  value: getCounter(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  add: () => dispatch(increment),
  subtract: () => dispatch(decrement)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
