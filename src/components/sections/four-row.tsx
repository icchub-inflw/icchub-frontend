"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bannerContent = [
  {
    text: "Seamless Planning & Execution",
    reverse: false,

    image:
      "https://images.unsplash.com/flagged/photo-1554757388-5982229b9ce7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Share details about your project",
    description:
      "Answer < 10 pre-screening questions within our customized chatbot INFLW.",
    step: "1",
  },

  {
    text: "High-Quality Craftsmanship",
    reverse: true,
    image:
      "https://images.unsplash.com/photo-1625864667443-bc321825fcce?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Receive trades pro team recommendation",
    description: `INFLW will assesses your project needs, and the availability of members within the ICCHub network to recommend a set of trades pro(s) for your project

    trades pros included in the network have the following:
    Insurance protection
    Relevant certifications for given trade
    Strong online reviews
    Good standing within customer protection databases (e.g., Better Business Bureau)
    `,
    step: "2",
  },
  {
    text: "Innovative Design Solutions",
    reverse: false,
    image:
      "https://images.unsplash.com/photo-1554376279-d0bc03ddea1a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Book site visits with trades pro team",
    description: `After you have received the recommendation, INFLW will book a site visit with the trades pro(s) to meet you in person and get a better understanding of your project. Only after each trades pro party has seen your project will you receive a a complete and final project quote

    Please note that INLW will support you in your review of this quote, but providing you with price estimates ahead of their visit
    
    `,
    step: "3",
  },
  {
    text: "Client-Centric Approach",
    reverse: true,
    image:
      "https://images.unsplash.com/photo-1527697911963-20cb424e9608?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Contracting and payments",
    description: `Both parties will be asked to sign a Home Renovations Contract, detailing the scope of work, estimated timeline, payment schedule, trades pro profiles and their liability/warranty procedures

    Payments will be held in trust by ICCHub until a milestone is completed and reviewed by a third-party project inspector, after which it is paid out.
    `,
    step: "4",
  },
];

export default function AnimatedFourRowBanner() {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndex = 0

  return (
    <section id={'test'} className="flex flex-col items-center py-12 px-6 bg-gray-100 w-full">
      <div className="p-4 mt-8 bg-blue-100">
        <h1 className="max-w-[1200px] text-center mx-auto text-3xl font-semibold font-heading">
          How inflw.ai Works
        </h1>
      </div>
      <div className="flex flex-col gap-12 w-full max-w-6xl">
        {bannerContent.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${item.reverse ? "md:flex-row-reverse" : ""
              }`}
            initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={'https://images.unsplash.com/photo-1554470938-85886688c6e6?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                alt="Feature Image"
                width={400}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div
              className={`text-left flex ${currentIndex % 2 === 0 ? "order-first" : "order-last"
                }`}
            >
              <div className="text-8xl text-gray-400 px-4 border-r-4 border-blue-300 font-heading">
                <h1>{item.step}</h1>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 px-4 font-heading">
                  {item.title}
                </h2>
                <p className="text-gray-700 mt-2 px-4 font-body">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
