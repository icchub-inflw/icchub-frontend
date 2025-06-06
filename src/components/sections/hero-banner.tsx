// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import ImageHost from "./image-host";

// export default function HeroBanner() {
//   return (
//     <section className="bg-blue-100 py-16 px-6  min-h-[95vh]">
//       {/* Left Content */}

//       <div className="max-w-[100vw] mx-auto flex flex-col md:flex-row items-center justify-between">
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl text-center md:text-left"
//         >
//           <h1 className="text-4xl md:text-8xl font-bold text-gray-900 font-heading">
//             Your AI-Powered Home Renovations Community Hub
//           </h1>
//           <p className="mt-4 text-3xl text-gray-700 font-body">
//             Levering AI to <strong>simplify</strong> the workflow process of
//             small to medium-scale home renovations.
//           </p>
//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <Button
//               size="lg"
//               className="bg-blue-500 text-white hover:bg-blue-600 font-body text-lg"
//             >
//               Submit a Project
//             </Button>
//             <Button size="lg" variant="outline" className="font-body text-lg">
//               Join as a Contractor
//             </Button>
//           </div>
//         </motion.div>

//         {/* Right Image (Chat Mockup) */}
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="mt-10 md:mt-0"
//         >
//           <ImageHost src="https://images.unsplash.com/photo-1554470938-85886688c6e6?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ImageHost from "../ui/image-host";

export default function HeroBanner() {
  return (
    <section
      id={"about"}
      className="relative bg-blue-100 py-36 px-6 min-h-[95vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/Untitled design (7).png",
      }}
    >
      <div className="absolute inset-0 bg-blue-100/90" />{" "}
      {/* Dark overlay for readability */}
      <div className="relative max-w-[100vw] mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center md:text-left text-gray-800"
        >
          <h1 className="text-4xl md:text-[7rem] font-bold font-heading leading-none">
            Your <span className="text-blue-600">Home</span> Renovations{" "}
            <span className="text-blue-600"></span>
            <span className="text-blue-600">Community</span> Hub
          </h1>
          <p className="max-w-4xl mt-4 text-2xl font-body text-gray-700">
            Powered by AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 font-body text-xl py-6"
            >
              Submit a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-700 hover:border-gray-100 hover:bg-gray-100 hover:text-blue-500 font-body text-xl py-6"
            >
              Join as a Contractor
            </Button>
          </div>
        </motion.div>

        {/* Right Image (Chat Mockup) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 md:mt-0 relative"
        >
          <ImageHost src="/unnamed (1).png" />
        </motion.div>
      </div>
    </section>
  );
}
