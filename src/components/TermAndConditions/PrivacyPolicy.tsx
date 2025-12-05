"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Cookie,
  Share2,
  UserCheck,
  Mail,
  MapPin,
  Phone,
  FileText,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Calendar,
} from "lucide-react";

const sections = [
  {
    id: "information-collect",
    icon: Database,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "Name, email address, phone number, company name, job title, location, and other information you provide when contacting us, subscribing to our services, or filling out forms on our website.",
      },
      {
        subtitle: "Technical Information",
        text: "IP address, browser type and version, operating system, device information, referring URLs, pages visited, time spent on pages, and other usage data collected automatically when you visit our website.",
      },
      {
        subtitle: "Cookies and Tracking Data",
        text: "We use cookies and similar tracking technologies to enhance user experience, remember your preferences, track website performance, and conduct analytics to improve our services.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "To provide, maintain, and improve our digital marketing, web development, SEO, and branding services.",
      },
      {
        subtitle: "Communication",
        text: "To respond to your inquiries, send service updates, newsletters, and promotional materials (with your consent).",
      },
      {
        subtitle: "Analytics & Improvement",
        text: "To analyze website usage patterns, conduct performance reviews, and enhance our products and services.",
      },
      {
        subtitle: "Security",
        text: "To protect our website, detect fraud, and ensure the security and integrity of our systems.",
      },
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies Policy",
    content: [
      {
        subtitle: "Essential Cookies",
        text: "Required for the website to function properly. These cannot be disabled.",
      },
      {
        subtitle: "Analytics Cookies",
        text: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      },
      {
        subtitle: "Marketing Cookies",
        text: "Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.",
      },
      {
        subtitle: "Preference Cookies",
        text: "Enable the website to remember choices you make (such as language or region) and provide enhanced features.",
      },
    ],
  },
  {
    id: "data-sharing",
    icon: Share2,
    title: "Data Sharing and Disclosure",
    content: [
      {
        subtitle: "Service Providers",
        text: "We may share data with trusted partners who assist us in website operation, analytics, payment processing, or customer service. These partners are bound by confidentiality agreements.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information when required by law, court order, or in response to valid legal requests from government authorities.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
      },
      {
        subtitle: "Protection of Rights",
        text: "We may share information to protect our rights, property, safety, or the rights of our users and the public.",
      },
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content: [
      {
        subtitle: "Encryption",
        text: "All data transmitted between your browser and our servers is encrypted using SSL/TLS technology.",
      },
      {
        subtitle: "Access Controls",
        text: "We implement strict access controls and authentication mechanisms to limit data access to authorized personnel only.",
      },
      {
        subtitle: "Regular Audits",
        text: "We conduct regular security assessments and vulnerability testing to identify and address potential risks.",
      },
      {
        subtitle: "Data Backup",
        text: "We maintain secure backups to ensure data integrity and availability in case of system failures.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to access your personal information and request corrections if it is inaccurate or incomplete.",
      },
      {
        subtitle: "Data Deletion",
        text: "You may request the deletion of your personal data, subject to legal retention requirements.",
      },
      {
        subtitle: "Withdraw Consent",
        text: "Where processing is based on consent, you have the right to withdraw consent at any time.",
      },
      {
        subtitle: "Data Portability",
        text: "You may request a copy of your personal data in a structured, commonly used, machine-readable format.",
      },
      {
        subtitle: "Object to Processing",
        text: "You have the right to object to the processing of your personal data in certain circumstances.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
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
          className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <Shield className="w-4 h-4 text-white" />
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
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              We are committed to protecting your privacy and ensuring the
              security of your personal information.
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
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    About This Policy
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Soltech360 ("we", "our", "us") is committed to
                    protecting your privacy. This Privacy Policy outlines how we
                    collect, use, and safeguard your personal information in
                    accordance with the Information Technology Act, 2000 and the
                    applicable rules thereunder, as well as GDPR and other
                    international data protection regulations. By using our
                    website and services, you consent to the practices described
                    in this policy.
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
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#004080]/10 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-[#004080]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-2">
                    {section.title}
                  </h2>
                </div>

                <div className="ml-16 space-y-6">
                  {section.content.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 leading-relaxed pl-7">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Third-Party Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-2">
                  Third-Party Links
                </h2>
              </div>
              <div className="ml-16">
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <p className="text-gray-700 leading-relaxed">
                    Our website may contain links to third-party websites and
                    services. We are not responsible for the privacy practices,
                    content, or security of these external sites. We encourage
                    you to review their privacy policies before providing any
                    personal information. This Privacy Policy applies only to
                    information collected by our website.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-2">
                  Changes to This Policy
                </h2>
              </div>
              <div className="ml-16">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices, technologies, legal
                    requirements, or for other operational reasons. When we make
                    changes, we will update the "Effective Date" at the top of
                    this policy and post the revised version on this page. We
                    encourage you to review this Privacy Policy periodically to
                    stay informed about how we are protecting your information.
                    Your continued use of our website after any changes
                    constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grievance Officer */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Grievance Officer
            </h2>
            <p className="text-gray-600 text-center mb-8">
              As per Information Technology Act, 2000 and rules made thereunder
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#004080] rounded-lg flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-semibold text-gray-900">
                        Mayur Panchal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#004080] rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Designation</p>
                      <p className="font-semibold text-gray-900">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#004080] rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href="mailto:soltech360ads@gmail.com"
                        className="font-semibold text-[#004080] hover:underline"
                      >
                        soltech360ads@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#004080] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-semibold text-gray-900">
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
            </div>
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
              Questions About Privacy?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please don't hesitate to contact us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#004080] font-semibold rounded-full hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}