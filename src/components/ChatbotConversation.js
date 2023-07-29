import React from 'react';
import "../CSS/ChatbotConversation.css"

const ChatbotConversation = ({ conversation }) => {
  return (
    <div className='chatbot-conversation'>
      {conversation.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}

export default ChatbotConversation;

