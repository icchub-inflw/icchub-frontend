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
import Image from 'next/image';
import Link from 'next/link';

const steps = ['Share your project details', 'Receive recommendations', `Schedule trades pro's visits`, 'Process payments online & securely'];

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

// Put this near your component (or extract it)
function Tail({
  side,
  color,
  top = 10,          // px from top of bubble
  width = 16,        // tail width
  height = 22,       // tail height
  overlap = 6,       // px the tail overlaps the bubble edge
  angle = 0.42,      // 0..1: where the point lands vertically (0.5 = centered)
}: {
  side: "left" | "right";
  color: string;
  top?: number;
  width?: number;
  height?: number;
  overlap?: number;
  angle?: number;
}) {
  // Slightly angled shape, not an equilateral triangle
  // Right-pointing wedge tip at (100%, angle*100%)
  const RIGHT_POLY = `polygon(0% 0%, 100% ${angle * 100}%, 0% 100%)`;
  // Left-pointing wedge tip at (0%, angle*100%)
  const LEFT_POLY  = `polygon(100% 0%, 0% ${angle * 100}%, 100% 100%)`;

  const style: React.CSSProperties = {
    backgroundColor: color,
    width,
    height,
    // Pull the tail slightly under the bubble edge to hide seams
    marginLeft: side === "right" ? -overlap : undefined,
    marginRight: side === "left" ? -overlap : undefined,
    marginTop: top,
    clipPath: side === "right" ? RIGHT_POLY : LEFT_POLY,
    // Ensure it paints above the bubble without needing absolute positioning
    position: "relative",
    zIndex: 10,
    pointerEvents: "none",
    flex: "0 0 auto",
    borderRadius: 3, // softens edges just a bit
  };

  return <span aria-hidden="true" style={style} />;
}

function CornerTail({
  side,
  color,
  size = 24,   // tail height
  width = 20,  // tail width
  overlap = 6, // how far it tucks under the bubble
}: {
  side: "left" | "right";
  color: string;
  size?: number;
  width?: number;
  overlap?: number;
}) {
  const base = {
    position: "absolute" as const,
    bottom: -size + overlap, // pulls it up so it touches bubble
    width,
    height: size,
    backgroundColor: color,
    zIndex: 10,
    pointerEvents: "none" as const,
  };

  const style: React.CSSProperties =
    side === "left"
      ? { ...base, left: 0, clipPath: "polygon(0 100%, 0 0, 100% 100%)" }
      : { ...base, right: 0, clipPath: "polygon(100% 100%, 100% 0, 0 100%)" };

  return <span aria-hidden="true" style={style} />;
}

