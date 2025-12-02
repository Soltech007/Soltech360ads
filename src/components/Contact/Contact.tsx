"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ============================
   CONTACT INFO
============================ */
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    color: "#004080",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@SolTech360ads.com",
    link: "mailto:hello@SolTech360ads.com",
    color: "#0ea5e9",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Mumbai, Maharashtra, India",
    link: "#",
    color: "#10b981",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9AM - 7PM",
    link: "#",
    color: "#f59e0b",
  },
];

/* ============================
   MAIN CONTACT PAGE
============================ */
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC]">

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#004080]">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">Contact Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
            >
              Let's Start a Conversation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Have a question or want to discuss a project? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
                > <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" style={{ color: info.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-sm text-gray-600 break-all">{info.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Request a Free Quote
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="grid md:grid-cols-2 gap-6">
                {/* Name & Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Email & Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all"
                    placeholder="ABC Pvt Ltd"
                  />
                </div>

                {/* Service Interested In */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    required
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option>Website Development</option>
                    <option>Digital Marketing</option>
                    <option>SEO Services</option>
                    <option>Paid Ads (Google/Meta)</option>
                    <option>Social Media Marketing</option>
                    <option>Email & WhatsApp Marketing</option>
                    <option>Hosting & Domain</option>
                    <option>Full Digital Package</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all resize-none"
                    placeholder="Tell us about your project, budget, and timeline..."
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 text-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center justify-center px-10 py-4 bg-[#004080] text-white font-bold text-lg rounded-full hover:bg-[#003366] hover:shadow-xl transition-all duration-300 group"
                  >
                    <span>Send Request</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </form>

              {/* Trust Note */}
              <div className="mt-10 text-center">
                <p className="text-sm text-gray-500">
                  We respect your privacy. Your information will never be shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK CONTACT CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-[#004080] to-[#0ea5e9]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need to Talk Right Now?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Skip the form — call or WhatsApp us directly for instant response.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#004080] font-bold rounded-full hover:shadow-xl transition-all duration-300 group"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}