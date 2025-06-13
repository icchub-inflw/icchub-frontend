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
    question: "How exactly does the process work?",
    answer: [
      "Share your project details: describe your project as best as you can to inflw, our chatbot and your new best friend!",
      "Receive recommendations: inflw scans our database to pull together a team of trades pros to meet all the skill sets required to complete your job and can start your project soonest.",
      "Schedule trades pro visits: review the trades pro team profiles and confirm your interest in receiving support in scheduling your first site visits for each trades pro to review the project in detail and prepare a quote. Please note these site visits help to ensure the prices quoted are most accurate and reasonable to both parties.",
      "Process payments online & securely: inflw will support you both in drafting a Home Renovations Contract and securely set up your payment plan once there is alignment between both parties on the project scope and pricing quotation.",
    ],
  },
  {
    question: "How much does the process cost for homeowners?",
    answer: [
      "No cost to homeowners. trades pros pay a fee to be featured on the platform, in addition to a small transaction fee for processing each payment within the platform.",
    ],
  },
  {
    question: "Do I get multiple quotes – and if so, how many?",
    answer: [
      "inflw currently supports the pairing with trades pros and scheduling of the first encounters to get started right away. After the trades pros see your project, they will provide you with a quote.",
      "If you no longer want to work with the team proposed, you can follow up with inflw for a new proposed team and quote. Please note that the trades pros have base hourly rates and they review your job mainly to determine the hours of work needed to complete the job.",
    ],
  },
  {
    question: "Why should I trust your trades pro network",
    answer: [
      "All trades pros within the platform have been vetted based on factors including, their standing in online consumer protection databases, adequate licensing and insurance, strong customer feedback and reviews, and fair pricing (per the market).",
      "Moreover, we provide the option for you to have an inspector review the jobs at the mid-point and end-point to help ensure trades pros remain on task to provide you with the best service possible.",
    ],
  },
  {
    question: "Are all trades pros on here general trades pros/ foremen?",
    answer: [
      "inflw pulls in trades pros at the subtrades pro level. Subtrades pros are tradespersons who specialize in a particular area of work (e.g., plumbing) and are typically hired by a general trades pro, however at an additional fee (i.e., about 20-30% extra). Our system aims to help keep prices affordable by leveraging AI to create teams with the skill set needed to meet your project needs.",
    ],
  },
  {
    question: "How will the quality of the project be monitored?",
    answer: [
      "inflw will give you the option to request an inspector to review at the mid- and end- stages of the project.",
    ],
  },
  {
    question:
      "Can inflw provide recommendations for other professional services related to my home renovation (i.e., architects or interior designers)?",
    answer: [
      "inflw does not currently offer architect or interior designer services.",
    ],
  },
  {
    question: "What types of renovation projects do you do?",
    answer: [
      "Currently, we support kitchen, bathroom, living room and dining room related renovations, which may include but are not limited to plumbing, carpentry, or electrical work.",
    ],
  },
  {
    question:
      "Does inflw have a restriction around the size of projects they will take on?",
    answer: [
      "inflw supports small to medium scale renovations, but not handy work projects.",
    ],
  },
  {
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
    question: "Who can use the platform",
    answer: [
      "Inflw pulls in trades pros at the subtrades pro level (i.e., tradespersons who specialize in a particular area of work [e.g., plumbing]). We then leverage AI to create teams with the skill sets needed to meet homeowner project needs.",
    ],
  },
  {
    question: "How do I get leads?",
    answer: [
      "We ask homeowners to describe their project as best as they can, asking additional prompts to ensure we get the preliminary detail you need! We then scan our trades pro network, to assess the availability and alignment of skill sets required for the job. Homeowners gets the opportunity to review your profile and decide on whether to schedule a meeting with you in person (no initial bids needed).",
    ],
  },
  {
    question: "How do I get paid?",
    answer: [
      "First encounter: homeowners will be required to pay for your initial site visit, a fee of which will be reduced from the total project cost to be paid.",
      "Project downpayment & milestones: once a contract is signed between both parties to begin the work, an initial down payment will be paid, followed by a final payment at the completion of the project. Inflw will support you both in drafting a renovation project contract and securely set up your payment plan.",
    ],
  },
  {
    question: "How do I join the trades pro network",
    answer: [
      "We ask that you complete the trades pros’ applications through which your professional background will be assessed. Provided you meet all of the eligibility requirements you will be invited into the network!",
    ],
  },
  {
    question: "What are the fees for using the platform",
    answer: [
      "Monthly payment: trades pros are expected to pay a fee to be featured on the platform and paired with projects. Transaction fees: A small transaction fee will be made for each processed payment within the platform. Please note the transaction fees will be waived for your first project within the platform!",
    ],
  },
];

export default function FAQAccordion() {
  return (
    <section
      id={"faq"}
      className="flex flex-col items-center py-12 px-6 bg-gray-100 w-full scroll-mt-24"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading text-4xl">
        Frequently Asked Questions
      </h2>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">For Homeowners</TabsTrigger>
          <TabsTrigger value="password">For Trades Pros</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          {/* <h1 className="text-center text-3xl">{" Homeowner FAQs"}</h1> */}
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
                      return <li>{answer}</li>;
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        <TabsContent value="password">
          {/* <h1>{" Contractor FAQs"}</h1> */}
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
                      return <li>{answer}</li>;
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
