"use client";

// import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import ThreadedArrow from "@/animations/arrow";
import { ChatBubble } from "@/icons/chat-bubble";
import { Team } from "@/icons/team";
import { Calendar } from "@/icons/calendar";
import { Agree } from "@/icons/agree";

const steps = [
  { number: 1, text: "Our approach", icon: <ChatBubble /> },
  { number: 2, text: "Vetter contractors process", icon: <Team /> },
  { number: 3, text: "Our priorities", icon: <Calendar /> },
  { number: 4, text: "Contracting and payments", icon: <Agree /> },
  //   { number: 5, text: "Monitor your project via your dashboard" },
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
  return (
    <section id={'how-it-works'} className="flex flex-col py-12 px-4 sm:px-6 bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading items-start">
          Our Approach
        </h2>
        <p className="text-2xl sm:text-xl text-gray-900 mb-8 font-body max-w-7xl text-left">
          ICCHub.ai’s chatbot, INFLW, was developed to support homeowners in
          sourcing talent within their area and of high quality. Home
          renovations can involve multiple tradespersons, so INFLW ensures you
          know who exactly will be working on your project, (i.e., skill set,
          licenses and past feedback).{" "}
        </p>
        <div className="relative flex flex-col sm:flex-row items-center w-full max-w-7xl justify-start">
          {/* Dotted Line Animation - Responsive */}
          <motion.div
            className="absolute hidden sm:block top-16 left-[10%] w-[90%] h-1 border-dotted border-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
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
                className="font-body w-16 h-16 sm:w-36 sm:h-36 flex items-center justify-center rounded-full text-white text-2xl sm:text-3xl font-bold bg-blue-500"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                {step.number}
              </motion.div>

              {/* Step Text */}
              <p className="font-body mt-2 text-gray-800 text-sm sm:text-base font-semibold w-[85%] sm:w-[75%]">
                {step.text}
              </p>
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
