/* eslint-disable @typescript-eslint/no-unused-vars */

// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle, Circle, Send } from 'lucide-react';
// import { ChatThinking } from '@/icons/chat-thinking';

// const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

// type Message = {
//   role: 'user' | 'bot';
//   text: string;
// };

// export default function StepProgressChat() {
//   const [completedSteps, setCompletedSteps] = useState<number>(0);
//   const [conversationId, setConversationId] = useState<string | null>(null);
//   const [chatHistory, setChatHistory] = useState<Message[]>([]);
//   const [message, setMessage] = useState('');
//   const [isBotTyping, setIsBotTyping] = useState(false);

//   // NEW: gate auto-scroll until after the first user message
//   const [autoScrollEnabled, setAutoScrollEnabled] = useState(false);

//   const bottomRef = useRef<HTMLDivElement | null>(null);

//   // Only scroll when user has replied at least once
//   useEffect(() => {
//     if (!autoScrollEnabled) return;
//     bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
//   }, [chatHistory, isBotTyping, autoScrollEnabled]);

//   // Fetch initial greeting
//   useEffect(() => {
//     const startChat = async () => {
//       try {
//         const res = await fetch('/api/start', { method: 'POST' });
//         const data = await res.json();
//         setConversationId(data.conversation_id);
//         setChatHistory([{ role: 'bot', text: data.message }]);
//       } catch (err) {
//         console.error('Failed to start conversation:', err);
//       }
//     };

//     startChat();
//   }, []);

//   const handleSendMessage = async () => {
//     if (!message.trim() || !conversationId) return;

//     const userMessage = message;
//     setMessage('');

//     // Enable auto-scroll starting with the user's first message
//     if (!autoScrollEnabled) setAutoScrollEnabled(true);

//     const newUserMsg: Message = { role: 'user', text: userMessage };
//     setChatHistory((prev) => [...prev, newUserMsg]);
//     setIsBotTyping(true);

//     try {
//       const res = await fetch('/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           conversation_id: conversationId,
//           message: userMessage,
//         }),
//       });

//       const data = await res.json();
//       setIsBotTyping(false);

//       const botReply: Message = { role: 'bot', text: data.message };
//       setChatHistory((prev) => [...prev, botReply]);
//     } catch (err) {
//       console.error('Chat failed:', err);
//       setIsBotTyping(false);
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
//               index < completedSteps
//                 ? 'bg-blue-300 border-blue-500 text-white'
//                 : 'bg-white border-gray-300'
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

//       {/* Chat Area */}
//       <div className="flex-1 flex flex-col justify-between items-center p-8 border-l">
//         {/* Chat Messages */}
//         <div className="flex flex-col gap-4 w-full max-w-xl overflow-y-auto max-h-[60vh]">
//           {chatHistory.map((msg, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: msg.role === 'user' ? 50 : -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`p-3 rounded-lg shadow-md w-fit max-w-[80%] ${
//                 msg.role === 'user'
//                   ? 'bg-blue-500 text-white self-end'
//                   : 'bg-gray-200 text-gray-800 self-start'
//               }`}
//             >
//               {msg.text}
//             </motion.div>
//           ))}

//           {/* Bot Typing Indicator */}
//           {isBotTyping && (
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//               className="p-3 rounded-lg shadow-md w-fit max-w-[80%] bg-gray-200 text-gray-800 self-start"
//             >
//               <ChatThinking />
//             </motion.div>
//           )}

//           {/* Scroll Anchor */}
//           <div ref={bottomRef} />
//         </div>

//         {/* Input Field */}
//         <div className="w-full max-w-xl flex items-center mt-4 border-t pt-4">
//           <input
//             type="text"
//             className="flex-1 p-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Type a message..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//             aria-label="Chat message"
//           />
//           <button
//             onClick={handleSendMessage}
//             className="ml-3 bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600"
//             aria-label="Send message"
//           >
//             <Send size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */


'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Send, RefreshCcw } from 'lucide-react';
import { ChatThinking } from '@/icons/chat-thinking';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

type Message = {
  role: 'user' | 'bot';
  text: string;
};

// export default function StepProgressChat() {
//   const [completedSteps, setCompletedSteps] = useState<number>(0);
//   const [conversationId, setConversationId] = useState<string | null>(null);
//   const [chatHistory, setChatHistory] = useState<Message[]>([]);
//   const [message, setMessage] = useState('');
//   const [isBotTyping, setIsBotTyping] = useState(false);

//   // NEW: initial loading + error states
//   const [isInitializing, setIsInitializing] = useState(true);
//   const [initError, setInitError] = useState<string | null>(null);

//   // Gate auto-scroll until after the first user message
//   const [autoScrollEnabled, setAutoScrollEnabled] = useState(false);

