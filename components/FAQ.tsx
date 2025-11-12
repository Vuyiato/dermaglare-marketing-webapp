"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need a referral to see Dr. Nkehli?",
    answer:
      "No referral is necessary. You can book an appointment directly through our patient portal or by calling our office.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring your ID, medical aid card (if applicable), a list of current medications, and any relevant medical records or previous test results.",
  },
  {
    question: "Are cosmetic procedures covered by medical aid?",
    answer:
      "Most cosmetic procedures are not covered by medical aid as they are considered elective. However, some medical dermatology treatments may be covered. We recommend checking with your medical aid provider.",
  },
  {
    question: "How long do cosmetic treatment results last?",
    answer:
      "Results vary by treatment. Botox typically lasts 3-4 months, dermal fillers 6-18 months, and chemical peels provide results lasting several months. Dr. Nkehli will discuss expected results during your consultation.",
  },
  {
    question: "Is there downtime after procedures?",
    answer:
      "Downtime varies by procedure. Some treatments like Botox have minimal downtime, while others like chemical peels may require a few days of recovery. We'll provide detailed aftercare instructions.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes, Dr. Nkehli specializes in paediatric dermatology and treats children of all ages for various skin conditions including eczema, acne, birthmarks, and infections.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, and medical aid. Payment is expected at the time of service unless prior arrangements have been made.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book online through our patient portal, call our office at 069 322 3134, or email us at info@dermaglareskin.co.za.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="section-label">FAQ</div>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-description">
          Find answers to common questions about our services, appointments, and
          procedures.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
