"use client";

import { motion } from "framer-motion";
// import { useState } from "react";

export default function ThreadedArrow() {
  // const [animationComplete, setAnimationComplete] = useState(false); // eslint-disable-line no-unused-vars

  return (
    <svg
      width="300"
      height="80"
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Threaded Arrow Path */}
      <motion.path
        d="M20 40 Q50 10, 80 40 T140 40 T200 40 T260 40 L280 40 L270 30 M280 40 L270 50" // Curved thread-like path
        stroke="blue"
        strokeWidth="4"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        // onAnimationComplete={() => setAnimationComplete(true)}
      />
    </svg>
  );
}