//   const bottomRef = useRef<HTMLDivElement | null>(null);

//   // Only scroll when user has replied at least once
//   useEffect(() => {
//     if (!autoScrollEnabled) return;
//     bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
//   }, [chatHistory, isBotTyping, autoScrollEnabled]);

//   // NEW: extracted startChat with cleanup + retryable
//   const startChat = useCallback(async () => {
//     const controller = new AbortController();
//     setIsInitializing(true);
//     setInitError(null);

//     try {
//       const res = await fetch('/api/start', { method: 'POST', signal: controller.signal });
//       if (!res.ok) throw new Error(`HTTP ${res.status}`);
//       const data = await res.json();

//       setConversationId(data.conversation_id);
//       setChatHistory([{ role: 'bot', text: data.message }]);
//     } catch (err: any) {
//       if (err?.name !== 'AbortError') {
//         console.error('Failed to start conversation:', err);
//         setInitError('Could not connect. Please try again.');
//       }
//     } finally {
//       setIsInitializing(false);
//     }

//     return () => controller.abort();
//   }, []);

//   useEffect(() => {
//     const abort = startChat();
//     return () => {
//       // If startChat returns a cleanup (it does), call it
//       if (typeof abort === 'function') abort();
//     };
//   }, [startChat]);

//   const handleSendMessage = async () => {
//     if (!message.trim() || !conversationId) return;

//     const userMessage = message;
//     setMessage('');

//     // Enable auto-scroll starting with the user's first message
//     if (!autoScrollEnabled) setAutoScrollEnabled(true);

//     const newUserMsg: Message = { role: 'user', text: userMessage };
//     setChatHistory((prev) => [...prev, newUserMsg]);
//     setIsBotTyping(true);

//     try {
//       const res = await fetch('/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           conversation_id: conversationId,
//           message: userMessage,
//         }),
//       });

//       const data = await res.json();
//       setIsBotTyping(false);

//       const botReply: Message = { role: 'bot', text: data.message };
//       setChatHistory((prev) => [...prev, botReply]);
//     } catch (err) {
//       console.error('Chat failed:', err);
//       setIsBotTyping(false);
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
//               index < completedSteps
//                 ? 'bg-blue-300 border-blue-500 text-white'
//                 : 'bg-white border-gray-300'
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

//       {/* Chat Area */}
//       <div className="flex-1 flex flex-col justify-between items-center p-8 border-l">
//         {/* Chat Messages */}
//         <div
//           className="flex flex-col gap-4 w-full max-w-xl overflow-y-auto max-h-[60vh]"
//           aria-busy={isInitializing}
//           aria-live="polite"
//         >
//           {/* NEW: Initial loading skeleton (shown before greeting arrives) */}
//           {isInitializing && chatHistory.length === 0 && !initError && (
//              <div className="p-3 rounded-lg shadow-md w-fit max-w-[80%] bg-gray-200 text-gray-800 self-start">
//              <div className="flex items-start gap-3">
//                {/* <div className="h-8 w-8 rounded-full bg-gray-300 animate-pulse" /> */}
//                <div className="space-y-2">
//                  {/* <div className="h-3 w-40 bg-gray-300 rounded animate-pulse" />
//                  <div className="h-3 w-64 bg-gray-200 rounded animate-pulse" />
//                  <div className="h-3 w-52 bg-gray-200 rounded animate-pulse" /> */}
//                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
//                    <ChatThinking />
//                    <span>Connecting…</span>
//                  </div>
//                </div>
//              </div>
//            </div>
//           )}
         

//           {/* NEW: Initialization error state with retry */}
//           {initError && chatHistory.length === 0 && (
//             <div className="p-3 rounded-lg shadow-md w-fit max-w-[80%] bg-red-100 text-red-800 self-start">
//               <p className="font-medium">We couldn’t start the chat.</p>
//               <p className="text-sm opacity-80">{initError}</p>
//               <button
//                 onClick={() => startChat()}
//                 className="mt-2 inline-flex items-center gap-2 rounded-md bg-red-600 text-white px-3 py-1.5 hover:bg-red-700"
//               >
//                 <RefreshCcw size={16} /> Retry
//               </button>
//             </div>
//           )}

//           {/* Existing chat bubbles */}
//           {chatHistory.map((msg, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: msg.role === 'user' ? 50 : -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`p-3 rounded-lg shadow-md w-fit max-w-[80%] ${
//                 msg.role === 'user'
//                   ? 'bg-blue-500 text-white self-end'
//                   : 'bg-gray-200 text-gray-800 self-start'
//               }`}
//             >
//               {msg.text}
//             </motion.div>
//           ))}

