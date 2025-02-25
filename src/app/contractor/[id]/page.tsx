// https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Next } from "@/icons/next";
import { Previous } from "@/icons/previous";


const quotes = [
  "Fantastic workmanship!",
  "On time and very professional.",
  "Great attention to detail.",
  "Highly recommended!",
  "Reasonable pricing.",
  "Very reliable team.",
];

const projectImages = [
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1595814432314-90095f342694?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1625577817040-a74f7ad0b520?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function ContractorProfile() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const itemsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage + 1) % Math.ceil(projectImages.length / itemsPerPage)
    );
  };

  const prevPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(projectImages.length / itemsPerPage)) %
        Math.ceil(projectImages.length / itemsPerPage)
    );
  };

  const displayedImages = projectImages.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="bg-blue-100 py-6 px-4 rounded-lg">
        {/* <h1 className="text-3xl font-bold font-heading text-gray-900 after:content-[''] after:block after:w-12 after:h-[4px] after:bg-blue-400 after:mt-1">
          John Doe
        </h1>
        <p className="mt-4">Toronto, ON</p> */}
        {/* <p className="flex items-center gap-2 mt-2 text-xs">
          <Mail className="w-5 h-5 text-gray-700" /> johndoe@email.com |  <Phone className="w-5 h-5 text-gray-700" /> (123) 456-7890
        </p> */}

        <div className="relative bg-blue-100 py-6 px-4 rounded-lg h-[10vh]">
          {/* Profile Image Overlapping Header */}
          <div className="absolute md:left-[15%] left-[50%] transform -translate-x-1/2 -bottom-12">
            <Image
              src="https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"
              alt="Contractor Avatar"
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
         
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col border rounded-lg p-4 bg-white shadow-lg">
          {/* Profile Image */}
          <div className="">
            <h1 className="text-4xl font-bold font-heading text-gray-900 after:content-[''] after:block after:w-12 after:h-[4px] after:bg-blue-400 after:mt-1">
              John Doe
            </h1>
            <p className="mt-2">Toronto, ON</p>
            <div className="flex flex-col items-start mt-4">
            <p className="flex items-center gap-2 mt-2 text-sm">
              <Mail className="w-5 h-5 text-gray-700" /> johndoe@email.com{" "}
            </p>
            <p className="flex items-center gap-2 mt-2 text-sm">
              <Phone className="w-5 h-5 text-gray-700" /> (123) 456-7890
            </p>
          </div>
          </div>
         
          {/* <Image
            src="https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"
            alt="Contractor Avatar"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="flex flex-col items-start">
            <p className="flex items-center gap-2 mt-2 text-sm">
              <Mail className="w-5 h-5 text-gray-700" /> johndoe@email.com{" "}
            </p>
            <p className="flex items-center gap-2 mt-2 text-sm">
              <Phone className="w-5 h-5 text-gray-700" /> (123) 456-7890
            </p>
          </div> */}
        </div>

        {/* AI-Generated Summary */}
        <div className="md:col-span-2 border rounded-lg p-6 bg-white shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 font-heading">
            AI-Generated Summary
          </h2>
          <p className="mt-2 text-gray-700 font-body">
           {`This section provides a summary of online reviews. The AI-generated
            content will summarize key insights and highlight the contractor's
            strengths in 3-5 sentences.`}
          </p>
        </div>
      </div>

      {/* Contractor Info & Key Quotes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Contractor Details */}
        <div className="border rounded-lg p-6 bg-white shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900 font-heading">
           Additional Contractor Information
          </h2>
          <ul className="mt-4 text-gray-700 space-y-2 font-body">
            {/* <li>
              <strong>Name:</strong> John Doe
            </li>
            <li>
              <strong>Location:</strong> Toronto, ON
            </li>*/}
            <li>
              <strong>Key Services:</strong> General Contracting, Renovation
            </li>
            <li>
              <strong>Years of Experience:</strong> 10+
            </li>
            <li>
              <strong>Projects Completed This Year:</strong> 15
            </li>
            {/* <li>
              <strong>Contact:</strong> johndoe@email.com | (123) 456-7890
            </li> */}
          </ul>
        </div>

        {/* Key Quotes Section (Carousel) */}
        <div className="md:col-span-2 border rounded-lg p-6 bg-white shadow-lg relative overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-900 font-heading">
            Key Quotes
          </h2>
          <div className="mt-4 h-24 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-gray-700 text-center text-2xl font-body"
              >
                {`"{quotes[currentQuoteIndex]}"`}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Past Project Gallery with Pagination */}
      <div className="mt-12 bg-blue-100 py-6 px-4 text-center rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 font-heading">
          Past Project Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {displayedImages.map((img, index) => (
            <button
              className="flex justify-center"
              key={index}
              onClick={() => setLightboxImage(img)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="border-2 border-blue-300 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img}
                  alt="Project Image"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md cursor-pointer h-40"
                />
              </motion.div>
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={prevPage}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
          >
            <Previous />
          </button>
          <button
            onClick={nextPage}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
          >
            <Next />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
            >
              {/* <X size={24} className="text-gray-900" /> */}X
            </button>
            <Image
              src={lightboxImage}
              alt="Enlarged Project"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
