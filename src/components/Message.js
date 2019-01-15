import React, { Fragment } from 'react'
import styled from 'styled-components'
import { withNamespaces } from 'react-i18next'
import DOMPurify from 'dompurify'
const showdown = require('showdown')
import moment from 'moment'
import 'moment/locale/es'
import 'moment/locale/ca'
import icon from './icon'

const mdConverter = new showdown.Converter()

if(window.chatbotLanguage === 'ca_ES') {
  moment.locale('ca')
} else {
  moment.locale('es')
}


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
  p {
    margin: 0;
  }
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
  const { user, t } = props
  console.log(props.text)
  return (
    <Fragment>
      <MessageContainer>
        <Avatar
          src={icon}
        />
        <Sender>
          <SenderHeader>{t('Enviada por')}:</SenderHeader>
          <SenderName>
            {user ? t('Usario anónimo') : 'Aigues Chatbot'}
          </SenderName>
          <Time>
            {moment(props.timestamp).calendar()}
          </Time>
        </Sender>
        <MsgBox>
          <MsgHeader>
            { props.user ? 'Pregunta' : t('Respuesta')}
          </MsgHeader>
          {
            user ?
              <span>{props.text}</span>
              :
              <span dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(mdConverter.makeHtml(props.text))}}></span>
          }
        </MsgBox>
      </MessageContainer>
      <Divider user={props.user}/>
    </Fragment>
  )
}

export default withNamespaces()(MessageRow)
