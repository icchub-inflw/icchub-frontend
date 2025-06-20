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
    title: "Share your project details",
    icon: <ChatBubble />,
    description:
      "Begin your chat with inflw. You will be asked a series of pre-screening questions about your project.",
  },
  {
    id: 2,
    number: 2,
    title: "Receive recommendations",
    icon: <Team />,
    description:
      "inflw assesses your project needs and personalizes a project team to meet them. trades pros recommended from our network are vetted and passionate about providing quality work.",
  },
  {
    id: 3,
    number: 3,
    title: "Schedule trades pro visits",
    icon: <Calendar />,
    description:
      "inflw provides you with team recommendations, and supports you in booking a time for each trades pro to visit your site. trades pros visit your project site to provide more accurate project quotes.",
  },
  {
    id: 4,
    number: 4,
    title: "Process payments online & securely",
    icon: <Agree />,
    description:
      "When you’re ready, sign a Home Renovations Contract, detailing the scope of work, estimated timeline, payment schedule, trades pro profiles and their liability/warranty procedures. Payments are paid out in 2-installments, at the beginning (as a downpayment), and then after the completion of the project. Please note that the final payment is held in trust until final inspection and/or approval of the homeowner.",
  },
  //  { number: 5, text: "Monitor your project via your dashboard" },
];

// export default function AnimatedStepsRow() {
//   return (
//     <div className="flex flex-col items-center py-12 px-6 bg-gray-100 w-full">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading text-4xl">How it works</h2>
//       <div className="relative flex items-center gap-10 w-full max-w-5xl justify-between">
//         {/* Dotted Line Animation */}
//         <motion.div
//           className="md:absolute md:top-10 md:left-[10%] md:w-[80%] md:h-1 md:border-dotted md:border-blue-500"
//           initial={{ width: 0 }}
//           animate={{ width: "80%" }}
//           transition={{ duration: 6, ease: "easeInOut" }}
//           style={{ borderBottomWidth: "2px" }}
//         />

//         {/* Steps */}
//         {steps.map((step, index) => (
//           <motion.div
//             key={step.number}
//             className="relative flex flex-col items-center text-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.8, delay: index * 0.9 }}
//           >
//             {/* Animated Circle */}
//             <motion.div
//               className="font-body w-20 h-20 gap-2 flex items-center justify-center flex-col rounded-full text-white text-3xl font-bold bg-blue-500"
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: index * 0.8 }}
//               whileHover={{ scale: 1.1 }}
//             >
//               {step.number}

//             </motion.div>
//             {/* Step Text */}
//             <p className="font-body mt-2 text-gray-800 text-sm font-semibold w-[75%]">{step.text}</p>
//            {/* <div>{step.icon}</div> */}
//           </motion.div>
//         ))}
//       </div>

//        {/* Call to Action */}
//        <div className="mt-16">
//         <motion.button
//           className="font-body px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Learn more
//         </motion.button>
//       </div>
//     </div>
//   );
// }

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
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-[#156082] font-heading2 mb-3 font-heading items-start">
          Our Approach
        </h2>
        <p className="text-gray-700 text-3xl font-heading2 mb-8 max-w-7xl text-left">
          {/* ICCHub.ai’s chatbot, INFLW, was developed to support homeowners in
          sourcing talent within their area and of high quality. Home
          renovations can involve multiple tradespersons, so INFLW ensures you
          know who exactly will be working on your project, (i.e., skill set,
          licenses and past feedback).{" "} */}
          inflw, leverages AI to connect homeowners with high quality trades
          pros within a given area, and supports both parties in managing the
          project workflow, including contracting and payment processing.
        </p>
        <div className="relative flex flex-col sm:flex-row items-start w-full max-w-7xl justify-center">
          {/* Dotted Line Animation - Responsive */}
          {/* <motion.div
            className="absolute hidden sm:block top-16 left-[10%] w-[90%] h-1 border-dotted border-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 6, ease: "easeInOut" }}
            style={{ borderBottomWidth: "2px" }}
          /> */}
          <motion.div
            className="absolute hidden sm:block top-16 left-[10%] h-1 border-dotted border-blue-500"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 6, ease: "easeInOut" }}
            style={{ borderBottomWidth: "2px" }}
          />

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
                className="font-heading w-16 h-16 sm:w-36 sm:h-36 flex items-center justify-center rounded-full text-white text-2xl sm:text-5xl font-semibold bg-blue-500 hover:cursor-pointer mt-6 md:mt-0"
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{ duration: 0.8 }}
                // whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                {step.number}
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
                  className="flex flex-col items-center bg-white p-3 mx-3 rounded-md font-body"
                >
                  <h1 className="font-body my-2 text-gray-800 md:text-xl font-bold sm:text-base font-semibold w-[80%] text-center">
                    {step.title}
                  </h1>

                  <div className="w-[80%] text-center">
                    <AnimatePresence mode="wait">
                      {expandedStep !== step.id ? (
                        <motion.p
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {step.description.slice(0, 70)} ...{" "}
                          <button
                            onClick={() => toggleExpand(step.id)}
                            className="text-blue-600 mx-2"
                          >
                            More
                          </button>
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
