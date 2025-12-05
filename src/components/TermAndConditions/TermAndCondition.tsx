"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  Ban,
  FileWarning,
  Gavel,
  RefreshCw,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Globe,
  Users,
  Lock,
  Briefcase,
} from "lucide-react";

const terms = [
  {
    id: "acceptance",
    icon: CheckCircle2,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Soltech360 website, you agree to comply with and be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the Terms, please do not use our website. These Terms constitute a legally binding agreement between you and Soltech360.`,
  },
  {
    id: "services",
    icon: Briefcase,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "2. Services Provided",
    content: `Soltech360 provides a comprehensive range of digital marketing and web development services, including but not limited to:`,
    list: [
      "Website Design & Development",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Pay-Per-Click Advertising (Google Ads, Meta Ads)",
      "Brand Identity & Design",
      "Content Marketing & Strategy",
      "E-commerce Solutions",
      "Digital Consulting Services",
    ],
  },
  {
    id: "intellectual-property",
    icon: Shield,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "3. Intellectual Property Rights",
    content: `All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Soltech360 or its content suppliers and is protected by Indian and international copyright, trademark, and other intellectual property laws.

You may not copy, reproduce, modify, distribute, display, perform, publish, license, create derivative works from, transfer, or sell any content, information, software, products, or services obtained from this website without our prior written consent.`,
  },
  {
    id: "user-obligations",
    icon: Users,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "4. User Obligations",
    content: `By using our website, you agree to:`,
    list: [
      "Provide accurate, current, and complete information when prompted",
      "Maintain the confidentiality of any account credentials",
      "Notify us immediately of any unauthorized use of your account",
      "Use the website only for lawful purposes",
      "Comply with all applicable local, state, national, and international laws",
      "Not interfere with or disrupt the website or servers",
    ],
  },
  {
    id: "prohibited-uses",
    icon: Ban,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "5. Prohibited Uses",
    content: `You are expressly prohibited from:`,
    list: [
      "Using the website for any illegal or unauthorized purpose",
      "Violating any intellectual property rights of others",
      "Transmitting any harmful code, viruses, or malware",
      "Attempting to gain unauthorized access to our systems or networks",
      "Engaging in any activity that could damage, disable, or impair our website",
      "Using automated systems to access the website without permission",
      "Collecting or harvesting any personal information from other users",
      "Impersonating any person or entity, or falsely representing your affiliation",
    ],
  },
  {
    id: "limitation",
    icon: AlertTriangle,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "6. Limitation of Liability",
    content: `To the fullest extent permitted by applicable law, Soltech360 shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:

• Loss of profits, revenue, or business opportunities
• Loss of data or goodwill
• Business interruption
• Personal injury or property damage
• Any errors or omissions in the content

Your use of the website is at your sole risk. We make no guarantees about the accuracy, reliability, or completeness of any content on the website.`,
  },
  {
    id: "disclaimers",
    icon: FileWarning,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "7. Disclaimers",
    content: `The website and all content, materials, information, software, products, and services are provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to:

• The implied warranties of merchantability and fitness for a particular purpose
• Warranties that the website will be uninterrupted or error-free
• Warranties that the website is free of viruses or other harmful components
• Warranties regarding the accuracy, reliability, or currency of any content`,
  },
  {
    id: "privacy",
    icon: Lock,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    title: "8. Privacy Policy",
    content: `Your use of the website is also governed by our Privacy Policy, which is incorporated by reference into these Terms and Conditions. By using the website, you consent to our collection, use, and disclosure of your personal information as described in our Privacy Policy.`,
    link: {
      text: "View our Privacy Policy",
      href: "/privacy-policy",
    },
  },
  {
    id: "termination",
    icon: RefreshCw,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    title: "9. Termination",
    content: `We reserve the right to terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.

Upon termination, your right to use the website will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.`,
  },
  {
    id: "governing-law",
    icon: Gavel,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    title: "10. Governing Law",
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts in Vapi, Gujarat, India.

You agree to submit to the personal jurisdiction of such courts and waive any objection to the laying of venue in such courts.`,
  },
  {
    id: "modifications",
    icon: FileText,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    title: "11. Modifications",
    content: `We reserve the right to update, change, or replace any part of these Terms and Conditions at our sole discretion at any time. It is your responsibility to check this page periodically for changes.

Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes. If you do not agree to the modified terms, you should discontinue your use of the website.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#004080] via-[#003366] to-[#002244] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <Scale className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">
                Legal Document
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Terms & Conditions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our website and
              services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-white/70"
            >
              <Calendar className="w-5 h-5" />
              <span>Effective Date: January 1, 2025</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#004080] rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Please read these Terms and Conditions ("Terms", "Terms and
                    Conditions") carefully before using the Soltech360 website
                    operated by Soltech360 ("us", "we", or "our"). These Terms
                    apply to all visitors, users, and others who access or use
                    our website and services. By accessing or using our website,
                    you acknowledge that you have read, understood, and agree to
                    be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {terms.map((term, index) => (
              <motion.div
                key={term.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${term.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <term.icon className={`w-6 h-6 ${term.iconColor}`} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-2">
                    {term.title}
                  </h2>
                </div>

                <div className="ml-16">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {term.content}
                  </p>

                  {term.list && (
                    <ul className="mt-4 space-y-2">
                      {term.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {term.link && (
                    <Link
                      href={term.link.href}
                      className="inline-flex items-center gap-2 mt-4 text-[#004080] font-semibold hover:underline"
                    >
                      {term.link.text}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact Information
            </h2>
            <p className="text-gray-600 text-center mb-8">
              For any questions regarding these Terms and Conditions, please
              contact us:
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#004080] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a
                      href="mailto:soltech360ads@gmail.com"
                      className="font-semibold text-[#004080] hover:underline"
                    >
                      soltech360ads@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#004080] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      Vibrant Park, Survey No. 182,
                      <br />
                      Near NH 8 GIDC Phase 1,
                      <br />
                      Vapi, Gujarat - 396195, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agreement Banner */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement to Terms
            </h3>
            <p className="text-gray-600 leading-relaxed">
              By using this website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
              If you have any questions, please contact us before using our
              services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-[#004080] to-[#002244]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              If you have any questions about these Terms and Conditions, please
              feel free to contact us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#004080] font-semibold rounded-full hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}