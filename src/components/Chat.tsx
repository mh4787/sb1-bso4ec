import React, { useState } from 'react';
import { Send, Smile } from 'lucide-react';
import { usePet } from '../context/PetContext';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'Pet', content: 'Woof! How are you today?' },
  ]);
  const [input, setInput] = useState('');
  const { petName, petStats } = usePet();

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'You', content: input }]);
      setInput('');
      setTimeout(() => {
        const petResponse = getPetResponse(input, petStats);
        setMessages(prevMessages => [...prevMessages, { sender: 'Pet', content: petResponse }]);
      }, 1000);
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Chat with {petName}</h2>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
          <div className="mb-4 h-64 overflow-y-auto border border-gray-200 rounded p-4">
            {messages.map((message, index) => (
              <Message key={index} sender={message.sender} content={message.content} />
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300 flex items-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send
            </button>
          </div>
          <button className="mt-4 text-gray-500 hover:text-gray-700 transition duration-300 flex items-center">
            <Smile className="w-5 h-5 mr-2" />
            Add Emoji
          </button>
        </div>
      </div>
    </section>
  );
};

const Message = ({ sender, content }) => {
  const isYou = sender === "You";
  return (
    <div className={`mb-4 ${isYou ? 'text-right' : ''}`}>
      <span className={`inline-block px-4 py-2 rounded-lg ${isYou ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
        {content}
      </span>
      <p className="text-sm text-gray-500 mt-1">{sender}</p>
    </div>
  );
};

const getPetResponse = (input: string, stats: { happiness: number; energy: number; hunger: number }) => {
  const lowThreshold = 30;
  const highThreshold = 70;

  if (stats.hunger > highThreshold) {
    return "I'm feeling quite hungry. Can you feed me?";
  }

  if (stats.energy < lowThreshold) {
    return "I'm feeling tired. Maybe we can play later?";
  }

  if (stats.happiness < lowThreshold) {
    return "I'm feeling a bit down. Can we play a game?";
  }

  if (input.toLowerCase().includes("play")) {
    return "Yay! I love playing games. Let's go to the games section!";
  }

  if (input.toLowerCase().includes("food") || input.toLowerCase().includes("hungry")) {
    return "Mmm, food sounds great! What shall we have?";
  }

  const genericResponses = [
    "That's interesting! Tell me more.",
    "I'm having so much fun chatting with you!",
    "You're the best pet owner ever!",
    "I wonder what adventures we'll have next?",
    "I'm so glad you're here with me!",
  ];

  return genericResponses[Math.floor(Math.random() * genericResponses.length)];
};

export default Chat;