// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle, Circle, Send } from 'lucide-react';

// const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

// export default function StepProgressChat() {
//   const [completedSteps, setCompletedSteps] = useState<number>(0);
//   const [message, setMessage] = useState("");

//   const handleNextStep = () => {
//     if (completedSteps < steps.length) {
//       setCompletedSteps(completedSteps + 1);
//     }
//   };

//   const handleSendMessage = () => {
//     if (message.trim() !== "") {
//       console.log("User message:", message);
//       setMessage("");
//     }
//   };

//   return (
//     <div className="flex h-[80vh] flex-col md:flex-row">
//       {/* Sidebar */}
//       <div className="md:w-1/4 bg-blue-100 p-6 flex flex-col gap-4">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`flex items-center gap-3 p-3 rounded-md border ${
//               index < completedSteps ? 'bg-blue-300 border-blue-500 text-white' : 'bg-white border-gray-300'
//             }`}
//           >
//             {index < completedSteps ? (
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <CheckCircle className="text-green-500" size={20} />
//               </motion.div>
//             ) : (
//               <Circle className="text-gray-400" size={20} />
//             )}
//             {step}
//           </div>
//         ))}
//       </div>

//       {/* Chatbot Messages Area */}
//       <div className="flex-1 flex flex-col justify-between items-center p-8 border-l">
//         <div className="flex flex-col items-center gap-4 w-full max-w-xl">
//           {completedSteps < steps.length ? (
//             <>
//               <motion.div
//                 key={completedSteps}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="p-4 bg-blue-200 text-blue-900 rounded-lg shadow-md w-full"
//               >
//                 Chatbot message for {steps[completedSteps]}
//               </motion.div>
//               <button
//                 className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
//                 onClick={handleNextStep}
//               >
//                 Complete {steps[completedSteps]}
//               </button>
//             </>
//           ) : (
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="p-6 bg-green-100 text-green-900 rounded-lg shadow-md flex items-center gap-3"
//             >
//               <CheckCircle className="text-green-500" size={24} />
//               <span>All steps completed! 🎉</span>
//             </motion.div>
//           )}
//         </div>

//         {/* Chat Input Field */}
//         <div className="w-full max-w-xl flex items-center mt-4 border-t pt-4">
//           <input
//             type="text"
//             className="flex-1 p-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Type a message..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <button
//             onClick={handleSendMessage}
//             className="ml-3 bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600"
//           >
//             <Send size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-unused-vars */


'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Send } from 'lucide-react';
import { ChatThinking } from '@/icons/chat-thinking';
import { useRef } from 'react';


const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export default function StepProgressChat() {
  const [completedSteps, setCompletedSteps] = useState<number>(0); 
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isBotTyping]);

  useEffect(() => {
    const startChat = async () => {
      try {
        const res = await fetch('/api/start', { method: 'POST' });
        const data = await res.json();
        setConversationId(data.conversation_id);
        setChatHistory([{ role: 'bot', text: data.message }]);
      } catch (err) {
        console.error('Failed to start conversation:', err);
      }
    };

    startChat();
  }, []);

  const handleSendMessage = async () => {
    if (!message.trim() || !conversationId) return;

    const userMessage = message;
    setMessage("");

    const newUserMsg: Message = { role: 'user', text: userMessage };
    setChatHistory((prev) => [...prev, newUserMsg]);
    setIsBotTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversation_id: conversationId,
          message: userMessage,
        }),
      });

      const data = await res.json();
      setIsBotTyping(false);

      const botReply: Message = { role: 'bot', text: data.message };
      setChatHistory((prev) => [...prev, botReply]);
    } catch (err) {
      console.error('Chat failed:', err);
      setIsBotTyping(false);
    }
  };

  // const handleNextStep = () => {
  //   if (completedSteps < steps.length) {
  //     setCompletedSteps((prev) => prev + 1);
  //   }
  // };

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
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                <CheckCircle className="text-green-500" size={20} />
              </motion.div>
            ) : (
              <Circle className="text-gray-400" size={20} />
            )}
            {step}
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col justify-between items-center p-8 border-l">
        {/* Chat Messages */}
        <div className="flex flex-col gap-4 w-full max-w-xl overflow-y-auto max-h-[60vh]">
          {chatHistory.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-lg shadow-md w-fit max-w-[80%] ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-200 text-gray-800 self-start'
              }`}
            >
              {msg.text}
            </motion.div>
          ))}

          {/* Bot Typing Indicator */}
          {isBotTyping && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-3 rounded-lg shadow-md w-fit max-w-[80%] bg-gray-200 text-gray-800 self-start"
            >
              <ChatThinking />
            </motion.div>
          )}
            {/* Scroll Anchor */}
           <div ref={bottomRef} />
        </div>

        {/* Input Field */}
        <div className="w-full max-w-xl flex items-center mt-4 border-t pt-4">
          <input
            type="text"
            className="flex-1 p-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
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


