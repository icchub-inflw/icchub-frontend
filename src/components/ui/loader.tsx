"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5; // Increase by 5% every interval
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center gap-2 mb-4 justify-center flex-col"
        >
          <motion.div
            className="p-2 text-lg font-bold"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0, -5, 0] }} // Bouncing effect
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            {/* flw */}
            <Image src={'/inflw.stacked.colour.png'} alt="" height={1000} width={1000} className="w-20" />

          </motion.div>
          {/* <motion.span
            className="text-md"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0, 5, 0] }} // Bouncing effect
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          >
            inflw.ai

          </motion.span> */}
        </motion.div>
        <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-brand"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
       
      </div>
      <p className="text-sm mt-2 text-gray-700 mb-4">
        Loading... {progress}%
      </p>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 24 24"
        >
          <circle
            cx="4"
            cy="12"
            r="3"
            fill="#2f7eed"
            stroke-width="0.3"
            stroke="#2f7eed"
          >
            <animate
              id="svgSpinners3DotsScale0"
              attributeName="r"
              begin="0;svgSpinners3DotsScale1.end-0.25s"
              dur="0.75s"
              values="3;.2;3"
            />
          </circle>
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="#2f7eed"
            stroke-width="0.3"
            stroke="#2f7eed"
          >
            <animate
              attributeName="r"
              begin="svgSpinners3DotsScale0.end-0.6s"
              dur="0.75s"
              values="3;.2;3"
            />
          </circle>
          <circle
            cx="20"
            cy="12"
            r="3"
            fill="#2f7eed"
            stroke-width="0.3"
            stroke="#2f7eed"
          >
            <animate
              id="svgSpinners3DotsScale1"
              attributeName="r"
              begin="svgSpinners3DotsScale0.end-0.45s"
              dur="0.75s"
              values="3;.2;3"
            />
          </circle>
        </svg> */}
      </div>
    </div>
  );
}
