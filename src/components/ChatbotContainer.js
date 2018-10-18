import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Message from './Message'
import Input from './Input'

const client = axios.create({
  baseURL: 'https://tjh05l55r4.execute-api.eu-west-1.amazonaws.com/dev',
  timeout: 5000,
})

const Container = styled.div`
  padding: 10px;
  width: 50vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-color: black;
  overflow: hidden;
`

const MessageContainer = styled.div`
  width: 100%;
  height: 400px;
  max-heigth: 400px;
  background-color: gray;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: scroll;
`

class ChatbotContainer extends Component {
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
      <Container>
        <MessageContainer id="messages">
          {this.state.messages.map(msg =>
            <Message {...msg} />
          )}
        </MessageContainer>
        <Input addMessage={this.addMessage} />
      </Container>
    )
  }
}

export default ChatbotContainer
