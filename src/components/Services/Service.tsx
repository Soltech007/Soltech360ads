"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
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
  Code2,
  Sparkles,
  Layers,
  Zap,
  CheckCircle2,
  ChevronLeft
} from "lucide-react";
import { services, externalServices } from "@/src/data/services";
import { allTechnologies, TechnologyStack, Technology } from "@/src/data/technologies";
import RequestQuote from "../RequestQuote/RequestQuote";
import { useRef } from "react";


/* ============================
   WHY CHOOSE US DATA
============================ */
const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with 10+ years of industry experience",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of delivering measurable business growth",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by industry leaders for excellence",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    description: "Decisions backed by analytics and insights",
    color: "from-indigo-500 to-purple-500",
  },
];

function TechIcon({ tech, index }: { tech: Technology; index: number }) {
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02, duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${tech.color}15` }}
        >
          <Icon className="w-6 h-6" style={{ color: tech.color }} />
        </div>
        <span className="text-xs font-semibold text-gray-700 text-center">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}

/* ============================
   CATEGORY TAB BUTTON
============================ */
function CategoryTab({
  stack,
  isActive,
  onClick,
}: {
  stack: TechnologyStack;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = stack.icon;

  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 whitespace-nowrap ${
        isActive
          ? "bg-blue-900 text-white shadow-lg"
          : "bg-white text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{stack.title}</span>
      <span
        className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
          isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
        }`}
      >
        {stack.technologies.length}
      </span>
    </button>
  );
}

/* ============================
   TECHNOLOGIES SECTION
============================ */
function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const activeStack = allTechnologies[activeCategory];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-10 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-6">
            <Code2 className="w-4 h-4" />
            Our Tech Stack
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
            Technologies We <span className="text-blue-900">Master</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage 100+ cutting-edge technologies to build scalable, secure,
            and high-performance digital solutions
          </p>
        </motion.div>

        {/* Category Tabs with Arrows */}
        <div className="relative mb-12 flex items-center">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="flex-shrink-0 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-blue-600 hover:text-blue-900 hover:border-gray-300 transition-all mr-3"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Tabs */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto hide-scrollbar flex-1"
          >
            {allTechnologies.map((stack, idx) => (
              <CategoryTab
                key={stack.id}
                stack={stack}
                isActive={activeCategory === idx}
                onClick={() => setActiveCategory(idx)}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="flex-shrink-0 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-blue-600 hover:text-blue-900 hover:border-gray-300 transition-all ml-5"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStack.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Header Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${activeStack.accentColor}15` }}
                  >
                    <activeStack.icon
                      className="w-7 h-7 md:w-8 md:h-8"
                      style={{ color: activeStack.accentColor }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-blue-800/80">
                      {activeStack.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base">
                      {activeStack.subtitle}
                    </p>
                  </div>
                </div>

                {/* Tech Preview Icons */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {activeStack.technologies.slice(0, 5).map((tech, idx) => {
                      const TechIconComponent = tech.icon;
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200"
                        >
                          <TechIconComponent
                            className="w-5 h-5"
                            style={{ color: tech.color }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    +{activeStack.technologies.length - 5} more
                  </span>
                </div>
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {activeStack.technologies.map((tech, idx) => (
                <TechIcon key={tech.name} tech={tech} index={idx} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-blue-900 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-12">
                {[
                  { value: "100+", label: "Technologies" },
                  { value: "9", label: "Categories" },
                  { value: "10+", label: "Years Experience" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="flex hover:animate-bounce items-center gap-2 px-6 py-3 bg-blue-800  text-white font-semibold rounded-xl transition-colors"
              >
                <Sparkles className="w-4 h-4 " />
                <span>Discuss Your Stack</span>
                <ArrowRight className="w-4 h-4 " />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================
   MAIN SERVICES PAGE
============================ */
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-28 md:py-22 overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20 dots-pattern" />
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
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-400/20 rounded-full blur-3xl"
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
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Transform Your Business with{" "}
              <span className="text-secondary-300">Expert Digital Services</span>
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
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Us Now</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ===== TECHNOLOGIES SECTION ===== */}
      <TechnologiesSection />

      {/* ===== EXTERNAL TOOLS SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-bold mb-4">
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
                  whileHover={{ y: -5 }}
                  className="group relative flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div
                    className={`relative w-14 h-14 rounded-xl ${service.bgColor} group-hover:bg-white/20 flex items-center justify-center transition-all duration-300`}
                  >
                    <Icon
                      className={`w-7 h-7 ${service.color} group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <div className="relative flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors flex items-center gap-2">
                      {service.title}
                      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
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
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-bold mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete Digital Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to grow your business online
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    href={`/services/${service.id}`}
                    className="group block h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-soft hover:shadow-large hover:border-primary-200 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl ${service.bgColor} group-hover:scale-110 flex items-center justify-center mb-6 transition-transform duration-300`}
                    >
                      <Icon
                        className={`w-7 h-7 ${service.color} transition-colors duration-300`}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Stats Preview */}
                    <div className="flex gap-6 mb-6 pb-6 border-b border-gray-100">
                      {service.stats.slice(0, 2).map((stat, sidx) => (
                        <div key={sidx}>
                          <div className="text-lg font-bold text-primary-600">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 3).map((feature, fidx) => (
                        <span
                          key={fidx}
                          className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors"
                        >
                          {feature.title}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center text-primary-600 font-semibold">
                      <span>View Details</span>
                      <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-6 md:p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-large transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Border on Hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ padding: "2px" }}
                  >
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </div>

                  <div className="relative flex gap-5">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <RequestQuote pageContext={"Services"} />
    </main>
  );
}