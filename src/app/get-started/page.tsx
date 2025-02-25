'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Send } from 'lucide-react';

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

export default function StepProgressChat() {
  const [completedSteps, setCompletedSteps] = useState<number>(0);
  const [message, setMessage] = useState("");

  const handleNextStep = () => {
    if (completedSteps < steps.length) {
      setCompletedSteps(completedSteps + 1);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      console.log("User message:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex h-[80vh] flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/4 bg-blue-100 p-6 flex flex-col gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-md border ${
              index < completedSteps ? 'bg-blue-300 border-blue-500 text-white' : 'bg-white border-gray-300'
            }`}
          >
            {index < completedSteps ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="text-green-500" size={20} />
              </motion.div>
            ) : (
              <Circle className="text-gray-400" size={20} />
            )}
            {step}
          </div>
        ))}
      </div>

      {/* Chatbot Messages Area */}
      <div className="flex-1 flex flex-col justify-between items-center p-8 border-l">
        <div className="flex flex-col items-center gap-4 w-full max-w-xl">
          {completedSteps < steps.length ? (
            <>
              <motion.div
                key={completedSteps}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-blue-200 text-blue-900 rounded-lg shadow-md w-full"
              >
                Chatbot message for {steps[completedSteps]}
              </motion.div>
              <button
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
                onClick={handleNextStep}
              >
                Complete {steps[completedSteps]}
              </button>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-green-100 text-green-900 rounded-lg shadow-md flex items-center gap-3"
            >
              <CheckCircle className="text-green-500" size={24} />
              <span>All steps completed! 🎉</span>
            </motion.div>
          )}
        </div>

        {/* Chat Input Field */}
        <div className="w-full max-w-xl flex items-center mt-4 border-t pt-4">
          <input
            type="text"
            className="flex-1 p-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="ml-3 bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
