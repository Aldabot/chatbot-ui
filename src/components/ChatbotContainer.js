import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 10px;
  width: 50vw;
  height: 100vh;
  background-color: gray;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`

const ChatbotContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default ChatbotContainer
