import React from 'react'
import styled from 'styled-components'
import Counter from '../containers/Counter'

const Container = styled.div`
  text-align: center;
`

const Heading = styled.h1`
  font-weight: bold;
`

const Main = (props) => (
  <Container>
    <Heading>Hello World!</Heading>
    <Counter />
  </Container>
)

Main.displayName = 'Main'

export default Main
