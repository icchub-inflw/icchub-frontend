"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const homeownerFaqs = [
  {
    id: 1,
    question: "How exactly does the process work?",
    answer: [
      (<><strong>Share your project details:</strong> describe your project as best as you can to inflw, our chatbot and your new best friend!</>),
      (<><strong>Receive recommendations:</strong> inflw scans our database to pull together a team of trades pros to meet all the skill sets required to complete your job and can start your project soonest.</>),
      (<><strong>Schedule trades pro visits:</strong> review the trades pro team profiles and confirm your interest in receiving support in scheduling your first site visits for each trades pro to review the project in detail and prepare a quote. Please note these site visits help to ensure the prices quoted are most accurate and reasonable to both parties.</>),
      (<><strong>Process payments online & securely:</strong> inflw will support you both in drafting a Home Renovations Contract and securely set up your payment plan once there is alignment between both parties on the project scope and pricing quotation.</>),
    ],
  },
  {
    id: 2,
    question: "How much does the process cost for homeowners?",
    answer: [
      "No cost to homeowners. trades pros pay a fee to be featured on the platform, in addition to a small transaction fee for processing each payment within the platform.",
    ],
  },
  // {
  //   id: 3,
  //   question: "Do I get multiple quotes – and if so, how many?",
  //   answer: [
  //     "inflw currently supports the pairing with trades pros and scheduling of the first encounters to get started right away. After the trades pros see your project, they will provide you with a quote.",
  //     "If you no longer want to work with the team proposed, you can follow up with inflw for a new proposed team and quote. Please note that the trades pros have base hourly rates and they review your job mainly to determine the hours of work needed to complete the job.",
  //   ],
  // },
  {
    id: 4,
    question: "Why should I trust your trades pro network",
    answer: [
      "All trades pros within the platform have been vetted based on factors including, their standing in online consumer protection databases, adequate licensing and insurance, strong customer feedback and reviews, and fair pricing (per the market).",
      "Moreover, we provide the option for you to have an inspector review the jobs at the mid-point and end-point to help ensure trades pros remain on task to provide you with the best service possible.",
    ],
  },
  // {
  //   id: 5,
  //   question: "Are all trades pros on here general trades pros/ foremen?",
  //   answer: [
  //     "inflw pulls in trades pros at the subtrades pro level. Subtrades pros are tradespersons who specialize in a particular area of work (e.g., plumbing) and are typically hired by a general trades pro, however at an additional fee (i.e., about 20-30% extra). Our system aims to help keep prices affordable by leveraging AI to create teams with the skill set needed to meet your project needs.",
  //   ],
  // },
  // {
  //   id: 6,
  //   question: "How will the quality of the project be monitored?",
  //   answer: [
  //     "inflw will give you the option to request an inspector to review at the mid- and end- stages of the project.",
  //   ],
  // },
  // {
  //   id: 7,
  //   question:
  //     "Can inflw provide recommendations for other professional services related to my home renovation (i.e., architects or interior designers)?",
  //   answer: [
  //     "inflw does not currently offer architect or interior designer services.",
  //   ],
  // },
  {
    id: 8,
    question: "What types of renovation projects do you do?",
    answer: [
      "We are currently building out our trades pro network to support projects including, but not limited to - kitchen, bathroom, living room and dining room renovations.",
    ],
  },
  // {
  //   id: 9,
  //   question:
  //     "Does inflw have a restriction around the size of projects they will take on?",
  //   answer: [
  //     "inflw supports small to medium scale renovations, but not handy work projects.",
  //   ],
  // },
  {
    id: 10,
    question: "Are there ratings I can review?",
    answer: [
      "Yes! On each trades pro profile we include a synthesized summary of past reviews from past projects, highlighting the key themes that come out of the feedback from homeowners.",
      "Our system prioritizes feedback and closing the loop after the completion of each project, so we are continuously adding to the user summary pool. This feedback also helps us monitor trades pro performance, and support trades pros in further building on their brand and services.",
    ],
  },
  // {
  //   question: "Do I need to create an account?",
  //   answer: [
  //     "No - that is the beauty; all you need to do is provide us with simple details about yourself and your project. We internally create a profile for you such that when you come back to the chat, we verify you and you can continue from where you left off.",
  //   ],
  // },
];

const contractorFaqs = [
  {
    id: 11,
    question: "Who can use the platform",
    answer: [
      "All trades pros are welcomed to sign up - our platform leverages AI to create teams and handles project staffing to meet homeowner project needs, and ensure to maximize the utilization of those within our network.",
    ],
  },
  {
    id: 12,
    question: "How do I get leads?",
    answer: [
      "We ask homeowners to describe their project as best as they can, asking additional prompts to ensure we get the preliminary detail you need! We then scan our trades pro network, to assess the availability and alignment of skill sets required for the job. Homeowners gets the opportunity to review your profile and decide on whether to schedule a meeting with you in person (no initial bids are required).",
    ],
  },
  {
    id: 13,
    question: "How do I get paid?",
    answer: [
      (<><strong>First encounter:</strong> homeowners will be required to pay for your initial site visit, a fee of which will be reduced from the total project cost to be paid.</>),
      (<><strong>Project downpayment & milestones:</strong> once a contract is signed between both parties to begin the work, an initial down payment will be paid, followed by a final payment at the completion of the project. Our system
        will both provide support in establishing a contractual agreement with the homeowner, and process payments.</>),
    ],
  },
  {
    id: 14,
    question: "How do I join the trades pros network?",
    answer: [
      "To get the process started, please join our waitlist!",
    ],
  },
  {
    id: 15,
    question: "What are the fees for using the platform",
    answer: [
      (<><strong>Monthly payment:</strong> trades pros are expected to pay a fee to be featured on the platform and paired with projects. Please note that during the
beta phase, monthly fees will be waived.</>),

      (<><strong>Transaction fees:</strong> A small transaction fee will be made for each processed payment within the platform.</>),

    ],
  },
];

export default function FAQAccordion() {
  return (
    <section
      id={"faq"}
      className="flex flex-col items-center py-12 px-6 bg-gray-100 w-full scroll-mt-24"
    >
      <h2 className="text-2xl font-bold text-[#156082] mb-6 font-heading2 text-4xl text-center md:text-left">
        Frequently Asked Questions
      </h2>
      <Tabs defaultValue="homeowners" className="w-full">
        <TabsList>
          <TabsTrigger value="homeowners">For Homeowners</TabsTrigger>
          <TabsTrigger value="tradespros">For Trades Pros</TabsTrigger>
        </TabsList>
        <TabsContent value="homeowners">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-6xl bg-white px-8 rounded-lg mx-auto"
          >
            {homeownerFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
                    {faq.answer.map((answer) => {
                      return <li key={index}>{answer}</li>;
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        <TabsContent value="tradespros">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-6xl bg-white px-8 rounded-lg mx-auto"
          >
            {contractorFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {" "}
                  <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
                    {faq.answer.map((answer) => {
                      return <li key={index}>{answer}</li>;
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </section>
  );
}
