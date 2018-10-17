import React, { Component } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  flex-basis: 100%;
  padding: 5px;
  border-radius: 6px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`

class Message extends Component {
  sendMessage = () => {
    const input = document.getElementById('textInput')
    this.props.addMessage(input.value)
    input.value = ''
  }

  handleKeyPress = (e) => {
    if( e.key === 'Enter' )
      this.sendMessage()
  }

  render() {
    return (
      <InputContainer>
        <input
          id="textInput"
          onKeyPress={this.handleKeyPress}
        />
        <button id="sendBtn" onClick={this.sendMessage}>
          Send
        </button>
      </InputContainer>
    )
  }
}

export default Message
