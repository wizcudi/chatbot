import React from 'react';
import ChatbotWindow from './ChatbotWindow';
import "../CSS/Chatbot.css"

const Chatbot = () => {
  return (
    <div className='chatbot'>
        <div className='chatbot-navigation'>
          Navigation Section
        </div>
        <ChatbotWindow />
    </div>    
  );
}

export default Chatbot;

