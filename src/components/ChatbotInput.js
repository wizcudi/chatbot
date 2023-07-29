import React, { useState } from 'react';
import "../CSS/ChatbotInput.css";
import axios from 'axios'; 

const ChatbotInput = ({onNewMessage}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Send the user's message to the backend
        try {
            const response = await axios.post('http://localhost:3080/chat', { message: inputValue });
            const botMessage = response.data.message;
            // Add the bot's response to the conversation
            onNewMessage(botMessage);
        } catch (error) {
            console.error('Error sending message:', error);
        }
        setInputValue('');
    }

    return (
        <div className='chatbot-input'>
            <form onSubmit={handleSubmit}>
                <textarea 
                  value={inputValue} 
                  onChange={e => setInputValue(e.target.value)} 
                  placeholder="Type a message..."
                />
                <div className='chatbot-btn'>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}

export default ChatbotInput;

