import React, { Fragment } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Avatar = styled.img`
  height: 60px;
  border-radius: 50%;
`

const Sender = styled.div`
  margin-left: 10px;
  width: 20%;
`
const SenderHeader = styled.div`
  font-weight: lighter;
  font-size: 11px;
`
const SenderName = styled.div`
  font-size: 14px;
  font-weight: bold;
`
const Time = styled.div`
  font-size: 12px;
`

const MsgBox = styled.div`
  width: 65%;
`

const MsgHeader = styled.div`
  font-weight: bold;
`

const Divider = styled.hr`
  width: 90%;
  border: 1px solid;
  border-color: ${({user}) => user ? '#e9e9e9' : 'gray' };
`

const MessageRow = (props) => {
  const { user } = props
  return (
    <Fragment>
      <MessageContainer>
        <Avatar
          src="https://assets.dryicons.com/uploads/icon/svg/7790/60371561-878d-4738-a0c5-969635eba49a.svg"
        />
        <Sender>
          <SenderHeader>Enviada por:</SenderHeader>
          <SenderName>
            {user ? 'Usario anónimo' : 'Aigues Chatbot'}
          </SenderName>
          <Time>
            {moment(props.timestamp).calendar()}
          </Time>
        </Sender>
        <MsgBox>
          <MsgHeader>
            { props.user ? 'Pregunta' : 'Respuesta'}
          </MsgHeader>
          {props.text}
        </MsgBox>
      </MessageContainer>
      <Divider user={props.user}/>
    </Fragment>
  )
}

export default MessageRow
