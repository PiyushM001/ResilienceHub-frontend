// 'Authorization': 'ZwUlvnK4eN1t9iiLKl0OZohQW3jhVXg2ceZFIsKn'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
function AiAssistant() {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]); // Store multiple responses
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.cohere.ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ZwUlvnK4eN1t9iiLKl0OZohQW3jhVXg2ceZFIsKn`,
        },
        body: JSON.stringify({
          model: "command-xlarge-nightly",
          prompt: input+"Above can be a person who is victim of sexual harrasment , chat accordingly, ask first",
          max_tokens: 100,
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      setResponses((prevResponses) => [...prevResponses, { input, response: data.text }]); // Save input and response
      setInput(""); // Clear input field after submission
    } catch (err) {
      setError("Something went wrong, please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center">
       
      <div className="bg-[#161616] h-[100svh] p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <Link to="/" className="w-[40px] bg-[#c7c7c7] h-[40px] rounded-[5px] shadow-lg flex justify-center items-center"><IoChevronBack /></Link>
        <h1 className="text-3xl text-[#cccccc] font-bold mb-6 text-center">AI Assistant</h1>

        {/* Display conversation history */}
        <div className="max-h-96 overflow-y-auto mb-4">
          {responses.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow-inner mb-2">
                <p className="text-gray-800 font-semibold">You:</p>
                <p className="text-gray-800">{item.input}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-inner">
                <p className="text-gray-800 font-semibold">AI:</p>
                <p className="text-gray-800">{item.response}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="mb-4">
          <textarea
            value={input}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg mb-4"
            placeholder="Ask me anything..."
            rows={4}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#6ff84d] text-[#000000] p-3 rounded-lg "
          >
            {loading ? "Loading..." : "Get Response"}
          </button>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
      </div>
    </div>
  );
}

export default AiAssistant;
