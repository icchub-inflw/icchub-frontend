"use client";

import { Benefit } from "@/icons/benefit";
import { CheckList } from "@/icons/checklist";
import { JoinUs } from "@/icons/join-us";
import { motion } from "framer-motion";
import Link from "next/link";

const contractorDetails = [
  {
    title: "Join Us",
    description:
      "Become part of a trusted network of skilled trades pros and grow your business with us.",
    icon: <JoinUs />,
  },
  {
    title: "Key Eligibility Criteria",
    description:
      "Professionals with proven experience in home renovations, appropriate certifications, and insurance protection will be considered for the network.",
    icon: <CheckList />,
  },
  {
    title: "Key Benefits",
    description:
      "Access to exclusive projects, seamless client matching, and business growth opportunities.",
    icon: <Benefit />,
  },
];

export default function ContractorDetailsBanner() {
  return (
    <section
      id={"details-for-contractors"}
      className="flex flex-col items-center py-12 px-6 bg-brand-light w-full mt-16 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold text-[#156082] mb-6 font-heading2 text-4xl">
        Join as a Trades Pro and Get More Leads
      </h2>
      <Link
        href="#"
        className="bg-brand text-white hover:bg-blue-600 font-body text-xl py-4 px-8 mb-12 rounded-md"
      >
        Start your application
      </Link>{" "}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full max-w-6xl">
        {contractorDetails.map((detail, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 md:w-2/3 mx-auto flex flex-col md:flex-row gap-8 items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#d7eff5] p-3 rounded">{detail.icon}</div>
            <div>
              {/* <h3 className="text-2xl font-semibold text-gray-900 font-heading">{detail.title}</h3> */}
              <motion.h3
                className="text-xl font-bold text-[#156082] font-heading2 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {detail.title}
                <motion.div
                  //   className="absolute left-0 top-10 bottom-0 w-[70%] h-[2px] bg-gray-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.h3>
              <p className="text-gray-700 mt-4 font-heading2 text-lg">
                {detail.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
