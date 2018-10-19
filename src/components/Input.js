import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const InputContainer = styled.div`
  flex-basis: 100%;
  border-top: solid 2px ${({theme}) => theme.main};
  padding: 20px 10px 10px 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`
const TextInput = styled.input`
  font-size: ${({theme}) => theme.fontSize };
  color: ${({theme}) => theme.user};
  width: 75%
  padding: 0 10px 0 10px;
  border: solid ${({theme}) => theme.user };
  &::placeholder {
    color: ${({theme}) => theme.user };
    opacity: 0.7;
  }
`

const SendBtn = styled.button`
  font-size: ${({theme}) => theme.fontSize };
  border: 0;
  background-color: ${({theme}) => theme.user };
  color: white;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({theme}) => theme.userHover };
  };
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
        <TextInput
          id="textInput"
          onKeyPress={this.handleKeyPress}
          placeholder="Preguntame algo!"
        />
        <SendBtn id="sendBtn" onClick={this.sendMessage}>
          Preguntar <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
        </SendBtn>
      </InputContainer>
    )
  }
}

export default Message
