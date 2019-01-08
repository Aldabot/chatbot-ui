import React, { Component, Fragment } from 'react'
import ChatBox from './ChatBox'
import styled from 'styled-components'
import { withNamespaces } from 'react-i18next'
import icon from './icon'


const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 5vw;
  width: ${({open}) => open  ? '500px' : '190px'};
  height: ${({open}) => open ? '500px' : '70px'};
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
  margin: 10px 0 0 11px;
  height: 50px;
  border-radius: 50%;
  display: ${({open}) => open ? 'none' : 'inline'};

  @media ( max-width: 768px ) {
    display: none;
  }
`

const Button = styled.button`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  margin-top: 13px;
  margin-right: 11px;
  background-color: #4085de;
  color: white;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &:hover{
    background-color: #4691f2;
  }

  @media ( max-width: 768px ) {
    font-size: 15px;
    margin-top: 12px;
    margin-left: 12px;
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
    const { t } = this.props

    return (
      <Fragment>
        <Container open={open} >
          <Avatar
            src={icon}
            open={open}
          />
          { !open && <Button onClick={this.openChat}>{t('Preguntar')}</Button>}
          { this.state.open && <ChatBox closeChat={this.closeChat} /> }
        </Container>
      </Fragment>
    )
  }
}

export default withNamespaces()(ChatbotContainer)
