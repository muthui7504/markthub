/*import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000'); // Update to your backend's address

const Chat = ({ user, chatRoom }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Join a specific chat room
    socket.emit('join_room', chatRoom);

    // Listen for incoming messages
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('receive_message');
    };
  }, [chatRoom]);

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim() !== '') {
      const messageData = {
        room: chatRoom,
        user,
        message,
        time: new Date().toLocaleTimeString(),
      };

      socket.emit('send_message', messageData);
      setMessages((prevMessages) => [...prevMessages, messageData]);
      setMessage(''); // Clear the message input
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Chat with Supplier</h2>

        <div className="h-64 overflow-y-scroll mb-4 border p-4 rounded-lg">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <p className="text-sm text-gray-500">
                {msg.user} at {msg.time}:
              </p>
              <p className="text-md">{msg.message}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button
            onClick={sendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;*/
