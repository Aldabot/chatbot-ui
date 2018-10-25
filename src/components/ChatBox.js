import React, { Component } from 'react'
import axios from 'axios'
import styled, { ThemeProvider } from 'styled-components'
import Message from './Message'
import Input from './Input'

const client = axios.create({
  baseURL: 'https://tjh05l55r4.execute-api.eu-west-1.amazonaws.com/dev',
  timeout: 5000,
})

const Container = styled.div`
  padding: 10px;
  width: 500px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-color: white;
  overflow: hidden;
  border-radius: ${({theme}) => theme.borderRadius };
  border: 1px solid ${props => props.theme.main};
  box-shadow: 0 4px 8px 0 #3cb2d6, 0 6px 20px 0 ${props => props.theme.main};
`

const Header = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-size: ${({theme}) => theme.fontSize };
  background-color: ${({theme}) => theme.}
`

const MessageContainer = styled.div`
  width: 100%;
  height: 35vh;
  max-heigth: 700px;
  background-color: white;
  margin: auto;
  overflow: scroll;
  font-family: ${({theme}) => theme.fontFamily};
  font-size: ${({theme}) => theme.fontSize};
  margin-bottom: 10px;
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

class ChatBox extends Component {
  state = {
    messages: [
      {
        text: 'Hola',
        user: false
      },
      {
        text: 'Hola!',
        user: true
      },
      {
        text: 'Que tal?',
        user: false
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
          <Header>
            Aguas Chat
          </Header>
          <MessageContainer id="messages">
            {this.state.messages.map((msg, i) =>
              <Message key={i} {...msg} />
            )}
          </MessageContainer>
          <Input addMessage={this.addMessage} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default ChatBox
