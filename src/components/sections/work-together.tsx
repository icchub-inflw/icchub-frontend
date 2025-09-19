"use client";

import { Button } from "../ui/button";

export default function WorkTogetherSection() {
  return (
    <section className="bg-white py-20 px-6 flex flex-col items-start max-w-6xl mx-auto">
      {/* Main heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 font-heading2 text-center md:text-left">
        {`Let's work together`}
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 text-lg sm:text-xl font-body mb-8 max-w-2xl italic text-center md:text-left">
        {`Join us on our journey to making home renovations simpler.`}
      </p>

      {/* Button */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mx-auto md:m-0">
        <Button
          size="lg"
          className="bg-brand text-white hover:bg-gray-100 font-body text-xl py-6 hover:text-brand"
        >
          Submit a Project
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-brand hover:border-gray-100 hover:bg-gray-100 hover:text-brand font-body text-xl py-6 border border-brand"
        >
          Join as a Trades Pro
        </Button>
      </div>

    </section>
  );
}
