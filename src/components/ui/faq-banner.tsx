"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How exactly does ICCHub.ai process work?",
    answer:
      "We ask that you describe your project as best as you can to INFLW, our chatbot and your new best friend! After you have provided your project details, INFLW scans our database to pull together a contractor team to meet all the skillsets required to complete your job and can start your project soonest. Then, you can review the contractor team profiles and confirm your interest in receiving support in scheduling your first site visits for each contractor to review the project in detail and prepare a quote. Please note these site visits help to ensure the prices quoted are most accurate and reasonable to both parties. After there is an alignment between both parties ICCHub.ai will support you both in drafting a renovation project contract and securely set up your payment plan.",
  },
  {
    question: "How much does ICCHub.ai cost for homeowners?",
    answer:
      "No cost to homeowners. Contractors pay a fee to be featured on the platform and paired with projects, in addition to a small transaction fee for processing each payment within the platform. ",
  },
  {
    question: "Do I get multiple quotes – and if so, how many?",
    answer:
      "ICChub.ai currently supports the pairing with contractors and scheduling of the first encounters to get started right away. After the contractors see your project, they will provide you with a quote. If you no longer want to work with the team proposed, you can follow up with INFLW for a new proposed team and quote. Please note that the contractors have base hourly rates and they review your job mainly to determine the hours of work needed to complete the job.",
  },
  {
    question: "Why should I trust the contractors from ICCHub.ai",
    answer:
      "All contractors within the platform have been vetted based on factors including, their standing in online consumer protection databases, adequate licensing and insurance, and strong customer feedback and reviews, and fair pricing (per the market). Moreover, we provide the option for you to have an inspector review the jobs at the mid-point and end point to help ensure contractors remain on task to provide you with the best service possible.",
  },
  {
    question: "Are all contractors on here general contractors/ foremen?",
    answer:
      "ICCHub.ai pulls in contractors at the subcontractor level. Subcontractors are tradespersons who specialize in a particular area of work (e.g., plumbing) and are typically hired by a general contractor, however at an additional fee (i.e., about 20-30% extra). The ICCHub.ai system aims to help keep prices affordable by leveraging AI to create a team with the skill set needed to meet your project needs. ",
  },
  {
    question: "How will the quality of the project be monitored?",
    answer:
      "ICCHub.ai will have the option for you to request an inspector to review at the mid and end stages of the project",
  },

  {
    question:
      "Does ICCHub.ai offer other professional services related to my home renovation (i.e., architects or interior designers)?",
    answer:
      "ICCUHub.ai does not currently offer architect or interior designer services.",
  },
  {
    question: "What types of renovation projects do you do?",
    answer:
      "Currently, we support kitchen, bathroom, living room and dining room related renovations, which may include but not limited to plumbing, carpentry, or electrical work.",
  },
  {
    question:
      "Does ICCHub.ai have a restriction around the size of projects they will take on?",
    answer:
      "ICCHub.ai supports small to medium scale renovations, but not handy work projects. ",
  },
  {
    question: "Are there ratings I can review?",
    answer:
      "Yes! On each contractor profile we include a synthesized summary of past reviews from past projects, highlighting the key themes that come out of the feedback from homeowners. ICCHub.ai prioritizes feedback and closing the loop after the completion of each project, so we are continuously adding to the user summary pool. This feedback also helps us monitor contractor performance, and support contractors in further building on their brand and services.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No - that is the beauty; all you need to do is provide us with simple details about yourself and your project. We internally create a profile for you such that when you come back to the chat, we verify you and you can continue from where you left off.",
  },
];

export default function FAQAccordion() {
  return (
    <section id={'faq'} className="flex flex-col items-center py-12 px-6 bg-blue-100 w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading text-4xl">
        FAQ
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl bg-white px-8 rounded-lg"
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
