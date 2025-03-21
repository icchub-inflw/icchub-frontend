"use client";

import { Hammer } from "@/icons/hammer";
import { PencilRuler } from "@/icons/pencil-ruler";
import { Worker } from "@/icons/worker";
import { Wrench } from "@/icons/wrench";
import { motion } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Kitchen",
    image: "https://via.placeholder.com/300",
    icon: <Wrench />,
    description:
      "Transform your home with expert craftsmanship and high-quality materials.",
  },
  {
    id: 2,
    title: "Living room",
    image: "https://via.placeholder.com/300",
    icon: <Hammer />,
    description:
      "Our professional designers will help you create a stunning space that reflects your vision.",
  },
  {
    id: 3,
    title: "Dining room",
    image: "https://via.placeholder.com/300",
    icon: <PencilRuler />,
    description:
      "Seamless planning and design to bring your dream project to life.",
  },
  {
    id: 4,
    title: "Bathroom",
    image: "https://via.placeholder.com/300",
    icon: <Worker />,
    description:
      "Seamless planning and design to bring your dream project to life.",
  },
];

export default function ServicesBanner() {
  return (
    <section id={'services'}  className="flex flex-col items-center py-12 px-6 w-full">
      <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center font-heading">
        Our Services
      </h2>
      <p className="text-gray-700 text-lg text-center mb-8 max-w-2xl font-body">
        ICCHub.ai contractors can complete renovation services for the following
        areas of your home
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <Link key={service.id} href={"#"} className="inline-block transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center text-center border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="rounded-md mb-4"
            /> */}
              <div className="p-6 bg-blue-100 rounded-full border border-blue-300 mb-6">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 font-heading">
                {service.title}
              </h3>
              <p className="text-gray-700 mt-2 font-body">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
