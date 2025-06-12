"use client";

import { Button } from "../ui/button";

export default function WorkTogetherSection() {
  return (
    <section className="bg-white py-20 px-6 flex flex-col items-start max-w-6xl mx-auto">
      {/* Small heading */}
      <h3 className="text-blue-600 text-lg font-semibold mb-2 font-body">
        Work at ICCHub
      </h3>

      {/* Main heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading">
        {`Let's work together`}
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 text-lg sm:text-xl font-body mb-8 max-w-2xl">
        {`Join us on our journey to making home renovations simpler.`}
      </p>

      {/* Button */}
      <div className="flex flex-col md:flex-row gap-4">
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
      
    </section>
  );
}
