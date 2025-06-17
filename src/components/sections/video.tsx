"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center px-4 max-w-7xl mx-auto py-20">
      <motion.div
        className="w-full text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold text-[#156082] font-heading2">
          In Action
        </h2>
        <p className="mt-4 text-gray-700 text-3xl font-heading2 italic">
          Chat with inflw to reduce the endless search time required to find the
          right trades and add robustness in final decision-making for your
          project teams.
        </p>
      </motion.div>
      <div className="relative w-full max-w-7xl my-8 aspect-video rounded-2xl overflow-hidden shadow-lg">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="inflow chat scenario"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full bg-blue-800 flex flex-col justify-center items-center text-white text-center text-xl italic relative">
            <span>
              Placeholder for video
              <br />
              <span className="text-base mt-2">
                [Just a recorded chat scenario with inflw]
              </span>
            </span>

            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center text-white hover:scale-105 transition-transform"
              aria-label="Play video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
