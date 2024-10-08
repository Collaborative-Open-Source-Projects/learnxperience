'use client';
import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "bot", content: "Hi there! I'm Zenith Bot. I'm here to assist you with any questions you have. Feel free to ask me anything!" }]);
  const [chatOpen, setChatOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { role: "bot", content: data.response };
      setMessages((prev) => [...prev, botMessage]);
      setInput("");
    } catch (error) {
      console.error("Error sending message to chatbot:", error);
    }
  };

  return (
    <div>
      <div
        className="fixed bottom-5 right-5 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        onClick={() => setChatOpen(!chatOpen)}
      >
        {chatOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </div>
      {chatOpen && (
        <div className={`fixed bottom-24 right-5 w-96 max-h-[80vh] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden ${minimized ? 'h-12' : ''}`}>
          <div className="flex items-center justify-between bg-purple-600 text-white p-3">
            <h2 className="font-bold">Zenith Bot</h2>
            <X className="w-5 h-5 cursor-pointer" onClick={() => setChatOpen(false)} />
          </div>
          {!minimized && (
            <>
              <div className="flex-grow p-4 overflow-y-auto text-black">
                {messages.map((msg, index) => (
                  <div key={index} className="mb-3">
                    <strong className="font-semibold">{msg.role === "user" ? "You" : "Zenith Bot"}:</strong> {msg.content}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex border-t border-gray-200">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask AI..."
                  className="flex-grow p-3 border-none outline-none text-black"
                />
                <button type="submit" className="p-3 text-purple-500 cursor-pointer hover:text-purple-700">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;