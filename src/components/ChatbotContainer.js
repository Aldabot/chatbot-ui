import React, { Component, Fragment } from 'react'
import ChatBox from './ChatBox'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 5vw;
  width: ${({open}) => open ? '500px' : '300px'};
  height: ${({open}) => open ? '500px' : '100px'};
  border-width: 2px 2px 0 2px;
  border-style: solid;
  border-radius: 15px 15px 0 0;
  background-color: white;
`

const Avatar = styled.img`
  margin: 20px 0 0 20px;
  height: 60px;
  border-radius: 50%;
  display: ${({open}) => open ? 'none' : 'inline'};
`

const Button = styled.button`
  font-size: 25px;
  font-weight: bold;
  margin-top: 25px;
  margin-right: 35px;
  background-color: #4085de;
  color: white;
  border-radius: 10px;
  padding: 10px;
  float: right;
`

class ChatbotContainer extends Component {
  state = {
    open: true,
  }

  openChat = () => {
    this.setState({ open: true })
  }

  closeChat = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state

    return (
      <Fragment>
        <Container open={open}>
          <Avatar
            src="https://assets.dryicons.com/uploads/icon/svg/7790/60371561-878d-4738-a0c5-969635eba49a.svg"
            open={open}
          />
          { !open && <Button onClick={this.openChat}>Preguntar</Button>}
          { this.state.open && <ChatBox closeChat={this.closeChat} /> }
        </Container>
      </Fragment>
    )
  }
}

export default ChatbotContainer
