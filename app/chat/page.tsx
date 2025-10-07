"use client";

import React, { useState } from "react";

const Chat = () => {
  const questions = [
    "Which country are you planning to move to?",
    "What is the main purpose of your immigration (family, study, work, or visit)?",
    "Do you already have any relatives or sponsors in that country?",
    "Have you previously applied for a visa or immigration process before?",
    "What stage are you currently at — exploring options, collecting documents, or ready to apply?",
  ];

  const [chatHistory, setChatHistory] = useState([{ type: "question", text: questions[0] }]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [guidance, setGuidance] = useState("");
  const [loading, setLoading] = useState(false);

  const [navigation, setNavigation] = useState([{ questions: [], answers: [], finalResponse: "" }]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswerSubmit = async () => {
    if (inputValue.trim() === "") return;

    const updatedChatHistory = [...chatHistory, { type: "answer", text: inputValue }];
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      updatedChatHistory.push({ type: "question", text: questions[nextQuestionIndex] });
    } else {
      // Generate immigration guidance using Next.js API route
      const prompt = questions
        .map((q, i) => `${q}: ${chatHistory[i * 2 + 1]?.text || inputValue}`)
        .join("\n");

      setLoading(true);
      try {
        const response = await fetch("/api/generate-advice", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });

        const data = await response.json();
        const advice =
          data.advice ||
          "An error occurred while generating immigration guidance. Please try again.";

        updatedChatHistory.push({ type: "response", text: advice });
        setGuidance(advice);

        setNavigation((prev) => {
          const updated = [...prev];
          updated[currentIndex].finalResponse = advice;
          return updated;
        });
      } catch (error) {
        updatedChatHistory.push({
          type: "response",
          text: "An error occurred while generating immigration guidance. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    }

    setChatHistory(updatedChatHistory);
    setCurrentQuestionIndex(nextQuestionIndex);
    setNavigation((prev) => {
      const updated = [...prev];
      updated[currentIndex].questions.push(questions[currentQuestionIndex]);
      updated[currentIndex].answers.push(inputValue);
      return updated;
    });
    setInputValue("");
  };

  const handleNewChat = () => {
    setChatHistory([{ type: "question", text: questions[0] }]);
    setCurrentQuestionIndex(0);
    setGuidance("");
    setInputValue("");
    setLoading(false);
    setNavigation((prev) => [...prev, { questions: [], answers: [], finalResponse: "" }]);
    setCurrentIndex(navigation.length);
  };

  return (
    <div className="block md:flex h-[calc(100vh-8rem)] bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <aside className="bg-[#111827] w-1/6 flex flex-col items-center p-4 border-r border-gray-800">
        <button
          className="bg-gradient-to-r from-[#A5F871] to-[#3DDCFF] text-black px-4 py-2 rounded-full mb-4 w-4/5 font-semibold hover:opacity-80 transition"
          onClick={handleNewChat}
        >
          + New Chat
        </button>

        <div className="overflow-y-auto w-full space-y-2">
          {navigation.map((session, index) => (
            <button
              key={index}
              className={`block w-full text-left truncate px-3 py-1 rounded-md text-gray-400 hover:text-[#A5F871] ${
                index === currentIndex ? "bg-gray-800 text-[#A5F871]" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {session.questions[0] || `Chat ${index + 1}`}
            </button>
          ))}
        </div>

        <button className="border border-gray-700 text-gray-300 px-4 py-2 rounded-full mt-auto mb-2 w-4/5 hover:bg-gray-800 transition">
          About
        </button>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 bg-gradient-to-br from-gray-900 to-black flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto">
          {chatHistory.map((item, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                item.type === "question"
                  ? "justify-start"
                  : item.type === "response"
                  ? "justify-center"
                  : "justify-end"
              }`}
            >
              <div
                className={`p-4 rounded-2xl max-w-2xl text-sm md:text-base ${
                  item.type === "question"
                    ? "bg-gray-800 text-gray-200"
                    : item.type === "response"
                    ? "bg-gradient-to-r from-[#A5F871] to-[#3DDCFF] text-black font-semibold"
                    : "bg-gray-700 text-white"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-center text-gray-500 mt-4">
              Generating immigration guidance...
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-gray-800 flex items-center bg-gray-900">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your answer..."
            className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-[#A5F871]"
          />
          <button
            className="bg-gradient-to-r from-[#A5F871] to-[#3DDCFF] text-black px-6 py-2 rounded-r-full font-semibold hover:opacity-90 transition"
            onClick={handleAnswerSubmit}
            disabled={loading}
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
};

export default Chat;
