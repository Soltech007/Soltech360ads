"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does SolTech360 offer?",
    answer:
      "We offer comprehensive digital marketing services including Facebook Ads, Instagram Ads, Google Ads, LinkedIn Marketing, SEO, Email Marketing, WhatsApp Marketing, Content Creation, Website Development, E-commerce Development, and Technical Services like hosting, domain, and SSL.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing varies based on your requirements and goals. We offer flexible packages starting from ₹15,000/month. Contact us for a custom quote tailored to your business needs.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "For paid advertising (Facebook, Google Ads), you can start seeing results within 1-2 weeks. For SEO, it typically takes 3-6 months to see significant organic traffic improvements. We provide regular reports to track progress.",
  },
  {
    question: "Do you offer website development services?",
    answer:
      "Yes! We build custom websites, e-commerce stores, landing pages, and web applications. All our websites are mobile-responsive, SEO-optimized, and designed to convert visitors into customers.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a satisfaction guarantee. If you're not happy with our services within the first 30 days, we'll work with you to make it right or provide a pro-rated refund.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No, we don't believe in locking clients into long-term contracts. We offer month-to-month plans. Our clients stay because of results, not contracts.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="text-primary-500">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Got questions? We've got answers. If you don't find what you're
              looking for, feel free to contact us.
            </p>

            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h4 className="font-semibold text-gray-900 mb-2">
                Still have questions?
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Can't find the answer you're looking for? Please chat to our
                friendly team.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              >
                Contact Us →
              </a>
            </div>
          </motion.div>

          {/* Right - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-primary-500" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary-500" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}