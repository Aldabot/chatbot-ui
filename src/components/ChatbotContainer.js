import React, { Component, Fragment } from 'react'
import ChatBox from './ChatBox'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 5vw;
  width: ${({open}) => open ? '500px' : '300px'};
  height: ${({open}) => open ? '500px' : '100px'};
  border-radius: 15px 15px 0 0;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 10000;

  @media ( max-width: 768px ) {
    width: ${({open}) => open ? '95vw' : '120px'};
    height: ${({open}) => open ? '85vh' : '60px'};
    right: ${({open}) => open ? '0' : '5vw'};
  }
`

const Avatar = styled.img`
  margin: 20px 0 0 25px;
  height: 60px;
  border-radius: 50%;
  display: ${({open}) => open ? 'none' : 'inline'};

  @media ( max-width: 768px ) {
    display: none;
  }
`

const Button = styled.button`
  font-size: 25px;
  font-weight: bold;
  margin-top: 24px;
  margin-right: 35px;
  background-color: #4085de;
  color: white;
  border-radius: 10px;
  padding: 10px;
  float: right;
  cursor: pointer;
  &:hover{
    background-color: #4691f2;
  }

  @media ( max-width: 768px ) {
    font-size: 15px;
    margin-top: 12px;
    margin-right: 12px;
  }
`

class ChatbotContainer extends Component {
  state = {
    open: false,
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
        <Container open={open} >
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
