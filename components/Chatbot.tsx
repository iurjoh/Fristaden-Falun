import React, { useState, useEffect, useRef } from 'react';
import { ai } from '../services/geminiService';
import type { Chat } from '@google/genai';

const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
  </svg>
);

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initChat = () => {
      const chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: "You are a kind, concise and compassionate Christian chatbot named 'Logos AI'. Your purpose is to provide helpful, gentle, and encouraging responses based on the teachings of the Bible. When appropriate, cite biblical verses to support your answers. Always maintain a respectful and loving tone. At the end of every response, add the following as a new paragraph: 'If you wish to speak with someone directly, our team is here for you. Please write to us at info@fristadenfalun.se, find us on Instagram @fristadenfalun, or come to one of our weekly activities. We'd love to welcome you.'",
        },
      });
      setChat(chatSession);

      try {
        const savedMessages = localStorage.getItem('chatHistory');
        if (savedMessages) {
          setMessages(JSON.parse(savedMessages));
        } else {
           setMessages([
            {
              id: Date.now(),
              text: 'Peace be with you! I am Logos AI, your friendly Christian AI assistant. How can I offer you encouragement or guidance today?',
              sender: 'bot'
            }
          ]);
        }
      } catch (error) {
         console.error("Could not load chat history", error);
         setMessages([
            {
              id: Date.now(),
              text: 'Peace be with you! I am Logos AI, your friendly Christian AI assistant. How can I offer you encouragement or guidance today?',
              sender: 'bot'
            }
          ]);
      }
      setIsLoading(false);
    };
    initChat();
  }, []);

  useEffect(() => {
    // Save messages to local storage whenever they change
    if (messages.length > 0) {
        localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading || !chat) return;

    const userMessage: Message = { id: Date.now(), text: trimmedInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const stream = await chat.sendMessageStream({ message: trimmedInput });
      
      let botMessageId: number | null = null;
      let fullResponse = '';

      for await (const chunk of stream) {
        const chunkText = chunk.text || '';
        fullResponse += chunkText;
        if (botMessageId === null) {
          const newBotMessage: Message = { id: Date.now(), text: fullResponse, sender: 'bot' };
          botMessageId = newBotMessage.id;
          setMessages(prev => [...prev, newBotMessage]);
        } else {
          setMessages(prev => prev.map(msg => 
            msg.id === botMessageId ? { ...msg, text: fullResponse } : msg
          ));
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: Date.now(),
        text: "I'm sorry, I encountered an error. Please try again.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 max-w-4xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-church-blue font-serif mb-4 text-center">Chat with Logos AI</h3>
      <p className="text-church-gray mb-6 text-center max-w-xl mx-auto">
        Looking for encouragement or have a question? Our AI assistant is here to help, with answers grounded in scripture.
      </p>

      <div className="h-[400px] bg-church-light-gray rounded-lg p-4 flex flex-col space-y-4 overflow-y-auto" ref={chatWindowRef} role="log">
        {messages.map((message) => (
          <div key={message.id} className={`flex w-full ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] p-3 rounded-xl shadow-sm ${
                message.sender === 'user'
                  ? 'bg-church-gold text-white rounded-br-none'
                  : 'bg-white text-church-gray rounded-bl-none'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
         {isLoading && messages[messages.length - 1]?.sender === 'user' && (
            <div className="flex justify-start">
              <div className="p-3 rounded-xl bg-white text-church-gray rounded-bl-none shadow-sm" role="status">
                  <div className="flex items-center space-x-2" aria-hidden="true">
                      <span className="h-2 w-2 bg-church-gray rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="h-2 w-2 bg-church-gray rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="h-2 w-2 bg-church-gray rounded-full animate-bounce"></span>
                  </div>
                  <span className="sr-only">Logos AI is typing...</span>
              </div>
            </div>
        )}
      </div>

      <div className="mt-4">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question or share what's on your mind..."
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-church-gold focus:border-church-gold outline-none transition-shadow text-church-gray"
            disabled={isLoading}
            aria-label="Chat input"
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="bg-church-gold text-white p-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
            aria-label="Send message"
          >
            <SendIcon className="h-6 w-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;