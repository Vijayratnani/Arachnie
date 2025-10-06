"use client";
import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { role: "bot", text: "I’m Arachnie — your personal immigration assistant!" },
      ]);
    }, 500);
  };

  return (
    <section className="flex flex-col items-center py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-green-400">Arachnie Chat Demo</h1>
      <div className="w-full max-w-11/12 bg-gray-800 h-full rounded-xl p-4 flex flex-col gap-3">
        <div className="h-screen overflow-y-auto space-y-2 bg-gray-900 rounded-lg p-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-md max-w-[80%] ${
                msg.role === "user"
                  ? "bg-green-500 text-black self-end ml-auto"
                  : "bg-gray-700 text-gray-100"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-md outline-none"
            placeholder="Ask me about your visa or travel..."
          />
          <button
            onClick={handleSend}
            className="bg-green-400 text-black font-semibold px-4 rounded-md hover:bg-green-300"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
