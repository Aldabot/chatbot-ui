import React, { Component, Fragment } from 'react'
import ChatBox from './ChatBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 20vw;
  width: 300px;
  height: 100px;
  border-width: 2px 2px 0 2px;
  border-style: solid;
  border-radius: 15px 15px 0 0;
  background-color: white;
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

const Avatar = styled.img`
  margin: 20px 0 0 20px;
  height: 60px;
  border-radius: 50%;
`

const Button = styled.button`
  font-size: 25px;
  font-weight: bold;
  transform: translateY(-19px);
  margin-left: 35px;
  background-color: #4085de;
  color: white;
  border-radius: 10px;
  padding: 10px;
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
          <Avatar
            src="https://assets.dryicons.com/uploads/icon/svg/7790/60371561-878d-4738-a0c5-969635eba49a.svg"
          />
          <Button>
            Preguntar
          </Button>
        </Container>
        {/* <Container>
            { this.state.open && <ChatBox /> }
            </Container>
            <IconContainer>
            <Icon icon={
            this.state.open ? faTimes : faComment
            } onClick={this.openCloseChat} />
            </IconContainer> */}
      </Fragment>
    )
  }
}

export default ChatbotContainer
