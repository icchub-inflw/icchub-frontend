"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import ImageHost from "./image-host";

export default function OurVisionBanner() {
  return (
    <section id={'about'}  className="flex flex-col md:flex-row items-center justify-center py-12 w-full mx-auto max-w-7xl gap-10 bg-white">
      {/* Left Column - Text Content */}

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
        <ImageHost src="/annie-gray-WEWTGkPUVT0-unsplash.jpg" />
      </motion.div>
      {/* Right Column - Image */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 font-heading">
          Our Vision
        </h2>
        <p className="mt-4 text-gray-700 text-2xl font-body">
          ICCHub.ai believes in simplifying the process of sourcing quality and
          trustworthy contractors that meet your renovation needs, reducing the
          delays in starting and headaches throughout the project!
        </p>
      </motion.div>
    </section>
  );
}
