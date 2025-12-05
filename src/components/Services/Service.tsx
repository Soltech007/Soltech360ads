"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Play,
  ChevronRight,
  Users,
  TrendingUp,
  Award,
  Clock,
  Headphones,
  BarChart3,
  Globe,
  ExternalLink,
  Phone,
  Server,
} from "lucide-react";
import { services, externalServices, Service } from "@/src/data/services";

/* ============================
   WHY CHOOSE US DATA
============================ */
const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with 10+ years of industry experience",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of delivering measurable business growth",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by industry leaders for excellence",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    description: "Decisions backed by analytics and insights",
  },
];

/* ============================
   MAIN SERVICES PAGE
============================ */
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#004080] via-[#003366] to-[#002244]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <Globe className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">
                360° Digital Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Transform Your Business with{" "}
              <span className="text-blue-300">Expert Digital Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              From SEO to branding, we provide comprehensive solutions that
              drive real business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#004080] font-bold rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Us Now</span>
              </a>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "150+", label: "Happy Clients" },
                { value: "10+", label: "Years Experience" },
                { value: "25+", label: "Team Members" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ===== EXTERNAL TOOLS SECTION ===== */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-2 bg-[#004080]/10 text-[#004080] rounded-full text-sm font-bold mb-4">
              Quick Tools
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Essential Resources
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {externalServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.id}
                  href={service.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-[#004080] hover:border-[#004080] transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${service.bgColor} group-hover:bg-white/20 flex items-center justify-center transition-colors`}>
                    <Icon className={`w-6 h-6 ${service.color} group-hover:text-white transition-colors`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors flex items-center gap-2">
                      {service.title}
                      <ExternalLink className="w-4 h-4 opacity-50" />
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ALL SERVICES GRID ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#004080]/10 text-[#004080] rounded-full text-sm font-bold mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete Digital Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to grow your business online
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={`/services/${service.id}`}
                    className="block h-full group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#004080]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl ${service.bgColor} group-hover:bg-[#004080] flex items-center justify-center mb-6 transition-colors duration-300`}>
                      <Icon className={`w-7 h-7 ${service.color} group-hover:text-white transition-colors duration-300`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#004080] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>

                    {/* Stats Preview */}
                    <div className="flex gap-4 mb-6">
                      {service.stats.slice(0, 2).map((stat, sidx) => (
                        <div key={sidx} className="text-center">
                          <div className="text-lg font-bold text-[#004080]">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 3).map((feature, fidx) => (
                        <span
                          key={fidx}
                          className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full"
                        >
                          {feature.title}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center text-[#004080] font-semibold group-hover:gap-2 transition-all">
                      <span>View Details</span>
                      <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-bold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Soltech360 Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#004080] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-br from-[#004080] to-[#002244]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-12 h-12 text-blue-300 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Get a free consultation and discover how our services can help
                grow your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#004080] text-lg font-bold rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white/10 text-white text-lg font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Headphones className="w-5 h-5 mr-2" />
                  <span>Talk to Expert</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}