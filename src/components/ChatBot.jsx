'use client';
import { useState, useRef, useEffect } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

 const handleSendMessage = async (e) => {
  e.preventDefault();
  if (!inputValue.trim() || inputValue.length > 500) return;

  const userMessage = { role: "user", content: inputValue };
  const nextMessages = [...messages, userMessage]; 
  setMessages(nextMessages);
  setInputValue("");
  setIsLoading(true);

  try {
    const historyToSend = nextMessages.slice(-20); // max 20 messages
    const response = await fetch("/api/chatAgent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: inputValue,
        history: historyToSend,
      }),
    });

    if (response.status === 429) {
      alert("Too many requests! Please wait a moment.");
      return;
    }

    const data = await response.json();
    const aiMessage = { role: "assistant", content: data.content };
    setMessages((prev) => [...prev, aiMessage]);
  } catch (err) {
    console.error(err);
  } finally {
    setIsLoading(false);
  }
};



  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-0 right-0 w-full h-full sm:w-96 sm:h-[500px] sm:bottom-24 sm:right-6 bg-zinc-900 border-0 sm:border border-zinc-800 sm:rounded-lg shadow-2xl z-50 flex flex-col transition-all duration-300 ${isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950 sm:rounded-t-lg">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white">Chat with AI</h3>
          </div>
          <button
            onClick={toggleChat}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user' ? 'bg-blue-600' : 'bg-zinc-800'
                  }`}
              >
                {message.role === 'user' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <img src='/favicon.png'></img>
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-lg p-3 text-sm ${message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-zinc-800 text-gray-200'
                  }`}
              >
                <p>{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <img src='/favicon.png'></img>
              </div>
              <div className="bg-zinc-800 rounded-lg p-3 text-sm text-gray-200">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input Area */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-zinc-800 bg-zinc-950 sm:rounded-b-lg">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-md md:text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full shadow-lg items-center justify-center transition-all duration-300 z-50 ${isOpen ? 'hidden sm:flex rotate-180' : 'flex hover:scale-110'
          }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        )}
      </button>
    </>
  );
}

