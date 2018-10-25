import React, { Component, Fragment } from 'react'
import ChatBox from './ChatBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  bottom: 100px;
  right: 26px;
`

const IconContainer = styled.div`
  position: absolute;
  bottom: 26px;
  right: 26px;
  width: 30px;
  height: 30px;
  padding: 15px;
  border-radius: 8px;
  background-color: #3cb2d6;
  display: flex;
  align-items: center;
`

const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2rem;
  margin: auto;
`

class ChatbotContainer extends Component {
  state = {
    open: true,
  }

  openCloseChat = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <Fragment>
        <Container>
            { this.state.open && <ChatBox /> }
        </Container>
        <IconContainer>
          <Icon icon={
            this.state.open ? faTimes : faComment
          } onClick={this.openCloseChat} />
        </IconContainer>
      </Fragment>
    )
  }
}

export default ChatbotContainer
