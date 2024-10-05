import React from 'react';
import './Chat.css';

const Message = ({ text }) => {
  return (
    <div className="chat-message">
      <p>{text}</p>
    </div>
  );
};

export default Message;
