"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  Target,
  Headphones,
  Award,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Google & Meta Certified",
    description: "Our team holds official certifications from Google and Meta.",
  },
  {
    icon: Target,
    title: "ROI-Focused Strategy",
    description: "Every campaign is designed to maximize your return on investment.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Reporting",
    description: "Real-time dashboards and detailed reports you can trust.",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Personal support from a dedicated expert for your brand.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast execution without compromising on quality.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round the clock assistance whenever you need it.",
  },
  {
    icon: Shield,
    title: "No Long-term Contracts",
    description: "Flexible month-to-month plans with no hidden commitments.",
  },
  {
    icon: Zap,
    title: "Latest Tools & Tech",
    description: "We use cutting-edge AI tools for maximum efficiency.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We Deliver <span className="text-primary-500">Real Results</span>,
              Not Just Promises
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With 5+ years of experience and 150+ happy clients, we know what
              it takes to grow your business online. Our data-driven approach
              ensures every rupee you spend delivers maximum impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-green-50 px-4 py-3 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.5x</div>
                  <div className="text-sm text-gray-600">Avg. ROAS</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-primary-50 px-4 py-3 rounded-xl">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-primary-50 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:bg-primary-500 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}