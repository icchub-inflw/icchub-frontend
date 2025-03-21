"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import ImageHost from "./image-host";

export default function Vetted() {
  return (
    <section id={'how-it-works'}  className="flex flex-col md:flex-row items-center justify-center px-6 py-12 w-full mx-auto max-w-7xl gap-10">
      {/* Left Column - Text Content */}

      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 font-heading">
          Vetted contractors: licensed, skilled & passionate about what they do
        </h2>
        <p className="mt-4 text-gray-700 text-2xl font-body">
          ICCHub.ai contractors are pre-vetted to ensure project quality is
          maintained on every project
        </p>
      </motion.div>
      {/* Right Column - Image */}

      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* <Image
          src="https://via.placeholder.com/500x300" // Replace with actual image
          alt="Our Vision"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        /> */}
        <ImageHost src="/unnamed (2).png" />
      </motion.div>
    </section>
  );
}
