
// /CHATBOT/src/components/ChatbotWindow.js
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
        <div className='window-input'>
          <ChatbotInput onNewMessage={handleNewMessage} />
        </div>
    </div>
  );
}

export default ChatbotWindow;



