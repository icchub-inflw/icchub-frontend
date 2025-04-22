"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/flagged/photo-1554757388-5982229b9ce7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Share details about your project",
    description:
      "Answer < 10 pre-screening questions within our customized chatbot INFLW.",
    step: "1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1625864667443-bc321825fcce?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Receive contractor team recommendation",
    description: `INFLW will assesses your project needs, and the availability of members within the ICCHub network to recommend a set of contractor(s) for your project
    `,
    step: "2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554376279-d0bc03ddea1a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Book site visits with contractor team",
    description: `After you have received the recommendation, INFLW will book a site visit with the contractor(s) to meet you in person and get a better understanding of your project.
    `,
    step: "3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527697911963-20cb424e9608?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Contracting and payments",
    description: `Both parties will be asked to sign a Home Renovations Contract, detailing the scope of work, estimated timeline, payment schedule, contractor profiles and their liability/warranty procedures.`,
    step: "4",
  },
];

export default function HowItWorksBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Auto transition every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="bg-gray-100 scroll-mt-24" id="how-it-works">
      <div className="p-4 mt-8 bg-blue-100">
        <h1 className="max-w-[1200px] text-center mx-auto text-3xl font-semibold font-heading">
          How ICCHub.ai Works
        </h1>
      </div>
      <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden py-12">
        <div className="max-w-[1200px] mx-auto relative h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 items-center gap-12 p-8 mx-auto max-w-4xl"
            >
              {/* Image */}
              <div
                className={`flex justify-${
                  currentIndex % 2 === 0 ? "start" : "end"
                }`}
              >
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  width={400}
                  height={250}
                  className="w-auto h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Text */}
              <div
                className={`text-left flex ${
                  currentIndex % 2 === 0 ? "order-first" : "order-last"
                }`}
              >
                <div className="text-8xl text-gray-400 px-4 border-r-4 border-blue-300 font-heading">
                  <h1>{slides[currentIndex].step}</h1>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 px-4 font-heading">
                    {slides[currentIndex].title}
                  </h2>
                  <p className="text-gray-700 mt-2 px-4 font-body">
                    {slides[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