//           {/* Bot Typing Indicator */}
//           {isBotTyping && (
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//               className="p-3 rounded-lg shadow-md w-fit max-w-[80%] bg-gray-200 text-gray-800 self-start"
//             >
//               <ChatThinking />
//             </motion.div>
//           )}

//           {/* Scroll Anchor */}
//           <div ref={bottomRef} />
//         </div>

//         {/* Input Field */}
//         <div className="w-full max-w-xl flex items-center mt-4 border-t pt-4">
//           <input
//             type="text"
//             className="flex-1 p-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
//             placeholder={isInitializing ? 'Connecting…' : 'Type a message...'}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//             aria-label="Chat message"
//             disabled={isInitializing || !conversationId || !!initError}
//           />
//           <button
//             onClick={handleSendMessage}
//             className="ml-3 bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600 disabled:opacity-50"
//             aria-label="Send message"
//             disabled={isInitializing || !conversationId || !!initError || !message.trim()}
//           >
//             <Send size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function StepProgressChat() {
  const [completedSteps, setCompletedSteps] = useState<number>(0);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Initial loading + error states
  const [isInitializing, setIsInitializing] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);

  // Gate auto-scroll until after the first user message
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Only scroll when user has replied at least once
  useEffect(() => {
    if (!autoScrollEnabled) return;
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [chatHistory, isBotTyping, autoScrollEnabled]);

  // Start chat (accepts AbortSignal for proper cleanup)
  const startChat = useCallback(
    async (signal: AbortSignal) => {
      setIsInitializing(true);
      setInitError(null);

      try {
        const res = await fetch('/api/start', { method: 'POST', signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        setConversationId(data.conversation_id);
        setChatHistory([{ role: 'bot', text: data.message }]);
      } catch (err: any) {
        if (err?.name !== 'AbortError') {
          console.error('Failed to start conversation:', err);
          setInitError('Could not connect. Please try again.');
        }
      } finally {
        setIsInitializing(false);
      }
    },
    []
  );

  // Kick off initial greeting with proper cleanup
  useEffect(() => {
    const controller = new AbortController();
    void startChat(controller.signal);
    return () => controller.abort();
  }, [startChat]);

  const handleSendMessage = async () => {
    if (!message.trim() || !conversationId) return;

    const userMessage = message;
    setMessage('');

    // Enable auto-scroll starting with the user's first message
    if (!autoScrollEnabled) setAutoScrollEnabled(true);

    const newUserMsg: Message = { role: 'user', text: userMessage };
    setChatHistory((prev) => [...prev, newUserMsg]);
    setIsBotTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

  return (
    <div className="flex h-[80vh] flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/4 bg-blue-100 p-6 flex flex-col gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-md border ${
              index < completedSteps
                ? 'bg-blue-300 border-blue-500 text-white'
                : 'bg-white border-gray-300'
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

      {/* Chat Area */}
      <div className="flex-1 flex flex-col justify-between items-center p-8 border-l">
        {/* Chat Messages */}
        <div
          className="flex flex-col gap-4 w-full max-w-xl overflow-y-auto max-h-[60vh]"
          aria-busy={isInitializing}
          aria-live="polite"
        >
          {/* Initial loading skeleton (shown before greeting arrives) */}
          {isInitializing && chatHistory.length === 0 && !initError && (
            <div className="p-3 rounded-lg shadow-md w-fit max-w-[80%] bg-gray-200 text-gray-800 self-start">
              <div className="flex items-start gap-3">
                <div className="space-y-2">
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <ChatThinking />
                    <span>Connecting…</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Initialization error state with retry */}
          {initError && chatHistory.length === 0 && (
            <div className="p-3 rounded-lg shadow-md w-fit max-w-[80%] bg-red-100 text-red-800 self-start">
              <p className="font-medium">We couldn’t start the chat.</p>
              <p className="text-sm opacity-80">{initError}</p>
              <button
                onClick={() => {
                  const c = new AbortController();
                  void startChat(c.signal);
                }}
                className="mt-2 inline-flex items-center gap-2 rounded-md bg-red-600 text-white px-3 py-1.5 hover:bg-red-700"
              >
                <RefreshCcw size={16} /> Retry
              </button>
            </div>
          )}

          {/* Existing chat bubbles */}
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
            className="flex-1 p-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            placeholder={isInitializing ? 'Connecting…' : 'Type a message...'}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            aria-label="Chat message"
            disabled={isInitializing || !conversationId || !!initError}
          />
          <button
            onClick={handleSendMessage}
            className="ml-3 bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600 disabled:opacity-50"
            aria-label="Send message"
            disabled={isInitializing || !conversationId || !!initError || !message.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

