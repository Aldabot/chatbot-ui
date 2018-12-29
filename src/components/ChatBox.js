import React, { Component } from 'react'
import axios from 'axios'
import styled, { ThemeProvider } from 'styled-components'
import moment from 'moment'
import Message from './Message'
import Input from './Input'
import { v4 } from 'uuid'
import { withNamespaces } from 'react-i18next'

const client = axios.create({
  baseURL: window.chatbotApiEndpoint, //'http://labzener1.taisa.com/ab/chatbot/chat',
  timeout: 5000,
})

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  overflow: hidden;
  font-family: system-ui;
`

const MessageContainer = styled.div`
  margin-top: 3%;
  width: 100%;
  height: 80%;
  padding: 0 15px 0 15px;
  overflow: scroll;
`

const theme = {
  main: '#3cb2d6',
  mainHover: '#25749e',
  user: '#f0b17d',
  userHover: '#daa172',
  fontFamily: 'system-ui',
  fontSize: '1.4rem',
  borderRadius: '2px',
}

const Button = styled.button`
  position: absolute;
  top: -3%;
  right: -3%;
  height: 50px;
  width: 50px;
  background-color: #4085de;
  border-radius: 50%;
  font-size: 24px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background-color: #4691f2;
  }

  @media ( max-width: 1000px) {
    height: 35px;
    width: 35px;
    right: 0;
    top: 0;
    border-radius: 0 15px 0 0;
    text-align: center;
  }
`

class ChatBox extends Component {
  constructor(props) {
    super(props)

    const { t } = props

    this.state = {
      messages: [{
        user: false,
        text: <span>{t('Soy el Chatbot de Aigues')}.<br />{t('Por favor, pregúntame algo')}😊</span>,
        time: moment(),
      }]
    }
  }

  addMessage = async (text) => {
    this.addMessageAndScroll(text, true)
    try {
      const { data } = await client.post('/', {
        query: text,
        sessionId: v4()
      })
      this.addMessageAndScroll(data.response, false)
    } catch(err) {
      console.error(err)
    }
  }

  addMessageAndScroll = (text, user) => {
    this.setState({
      messages: this.state.messages.concat({ text, user, time: moment() })
    })
    const objDiv = document.getElementById("messages");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <MessageContainer id="messages">
            {this.state.messages.map((msg, i) =>
              <Message key={i} {...msg} />
            )}
          </MessageContainer>
          <Input addMessage={this.addMessage} />
          <Button onClick={this.props.closeChat}>X</Button>
        </Container>
      </ThemeProvider>
    )
  }
}

export default withNamespaces()(ChatBox)
