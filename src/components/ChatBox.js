import React, { Component } from 'react'
import axios from 'axios'
import styled, { ThemeProvider } from 'styled-components'
import moment from 'moment'
import Message from './Message'
import Input from './Input'

const client = axios.create({
  baseURL: 'https://tjh05l55r4.execute-api.eu-west-1.amazonaws.com/dev',
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
  width: 100%;
  height: 85%;
  padding: 15px;
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
  right: 0;
  height: 40px;
  width: 40px;
  background-color: #4085de;
  border-radius: 12px;
  margin: 6px 6px 0 0;
  font-size: 22px;
  color: white;
  font-weight: bold;
`

class ChatBox extends Component {
  state = {
    messages: [
      {
        text: 'Hola',
        user: false,
        timestamp: moment(),
      },
      {
        text: 'Hola!',
        user: true,
        timestamp: moment(),
      },
      {
        text: 'Que tal?',
        user: false,
        timestamp: moment(),
      }
    ]
  }

  addMessage = async (text) => {
    this.addMessageAndScroll(text, true)
    try {
      const { data } = await client.post('/dialogflow', {
        query: text,
        sessionId: '1'
      })
      for(const msg of data) {
        console.log(msg)
        this.addMessageAndScroll(msg.text.text[0], false)
      }
    } catch(err) {
      console.error(err)
    }
  }

  addMessageAndScroll = (text, user) => {
    this.setState({
      messages: this.state.messages.concat({ text, user })
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

export default ChatBox
