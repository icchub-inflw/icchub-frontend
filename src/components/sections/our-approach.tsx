"use client";

// import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import ThreadedArrow from "@/animations/arrow";
import { ChatBubble } from "@/icons/chat-bubble";
import { Team } from "@/icons/team";
import { Calendar } from "@/icons/calendar";
import { Agree } from "@/icons/agree";
// import { Button } from "./button";
import { useState } from "react";

const steps = [
  {
    id: 1,
    number: 1,
    label: 'ONE',
    title: "Share your project details",
    icon: <ChatBubble />,
    description:
      <p>Begin your chat with <span className="text-brand font-bold">inflw</span> – answering a series of pre-screening questions</p>,
  },
  {
    id: 2,
    number: 2,
    label: 'TWO',
    title: "Receive recommendations",
    icon: <Team />,
    description:
      <p>Review your personalized team recommendations for your renovation</p>,
  },
  {
    id: 3,
    number: 3,
    label: 'THREE',
    title: "Schedule trades pros’ visits",
    icon: <Calendar />,
    description:
      <p>Receive support from <span className="text-brand font-bold">inflw</span> to schedule your first encounter with members of the team</p>,
  },
  {
    id: 4,
    number: 4,
    label: 'FOUR',
    title: "Process payments online & securely",
    icon: <Agree />,
    description:
      <p>Sign a Home Renovations Contract when you’re ready and plan for project payments on a secure platform</p>,
  },
];


export default function AnimatedStepsRow() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  return (
    <section
      id={"how-it-works"}
      className="flex flex-col py-12 px-4 sm:px-6 bg-gray-100 w-full scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-xl font-bold text-[#156082] font-heading2 mb-3 font-heading items-start text-center md:text-left">
          Our Approach
        </h2> */}
        {/* <p className="text-gray-700 text-3xl font-heading2 mb-8 max-w-7xl text-center md:text-left"> */}
          {/* inflw.ai’s chatbot, INFLW, was developed to support homeowners in
          sourcing talent within their area and of high quality. Home
          renovations can involve multiple tradespersons, so INFLW ensures you
          know who exactly will be working on your project, (i.e., skill set,
          licenses and past feedback).{" "} */}
          {/* inflw, leverages AI to connect homeowners with high quality trades
          pros within a given area, and supports both parties in managing the
          project workflow, including contracting and payment processing. */}
        {/* </p> */}
        <div className="relative flex flex-col sm:flex-row items-start w-full max-w-6xl justify-center">
          {/* Dotted Line Animation - Responsive */}
          {/* <motion.div
            className="absolute hidden sm:block top-16 left-[10%] w-[90%] h-1 border-dotted border-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 6, ease: "easeInOut" }}
            style={{ borderBottomWidth: "2px" }}
          /> */}
          {/* <motion.div
            className="absolute hidden sm:block top-16 left-[10%] h-1 border-dotted border-blue-500"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 6, ease: "easeInOut" }}
            style={{ borderBottomWidth: "2px" }}
          /> */}

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative flex flex-col items-center text-center w-full sm:w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8, delay: index * 0.9 }}
            >
              {/* Animated Circle */}
              <motion.div
                className="font-heading h-16 w-36 sm:h-auto p-2 flex items-center justify-center text-black text-2xl sm:text-xl font-semibold bg-brand-light hover:cursor-pointer mt-6 md:mt-0"
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{ duration: 0.8 }}
                // whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                STEP {step.label}
              </motion.div>

              {/* Step Text */}
              {/* <div className="flex flex-col items-center md:h-48">
                <div className="flex flex-col items-center bg-white p-3 mx-3 rounded-md font-body md:mt-auto">
                <h1 className="font-body my-2 text-gray-800 md:text-xl font-bold sm:text-base font-semibold w-[80%]">
                  {step.title}
                </h1>
                  <p>
                    {step.description.slice(0, 80)}...{" "}
                    <Link href={"#"} className="text-blue-600 mx-2">
                      More
                    </Link>
                  </p>
                </div>
              </div> */}
              <div className="flex flex-col gap-6 mt-6">
                <motion.div
                  key={step.id}
                  layout
                  className="flex flex-col items-center bg-transparent p-3 mx-3 rounded-md font-body"
                >
                  <h1 className="font-body my-2 text-brand md:text-xl font-bold sm:text-base font-semibold w-[80%] text-center">
                    {step.title}
                  </h1>

                  <div className="w-[100%] text-center">
                    <AnimatePresence mode="wait">
                      {expandedStep !== step.id ? (
                        <motion.p
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {/* {step.description.slice(0, 70)} ...{" "}
                          <button
                            onClick={() => toggleExpand(step.id)}
                            className="text-brand font-bold mx-2"
                          >
                            More
                          </button> */}
                          {step.description}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="expanded"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {step.description}{" "}
                          <button
                            onClick={() => toggleExpand(step.id)}
                            className="text-blue-600 mx-2"
                          >
                            Less
                          </button>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="flex mt-12 sm:mt-16 justify-center">
          <motion.button
            className="font-body px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.button>
        </div> */}
      </div>
    </section>
  );
}

// 1) Share your project details
// 2) Receive recommendations
// 3) Schedule trades pro visits
// 4) Process payments online & securely
