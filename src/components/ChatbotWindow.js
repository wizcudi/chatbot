import React, { useState } from 'react';
import "../CSS/ChatbotWindow.css"
import ChatbotInput from "./ChatbotInput"
import ChatbotConversation from "./ChatbotConversation"

const ChatbotWindow = () => {

  const [conversation, setConversation] = useState([]);

  const handleNewMessage = (newMessage) => {
    setConversation(prevConversation => [...prevConversation, newMessage]);
  }
  

  return (
    <div className='chatbot-window'>
        <ChatbotConversation conversation={conversation} />
        <ChatbotInput onNewMessage={handleNewMessage} />
    </div>
  );
}

export default ChatbotWindow;

