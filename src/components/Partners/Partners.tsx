"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
  Globe,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import RequestQuote from "../RequestQuote/RequestQuote";

/* ============================
   PARTNERS DATA
============================ */ 
const partners = [
  {
    id: "brevo",
    name: "Brevo",
    logo: "/images/partner/brevo.webp",
    color: "#004080",
    category: "Email & Marketing Automation",
    description: "Leading email marketing and automation platform for customer engagement. We leverage Brevo's powerful tools to create automated workflows that nurture leads and retain customers.",
    features: ["Email Campaigns", "Marketing Automation", "SMS Marketing", "CRM Integration"],
    stats: "10M+ Emails Sent",
  },
  {
    id: "google-meta",
    name: "Google & Meta",
    logo: "/images/partner/meta.webp",
    color: "#4285f4",
    category: "Advertising Platforms",
    description: "Official certified partners for Google Ads and Meta advertising campaigns. Our team is trained and certified to maximize your ROI on these platforms.",
    features: ["Search Ads", "Display Ads", "Facebook Ads", "Instagram Ads"],
    stats: "₹10Cr+ Ad Spend Managed",
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    logo: "/images/partner/aws1.webp",
    color: "#ff9900",
    category: "Cloud Infrastructure",
    description: "World's most comprehensive cloud platform for hosting and computing. We use AWS to deliver scalable, reliable, and secure infrastructure for your applications.",
    features: ["Cloud Hosting", "CDN", "Database", "Serverless"],
    stats: "99.99% Uptime",
  },
  {
    id: "ibm",
    name: "IBM",
    logo: "/images/partner/ibm.webp",
    color: "#054ada",
    category: "Enterprise Solutions",
    description: "Enterprise-grade AI and cloud solutions for business transformation. We integrate IBM's cutting-edge technology for enterprise clients.",
    features: ["AI Solutions", "Cloud Services", "Data Analytics", "Security"],
    stats: "Enterprise Ready",
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    logo: "/images/partner/cloudflare.webp",
    color: "#f38020",
    category: "Security & Performance",
    description: "Global network for web security, performance, and reliability. We use Cloudflare to protect and accelerate every website we build.",
    features: ["CDN", "DDoS Protection", "SSL/TLS", "Web Application Firewall"],
    stats: "100% Sites Protected",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Certified Partnerships",
    description: "Official certifications from all our technology partners ensuring best-in-class implementation.",
  },
  {
    icon: Zap,
    title: "Priority Support",
    description: "Direct access to partner support channels for faster resolution of any issues.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Access to worldwide data centers and cloud infrastructure for optimal performance.",
  },
  {
    icon: Award,
    title: "Best Practices",
    description: "Implementation following industry best practices and standards set by our partners.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Trained and certified team members for each technology platform.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Updates",
    description: "Always up-to-date with the latest features and updates from our partners.",
  },
];

/* ============================
   PARTNER CARD COMPONENT
============================ */
function PartnerCard({ partner, index }: { partner: typeof partners[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
    >
      {/* Image */}
     <div className="relative h-48 overflow-hidden group">
  <Image
    src={partner.logo}
    alt={partner.name}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />

  {/* Overlay Gradient */}
  <div
    className="absolute inset-0 opacity-60"
    style={{
      background: `linear-gradient(135deg, ${partner.color}, ${partner.color}88)`
    }}
  />

  {/* Text Center */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h3 className="text-3xl font-bold text-white">{partner.name}</h3>
  </div>

  {/* Category Badge */}
  <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
    {partner.category}
  </span>
</div>


      {/* Content */}
      <div className="p-8">
        <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {partner.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{ backgroundColor: `${partner.color}10`, color: partner.color }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <span className="text-sm text-gray-500">Our Track Record</span>
          <span className="text-lg font-bold" style={{ color: partner.color }}>
            {partner.stats}
          </span>
        </div>
      </div>
    </motion.div>
  );
}


export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC]">

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
            alt="Partners Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004080]/95 to-[#004080]/80" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">Technology Partners</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
            >
              Powered by World-Class Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            >
              We partner with industry-leading technology companies to deliver the best solutions for your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS GRID ===== */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-gray-600">
              We've partnered with the best in the industry to bring you cutting-edge solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={partner.id} partner={partner} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Why Our Partnerships Matter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Our strategic partnerships ensure you get the best technology, support, and results.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#004080]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#004080]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<RequestQuote pageContext="Partners" />
      {/* ===== BECOME PARTNER CTA ===== */}
      {/* <section className="py-24 bg-[#004080]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Want to Partner With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-10"
            >
              We're always looking for new technology partners to expand our capabilities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#004080] text-lg font-bold rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section> */}

    </main>
  );
}