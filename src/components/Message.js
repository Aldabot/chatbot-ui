import React, { Fragment } from 'react'
import styled from 'styled-components'

const BotContainer = styled.div`
  float: left;
  max-width: 80%;
  margin: 0 0 6px 10px;
  padding: 10px;
  border-radius: ${({theme}) => theme.borderRadius };
  background-color: ${props => props.theme.main};
  color: white;
`
const HumanContainer = styled(BotContainer)`
  float: right;
  margin: 0 10px 6px auto;
  background-color: ${props => props.theme.user};
  color: white;
`
const Clear = styled.div`
  clear: both;
`

const Message = (props) => {
  if (props.user)
    return (
      <Fragment>
        <HumanContainer>
          {props.text}
        </HumanContainer>
        <Clear />
      </Fragment>
    )
  return (
    <Fragment>
      <BotContainer>
        {props.text}
      </BotContainer>
      <Clear />
    </Fragment>
  )
}

export default Message
