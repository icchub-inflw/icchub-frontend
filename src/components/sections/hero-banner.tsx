
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section
      id={"about"}
      className="relative bg-gray-100 py-36 px-6 min-h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/iStock-1714802084.jpg",
      }}
    >
      {/* bg-gray-400/60 --> using as overlay for hero image */}
      <div className="absolute inset-0 bg-gray-600/30" />{" "}
      <Navbar />

      {/* Dark overlay for readability */}
      <div className="relative max-w-[100vw] mx-auto flex flex-col md:flex-row items-center top-[75px] justify-between">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center md:text-left text-white"
        >
          <h1 className="text-4xl md:text-[7rem] font-bold font-heading2 leading-none">
            Your Home Renovations Community Hub
          </h1>
          <p className="max-w-4xl mt-4 text-4xl font-heading2 text-white font-bold">
            Powered by AI
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdk21aY6OYbuCLXGT0hnuRzqEPGLL9D0Xixc-nNdFfxYzd2dg/viewform"
            >
              <Button
                size="lg"
                className="bg-brand text-white hover:text-brand hover:bg-gray-100 font-heading2 text-xl py-8 px-10"
              >
                Submit a Project
              </Button>
            </Link>

            <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdk21aY6OYbuCLXGT0hnuRzqEPGLL9D0Xixc-nNdFfxYzd2dg/viewform"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-gray-700 hover:border-gray-100 hover:bg-gray-100 hover:text-brand font-heading2 text-xl py-8 px-10"
              >
                Join as a Trades Pro
              </Button>
            </Link>

          </div>
        </motion.div>

        {/* Right Image (Chat Mockup) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 md:mt-0 relative"
        >
          {/* <ImageHost src="/unnamed (1).png" /> */}
        </motion.div>
      </div>
    </section>
  );
}
