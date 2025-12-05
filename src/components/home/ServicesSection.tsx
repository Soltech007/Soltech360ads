"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { services, externalServices } from "@/src/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#004080]/10 text-[#004080] text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "} <br />
            <span className="text-[#004080]">Grow Online</span>
          </h2>
          <p className="text-lg text-gray-600">
            From social media marketing to website development, we provide
            complete digital solutions to scale your business.
          </p>
        </motion.div>

        {/* Quick Tools Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {externalServices.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={service.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 hover:bg-[#004080] text-gray-700 hover:text-white rounded-full border border-gray-200 hover:border-[#004080] transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{service.shortTitle}</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="block h-full p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#004080]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bgColor} group-hover:bg-[#004080] flex items-center justify-center mb-5 transition-colors duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${service.color} group-hover:text-white transition-colors duration-300`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#004080] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {feature.title}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center text-[#004080] font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#004080] text-white font-semibold rounded-full hover:bg-[#003366] hover:shadow-lg transition-all duration-300 group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}