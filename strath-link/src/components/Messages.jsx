import { useState, useEffect } from 'react';
import './Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');
  const [receiverId, setReceiverId] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/messages`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            content: content,
            sender_id: 3,
            receiver_id: receiverId,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      window.location.reload();
      setMessages([...messages, data]);
      setContent('');
      setReceiverId('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      <div className="messages-list">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p><strong>From:</strong> {message.sender_id}</p>
            <p><strong>To:</strong> {message.receiver_id}</p>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div className="send-message">
        <h3>Send a Message</h3>
        <input
          type="text"
          placeholder="Receiver ID"
          value={receiverId}
          onChange={(e) => setReceiverId(e.target.value)}
        />
        <textarea
          placeholder="Type your message..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