function SvgCornerTail({
  side,
  color,
  size = 26,   // tail height
  width = 22,  // tail width
  overlap = 6, // how much overlaps under the bubble edge (hides the seam)
}: {
  side: "left" | "right";
  color: string;
  size?: number;
  width?: number;
  overlap?: number;
}) {
  const style: React.CSSProperties =
    side === "left"
      ? { position: "absolute", bottom: -size + overlap, left: 0, zIndex: 10, pointerEvents: "none" }
      : { position: "absolute", bottom: -size + overlap, right: 0, zIndex: 10, pointerEvents: "none" };

  // Angled wedge (not equilateral). Extends slightly under bubble via the `overlap`.
  // For LEFT: tip points down-left; for RIGHT: down-right.
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={size}
      viewBox={`0 0 ${width} ${size}`}
      style={style}
      preserveAspectRatio="none"
    >
      {side === "left" ? (
        // Starts *inside* bubble (x = overlap) to hide seam, angles outward to bottom-left
        <path d={`M ${overlap} ${size} L ${width} 0 L ${width * 0.65} ${size}`} fill={color} />
      ) : (
        // Mirror to the right side
        <path d={`M ${width - overlap} ${size} L 0 0 L ${width * 0.35} ${size}`} fill={color} />
      )}
    </svg>
  );
}


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

      <div className="md:w-1/4 bg-white flex flex-col justify-between">
        <Link href={"/"} className="p-6 text-center font-italic"><Image className='mb-2' alt="" height={1000} width={1000} src={"/inflw.stacked.colour.png"} />Let's get started</Link>
        <div>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center px-3 py-5 border-b font-bold ${index === completedSteps
                ? 'bg-brand-light border-white'
                : 'bg-brand border-white'
                }`}
            >
              {/* {index < completedSteps ? ( */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <CheckCircle className="text-green-500" size={20} /> */}
                </motion.div>
              {/* ) : ( */}
                {/* // <Circle className="text-gray-400" size={20} /> */}
              {/* )} */}
              {step}
            </div>
          ))}
        </div>

      </div>

      {/* Chat Area */}
      {/* Chat Area */}
<div className="flex-1 flex flex-col justify-between items-center p-8 border-l bg-[#BFE7F5]">
  {/* Chat Messages */}
  <div
    className="flex flex-col gap-4 w-full max-w-xl overflow-y-auto max-h-[60vh]"
    aria-busy={isInitializing}
    aria-live="polite"
  >
    {/* Initial loading skeleton (shown before greeting arrives) */}
    {isInitializing && chatHistory.length === 0 && !initError && (
      <div
        className="
          relative w-fit max-w-[80%] px-4 py-3 rounded-2xl shadow-md
          text-white self-start bg-[#00ACC1]
          before:content-[''] before:absolute before:-left-3 before:top-3
          before:w-0 before:h-0
          before:border-t-[10px] before:border-b-[10px] before:border-t-transparent before:border-b-transparent
          before:border-r-[14px] before:border-r-[#00ACC1]
        "
      >
        <div className="mt-1 flex items-center gap-2 text-white/90 text-sm">
          <ChatThinking />
          <span>Connecting…</span>
        </div>
      </div>
    )}

    {/* Initialization error state with retry */}
    {initError && chatHistory.length === 0 && (
      <div
        className="
          relative w-fit max-w-[80%] px-4 py-3 rounded-2xl shadow-md
          text-red-900 self-start bg-red-100
          before:content-[''] before:absolute before:-left-3 before:top-3
          before:w-0 before:h-0
          before:border-t-[10px] before:border-b-[10px] before:border-t-transparent before:border-b-transparent
          before:border-r-[14px] before:border-r-red-100
        "
      >
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
    {chatHistory.map((msg, i) => {
      const isUser = msg.role === 'user';
      const BG_USER = "#4DD0E1";
      const BG_BOT  = "#00ACC1";
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: isUser ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={[
            // base bubble
            "relative w-fit max-w-[80%] px-4 py-3 rounded-2xl shadow-md",
            // alignment
            isUser ? "self-end" : "self-start",
            // colors
            isUser ? "bg-[#4DD0E1] text-white" : "bg-[#00ACC1] text-white",
            // tails
            isUser
              ? "before:content-[''] before:absolute before:-right-3 before:top-3 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-t-transparent before:border-b-transparent before:border-l-[14px] before:border-l-[#4DD0E1]"
              : "before:content-[''] before:absolute before:-left-3 before:top-3 before:w-0 before:h-0 before:border-t-[10px] before:border-b-[10px] before:border-t-transparent before:border-b-transparent before:border-r-[14px] before:border-r-[#00ACC1]"
          ].join(" ")}
        >
          {msg.text}
        </motion.div>
     
      );
    })}




    {/* Bot Typing Indicator */}
    {isBotTyping && (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="
          relative w-fit max-w-[80%] px-4 py-3 rounded-2xl shadow-md
          text-white self-start bg-[#00ACC1]
          before:content-[''] before:absolute before:-left-3 before:top-3
          before:w-0 before:h-0
          before:border-t-[10px] before:border-b-[10px] before:border-t-transparent before:border-b-transparent
          before:border-r-[14px] before:border-r-[#00ACC1]
        "
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
      className="flex-1 p-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00ACC1] disabled:opacity-50"
      placeholder={isInitializing ? 'Connecting…' : 'Type a message...'}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
      aria-label="Chat message"
      disabled={isInitializing || !conversationId || !!initError}
    />
    <button
      onClick={handleSendMessage}
      className="ml-3 bg-[#00ACC1] text-white p-3 rounded-full shadow hover:bg-[#0095A8] disabled:opacity-50"
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

