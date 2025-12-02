"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Lightbulb, Rocket, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Discovery Call",
    description: "We understand your business goals, target audience, and challenges.",
    color: "bg-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Strategy Planning",
    description: "Our experts create a customized marketing strategy for your brand.",
    color: "bg-purple-500",
  },
  {
    icon: Rocket,
    title: "Execute & Optimize",
    description: "We launch campaigns and continuously optimize for best results.",
    color: "bg-green-500",
  },
  {
    icon: BarChart3,
    title: "Report & Scale",
    description: "Transparent reporting and scaling strategies for growth.",
    color: "bg-orange-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Simple <span className="text-primary-500">4-Step</span> Process
          </h2>
          <p className="text-lg text-gray-600">
            We follow a proven process to deliver results that exceed your expectations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-large hover:-translate-y-2 transition-all duration-300 text-center h-full">
                  {/* Step Number */}
                  {/* <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div> */}

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}