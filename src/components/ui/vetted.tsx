"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import ImageHost from "./image-host";
import { Button } from "./button";

export default function Vetted() {
  return (
    <section
      id={"how-it-works"}
      className="flex flex-col md:flex-row items-center justify-center px-6 py-12 w-full mx-auto max-w-7xl gap-10"
    >
      {/* Left Column - Text Content */}

      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-gray-900 font-heading">
          Vetted contractors: licensed, skills & passionate about providing
          quality work
        </h2>
        <p className="mt-4 text-gray-700 text-2xl font-body">
          Our contractors are pre-vetted to ensure project quality is maintained
          on every project.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
      {/* Right Column - Image */}

      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0"
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
