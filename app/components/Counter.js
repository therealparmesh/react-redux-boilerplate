import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Action = styled.button`
  border: none;
`

const Text = styled.span`
  font-weight: bold;
`

const Counter = ({ value, add, subtract }) => (
  <Container>
    <Action onClick={add}>+</Action>
    <Text>{value}</Text>
    <Action onClick={subtract}>-</Action>
  </Container>
)

Counter.displayName = 'Counter'

Counter.propTypes = {
  value: PropTypes.number,
  add: PropTypes.func,
  subtract: PropTypes.func
}

export default Counter
