import React, { Component } from 'react';
import ChatbotContainer from './components/ChatbotContainer'
import Message from './components/Message'

class App extends Component {
  render() {
    return (
      <ChatbotContainer>
        <Message />
        <Message user={true} />
        <Message />
      </ChatbotContainer>
    );
  }
}

export default App;
