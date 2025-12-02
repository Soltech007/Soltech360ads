"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaMeta,
  FaShopify,
  FaAmazon,
  FaMicrosoft,
  FaHubspot,
} from "react-icons/fa6";
import {
  SiZoho,
  SiRazorpay,
  SiPaytm,
  SiPhonepe,
} from "react-icons/si";

const companies = [
  { name: "Google Partner", icon: FaGoogle, color: "#4285F4" },
  { name: "Meta Partner", icon: FaMeta, color: "#0081FB" },
  { name: "Shopify Partner", icon: FaShopify, color: "#96BF48" },
  { name: "Amazon Ads", icon: FaAmazon, color: "#FF9900" },
  { name: "Microsoft", icon: FaMicrosoft, color: "#00A4EF" },
  { name: "HubSpot", icon: FaHubspot, color: "#FF7A59" },
  { name: "Zoho", icon: SiZoho, color: "#C8202B" },
  { name: "Razorpay", icon: SiRazorpay, color: "#0C2451" },
  { name: "Paytm", icon: SiPaytm, color: "#00BAF2" },
  { name: "PhonePe", icon: SiPhonepe, color: "#5F259F" },
];

export default function TrustedBy() {
  return (
    <section className="py-4 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-custom mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 uppercase tracking-[0.2em] font-semibold"
        >
          Trusted by Growing Businesses Across India
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Logos */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 pr-8"
          >
            {[...companies, ...companies].map((company, index) => {
              const IconComponent = company.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 min-w-[200px] h-16 px-6 bg-gray-50 hover:bg-primary-50 border border-gray-100 hover:border-primary-200 rounded-xl transition-all duration-300 cursor-pointer group"
                >
                  <IconComponent
                    className="text-2xl transition-colors duration-300"
                    style={{ color: company.color }}
                  />
                  <span className="text-gray-600 group-hover:text-primary-600 font-semibold text-sm whitespace-nowrap transition-colors">
                    {company.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}