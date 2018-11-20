import React, { Component } from 'react'
import styled from 'styled-components'
import { withNamespaces } from 'react-i18next'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 * import { faPaperPlane } from '@fortawesome/free-solid-svg-icons' */

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 2%;
  border-top: solid 1px #4085de;
  padding: 20px 10px 10px 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`

const TextInput = styled.input`
  font-size: ${({theme}) => theme.fontSize };
  color: #4085de;
  width: 68%
  padding: 0 10px 0 10px;
  border: solid #4085de;
  &::placeholder {
    color: #4085de;
    opacity: 0.7;
  }

  @media ( max-width: 768px) {
    font-size: 15px;
  }
`

const SendBtn = styled.button`
  font-size: ${({theme}) => theme.fontSize };
  border: 0;
  background-color: #4085de;
  color: white;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #4691f2;
  };

  @media ( max-width: 768px) {
    font-size: 15px;
  }
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
    const { t } = this.props

    return (
      <InputContainer>
        <TextInput
          id="textInput"
          onKeyPress={this.handleKeyPress}
          placeholder={t('Preguntame algo')+'!'}
        />
        <SendBtn id="sendBtn" onClick={this.sendMessage}>
          {t('Preguntar')}
          {/* <FontAwesomeIcon icon={faPaperPlane} size="lg"/> */}
        </SendBtn>
      </InputContainer>
    )
  }
}

export default withNamespaces()(Message)
