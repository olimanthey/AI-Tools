import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Who is Professor Elias Voss?",
      answer: "Professor Elias Voss holds a Ph.D. in AI from EPFL Lausanne and has experience as a senior AI researcher and consultant. He currently lectures at EPFL and UNIL Lausanne and is known for making AI accessible and practical."
    },
    {
      question: "What types of courses are offered?",
      answer: "Courses are offered for both individuals and organizations, covering AI for productivity, learning, content creation, automation, decision-making, and marketing."
    },
    {
      question: "How much do the courses cost?",
      answer: "Individual courses are priced at 99 CHF. A bundle of all 3 individual courses is available for 249 CHF. Organization pricing starts at 299 CHF per team/course, with a full package available for 799 CHF."
    },
    {
      question: "What payment methods are accepted?",
      answer: "MasterCard, Visa, PayPal, TWINT, Apple Pay, and Google Pay are all accepted."
    },
    {
      question: "How do I enroll in a course?",
      answer: "Each course has an \"Enroll Now\" button that guides you through the enrollment process. You can also navigate to the pricing section to view plans and enroll from there."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-base-100">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-base-content/70">
            Find quick answers to common questions about our AI Masterclass programs
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="card bg-base-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="card-body p-6">
                  <button
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                    )}
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-base-content/70 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}