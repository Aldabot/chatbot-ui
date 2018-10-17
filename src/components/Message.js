import React from 'react'
import styled from 'styled-components'

const BotContainer = styled.div`
  flex-basis: 80%;
  margin: 0 0 6px 16px;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
`
const HumanContainer = styled.div`
  flex-basis: 80%;
  margin: 0 16px 6px auto;
  padding: 5px;
  border-radius: 10px;
  background-color: blue;
  color: white;
`

const Message = (props) => {
  if (props.user)
    return (<HumanContainer>{props.text}</HumanContainer>)
  return <BotContainer>{props.text}</BotContainer>
}

export default Message
