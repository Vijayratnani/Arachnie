"use client";

import React, { useState } from "react";

// 🧩 Types
type ChatItemType = "question" | "answer" | "response";

interface ChatItem {
  type: ChatItemType;
  text: string;
}

interface ChatSession {
  questions: string[];
  answers: string[];
  finalResponse: string;
}

const Chat: React.FC = () => {
  // 🧠 Static question flow
  const QUESTIONS: string[] = [
    "Which country are you planning to move to?",
    "What is the main purpose of your immigration (family, study, work, or visit)?",
    "Do you already have any relatives or sponsors in that country?",
    "Have you previously applied for a visa or immigration process before?",
    "What stage are you currently at — exploring options, collecting documents, or ready to apply?",
  ];

  // 🧱 States
  const [chatHistory, setChatHistory] = useState<ChatItem[]>([
    { type: "question", text: QUESTIONS[0] },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [navigation, setNavigation] = useState<ChatSession[]>([
    { questions: [] as string[], answers: [] as string[], finalResponse: "" },
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 🚀 Submit answer and continue chat flow
  const handleAnswerSubmit = async (): Promise<void> => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const updatedChat = [...chatHistory, { type: "answer", text: trimmed }];
    const nextIndex = currentQuestionIndex + 1;

    // If more questions remain
    if (nextIndex < QUESTIONS.length) {
      updatedChat.push({ type: "question", text: QUESTIONS[nextIndex] });
      setChatHistory(updatedChat);
      setCurrentQuestionIndex(nextIndex);
    } else {
      // 🧠 Build prompt for final guidance
      const prompt = QUESTIONS.map((q, i) => `${q}: ${navigation[currentIndex]?.answers[i] || trimmed}`).join("\n");

      setLoading(true);
      try {
        const response = await fetch("/api/generate-advice", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });

        const data = await response.json();
        const advice: string =
          data.advice ||
          "⚠️ An error occurred while generating immigration guidance. Please try again.";

        updatedChat.push({ type: "response", text: advice });

        // Save in navigation history
        setNavigation((prev) => {
          const updated = [...prev];
          updated[currentIndex].finalResponse = advice;
          return updated;
        });

        setChatHistory(updatedChat);
      } catch (error) {
        console.error("AI advice generation failed:", error);
        updatedChat.push({
          type: "response",
          text: "⚠️ Failed to generate immigration guidance. Please try again.",
        });
        setChatHistory(updatedChat);
      } finally {
        setLoading(false);
      }
    }

    // Update session Q&A
    setNavigation((prev) => {
      const updated = [...prev];
      updated[currentIndex].questions.push(QUESTIONS[currentQuestionIndex]);
      updated[currentIndex].answers.push(trimmed);
      return updated;
    });

    setInputValue("");
  };

  // 🆕 Start new chat
  const handleNewChat = (): void => {
    setChatHistory([{ type: "question", text: QUESTIONS[0] }]);
    setCurrentQuestionIndex(0);
    setInputValue("");
    setLoading(false);
    setNavigation((prev) => [
      ...prev,
      { questions: [] as string[], answers: [] as string[], finalResponse: "" },
    ]);
    setCurrentIndex(navigation.length);
  };

  // 🧩 JSX
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
