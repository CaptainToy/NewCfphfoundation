import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "How are donations used?",
    answer:
      "We ensure every dollar goes directly towards our programs and initiatives, with a focus on maximizing impact. A small portion covers essential operations.",
  },
  {
    question: "Can I choose a specific program to support?",
    answer:
      "Yes, donors have the option to allocate their funds to specific programs based on their preferences.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Donations are tax-deductible based on your location. Please consult local tax laws or our support team.",
  },
  {
    question: "How can I stay updated on the impact of my donation?",
    answer:
      "We provide regular updates via email newsletters and detailed reports on our website.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {/* FAQ Header */}
      <div className="faq-header">
        <div className="faq-header-left">

       <div>
          <div className="faq-impact-badge">
          <div className="faq-impact-badge-content">
            <img src="/crown.png" alt="Icon" className="faq-impact-badge-icon" />
            <p className="faq-impact-badge-text">Questions Answered</p>
          </div>
        </div>
        <div className="faq-title-container">
          <h2 className="faq-title">Frequently asked questions</h2>
        </div>
       </div>
          
        
        </div>

        <div className="faq-header-right">
        <p className="faq-description">
              Answers to Common Questions About Our Mission and Work and Quick Guide to Our Programs and Processes
            </p>
          <button className="contact-us-button">Contact Us</button>
        </div>
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
