"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Phone,
  ArrowLeft,
  Sparkles,
  Code2,
  Zap,
  Star,
} from "lucide-react";
import {
  getServiceById,
  getRelatedServices,
  Service,
} from "@/src/data/services";
import {
  getTechnologiesForService,
  TechnologyStack,
  Technology,
} from "@/src/data/technologies";
import RequestQuote from "@/src/components/RequestQuote/RequestQuote";

/* ============================
   FAQ ACCORDION COMPONENT
============================ */
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div
        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
          isOpen
            ? "border-primary-200 shadow-medium bg-white"
            : "border-gray-200 hover:border-gray-300 bg-white"
        }`}
      >
        <button
          onClick={onClick}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-semibold text-gray-900 pr-4 text-base md:text-lg">
            {question}
          </span>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              isOpen
                ? "bg-primary-500 rotate-180"
                : "bg-gray-100 group-hover:bg-gray-200"
            }`}
          >
            <ChevronDown
              className={`w-5 h-5 transition-colors ${
                isOpen ? "text-white" : "text-gray-600"
              }`}
            />
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ============================
   RELATED SERVICE CARD
============================ */
function RelatedServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.id}`}
      className="group block h-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary-300 shadow-soft hover:shadow-large hover:-translate-y-2 transition-all duration-300"
    >
      <div
        className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-7 h-7 ${service.color}`} />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {service.title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
        {service.description}
      </p>
      <div className="flex items-center text-primary-600 text-sm font-semibold">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

/* ============================
   TECHNOLOGY ICON FOR SERVICE
============================ */
function ServiceTechIcon({ tech, index }: { tech: Technology; index: number }) {
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="group"
    >
      <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-soft hover:shadow-medium hover:border-primary-200 transition-all duration-300">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${tech.color}15` }}
        >
          <Icon className="w-6 h-6" style={{ color: tech.color }} />
        </div>
        <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 text-center transition-colors">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}

/* ============================
   TECHNOLOGIES FOR SERVICE SECTION
============================ */
function ServiceTechnologiesSection({
  serviceId,
  serviceTitle,
}: {
  serviceId: string;
  serviceTitle: string;
}) {
  const techStacks = getTechnologiesForService(serviceId);

  if (techStacks.length === 0) return null;

  return (
    <section className="py-16 md:py-14 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-soft mb-6">
            <Code2 className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-bold text-gray-700">
              Technologies We Use
            </span>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powering Your{" "}
            <span className="text-primary-600">{serviceTitle}</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Industry-leading tools and frameworks to deliver exceptional results
          </p>
        </motion.div>

        {/* Tech Stacks */}
        <div className="space-y-12 mb-20">
          {techStacks.map((stack, stackIdx) => (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stackIdx * 0.1 }}
            >
              {/* Stack Header */}
              <div
                className={`relative rounded-2xl p-6 mb-8 overflow-hidden bg-gradient-to-r ${stack.gradient}`}
              >
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <stack.icon className="w-7 h-7 text-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {stack.title}
                      </h3>
                      <p className="text-black/80 text-sm">{stack.subtitle}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <span className="text-black text-sm font-semibold">
                      {stack.technologies.length}+ Tools
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {stack.technologies.map((tech, idx) => (
                  <ServiceTechIcon key={tech.name} tech={tech} index={idx} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-xl text-white font-semibold shadow-blue hover:shadow-lg transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>Discuss Your Custom Tech Stack</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}

/* ============================
   MAIN SERVICE PAGE
============================ */
export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = getServiceById(serviceId);
  const relatedServices = getRelatedServices(serviceId, 3);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20 dots-pattern" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              {/* Service badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-3 
      bg-white/10 backdrop-blur-md border border-white/20 
      rounded-full mb-8 shadow-lg"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${service.bgColor} 
      flex items-center justify-center shadow-md`}
                >
                  <Icon className={`w-5 h-5 ${service.color}`} />
                </div>

                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  {service.subtitle}
                </span>
              </motion.div> */}

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl 
      font-extrabold text-white mb-6 leading-tight"
              >
                {service.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 
      mb-12 leading-relaxed max-w-2xl"
              >
                {service.longDescription}
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
              >
                {service.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/10 backdrop-blur-md 
          rounded-2xl p-6 text-center 
          border border-white/15 
          hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm uppercase tracking-wide text-white/60 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                {/* Primary */}
                <Link
                  href={`/contact?service=${service.id}`}
                  className="group inline-flex items-center justify-center
        px-8 py-4 bg-white text-primary-600 
        font-bold rounded-xl shadow-xl
        hover:shadow-2xl hover:-translate-y-1 
        transition-all duration-300"
                >
                  <span>Get Started</span>
                  <ArrowRight
                    className="w-5 h-5 ml-2 
        group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                {/* Secondary */}
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center
        px-8 py-4 bg-white/10 backdrop-blur-md
        text-white border border-white/30 
        font-semibold rounded-xl
        hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Book a Call</span>
                </a>
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={520}
                  className="w-full h-[520px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-700/40 via-transparent to-transparent" />

                {/* Trust Badge */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 p-5 bg-white rounded-2xl shadow-large"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-3 border-white flex items-center justify-center shadow-md"
                        >
                          <Star className="w-5 h-5 text-white fill-white" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-base font-bold text-gray-900">
                        Trusted by 150+ Clients
                      </div>
                      <div className="text-sm text-gray-500">
                        5.0 Rating on Google
                      </div>
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* ===== TECHNOLOGIES SECTION ===== */}
      <ServiceTechnologiesSection
        serviceId={serviceId}
        serviceTitle={service.shortTitle}
      />

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-5 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-bold mb-5">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features & Deliverables
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to succeed with our {service.shortTitle}{" "}
              services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-medium border border-transparent hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      {/* <section className="py-16 md:py-24 bg-gray-50">

      {/* ===== BENEFITS SECTION ===== */}
      <section className="relative py-20 md:py-10 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100/40 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl translate-y-1/2" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-20 items-center">
            {/* Left Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              {/* <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 rounded-full text-sm font-bold mb-6 border border-green-100 shadow-sm"
              >
                <span className="w-2 h-2 bg-blue-800 rounded-full animate-pulse" />
                Benefits
              </motion.span> */}

              {/* Heading */}
              <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold  mb-6 leading-tight">
                <div className="mb-2 text-gray-900">Why Choose Our</div>
                <span className="relative">
                  <span className="text-blue-800">{service.shortTitle}</span>
                </span>{" "}
                Services?
              </h2>

              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Partner with us and experience the difference that expertise,
                dedication, and results-driven strategies can make for your
                business.
              </p>

              {/* Benefits List */}
              <div className="space-y-3 max-w-lg">
                {service.benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    whileHover={{ x: 6, scale: 1.01 }}
                    className="group relative flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-lg hover:shadow-blue-700 transition-all duration-300 cursor-pointer"
                  >
                    {/* Hover gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-900 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="relative flex-1 pt-1">
                      <span className="text-gray-800 font-semibold text-base group-hover:text-gray-900 transition-colors">
                        {benefit}
                      </span>
                    </div>

                    {/* Arrow on hover */}
                    <div className="relative self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-blue-700" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:pl-10"
            >
              <div className="relative group ">
                {/* Ambient glow */}
                <div
                  className="absolute -inset-6 rounded-[2.5rem] 
      bg-gradient-to-r from-primary-500/30 via-purple-500/20 to-primary-600/30 
      blur-3xl opacity-70 group-hover:opacity-100 transition-opacity"
                />

                {/* Card */}
                <div
                  className="relative bg-gradient-to-br 
      from-primary-500 via-primary-600 to-primary-700 
      rounded-3xl p-8 md:p-10 overflow-hidden
      shadow-2xl shadow-primary-500/30
      transition-transform duration-500 group-hover:-translate-y-1"
                >
                  {/* Decorative blobs */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl" />

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                      Ready to Get Started?
                    </h3>

                    <p className="text-white/80 mb-8 text-lg leading-relaxed max-w-md">
                      Book a free consultation and discover how we can scale
                      your business with data-driven, proven strategies.
                    </p>

                    {/* Stats */}
                    <div
                      className=" items-center mx-auto text-center mb-8 p-5 px-10 flex gap-20 
          bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          500+
                        </div>
                        <div className="text-xs uppercase tracking-wide text-white/60">
                          Projects
                        </div>
                      </div>

                      <div className="text-center border-x border-white/20">
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-xs uppercase tracking-wide text-white/60">
                          Success
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          24/7
                        </div>
                        <div className="text-xs uppercase tracking-wide text-white/60">
                          Support
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center
            w-full px-8 py-4 rounded-xl font-bold
            bg-white text-primary-600
            shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        {/* Shine */}
                        <span
                          className="absolute inset-0 -translate-x-full group-hover:translate-x-full
              bg-gradient-to-r from-transparent via-primary-100/60 to-transparent
              transition-transform duration-700"
                        />

                        <span className="relative">
                          Schedule Free Consultation
                        </span>
                        <ArrowRight className="relative w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>

                    {/* Trust row */}
                    <div className="flex items-center justify-center gap-5 mt-6 text-sm text-white/60">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        Free Consultation
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        No Obligations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-gray-600 text-lg">
                Explore more ways we can help your business grow
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService, idx) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <RelatedServiceCard service={relatedService} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-800 font-semibold rounded-xl hover:bg-gray-200 hover:shadow-soft transition-all duration-300 group"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <RequestQuote pageContext={service.title} />
    </main>
  );
}
