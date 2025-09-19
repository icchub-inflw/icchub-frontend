"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import ImageHost from "../ui/image-host";
// import { Button } from "../ui/button";

export default function Vetted() {
  return (
    <section
      id={"how-it-works"}
      className="flex flex-col md:flex-row items-center justify-center px-6 py-32 w-full mx-auto max-w-7xl gap-10"
    >
      {/* Left Column - Text Content */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold text-[#156082] font-heading2 mb-4">Our Trades Pros</h2>
        <h2 className="text-5xl font-bold text-gray-900 font-heading">
        Vetted trades pros: licensed, skilled & passionate about providing quality work
        </h2>
        <p className="mt-4 text-gray-700 text-2xl font-heading2">
        Our <strong>trades pros</strong> are pre-vetted to ensure quality is maintained on every project
        </p>
      </motion.div>
      {/* Right Column - Image */}

      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ImageHost src="/iStock-494726700.jpg" />
      </motion.div>
    </section>
  );
}
