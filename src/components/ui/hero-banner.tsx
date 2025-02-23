"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageHost from "./image-host";
// import chatMockup from '@/public/chat-mockup.png';

export default function HeroBanner() {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
          Renovate Efficiently
        </h1>
        <p className="mt-4 text-lg text-gray-700 font-body">
          With ICCHub.ai we leverage AI to help you build a team of home
          renovation contractors that you can <strong>trust</strong>, manage
          your project schedule, and process payments.
        </p>
        <p className="mt-2 text-gray-600 font-body">
          Receive renovation team recommendations for your next project today!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            size="lg"
            className="bg-blue-500 text-white hover:bg-blue-600 font-body text-lg"
          >
            Submit A Project
          </Button>
          <Button size="lg" variant="outline" className="font-body text-lg">
            Join As A Contractor
          </Button>
        </div>
      </motion.div>

      {/* Right Image (Chat Mockup) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 md:mt-0"
      >
        <ImageHost src="https://images.unsplash.com/photo-1554470938-85886688c6e6?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </motion.div>
    </section>
  );
}
