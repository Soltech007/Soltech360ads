"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileSearch,
  Server,
  Search,
  Target,
  Share2,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";

/* ============================
   PRODUCTS DATA
============================ */
const products = [
  {
    id: "website-audit",
    icon: FileSearch,
    title: "Website Audit Reports",
    description: "Comprehensive site performance, SEO, and user experience analysis. Get detailed insights into what's holding your website back and actionable recommendations to fix them.",
    color: "#004080",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      "Complete Technical SEO Audit",
      "Core Web Vitals Analysis",
      "Mobile Responsiveness Check",
      "Page Speed Optimization Tips",
      "Competitor Analysis",
      "Actionable Recommendations",
      "Monthly Progress Reports",
      "Priority Support",
    ],
    highlight: "Most Detailed",
  },
  {
    id: "hosting-plans",
    icon: Server,
    title: "Hosting Plans",
    description: "Reliable and scalable hosting options — Shared, VPS, and Cloud servers. 99.9% uptime guarantee with 24/7 expert support and daily backups.",
    color: "#0ea5e9",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    features: [
      "99.9% Uptime Guarantee",
      "Free SSL Certificate",
      "Daily Automatic Backups",
      "24/7 Expert Support",
      "One-Click WordPress Install",
      "Scalable Resources",
      "DDoS Protection",
      "Free Domain for 1 Year",
    ],
    highlight: "Best Value",
  },
  {
    id: "seo-packages",
    icon: Search,
    title: "SEO Packages",
    description: "Tailored on-page and off-page optimization plans for organic growth. Rank higher on Google and drive qualified organic traffic to your website.",
    color: "#10b981",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
    features: [
      "In-depth Keyword Research",
      "On-Page SEO Optimization",
      "Quality Link Building",
      "Content Strategy",
      "Technical SEO Fixes",
      "Local SEO Setup",
      "Monthly Ranking Reports",
      "Competitor Monitoring",
    ],
    highlight: "Top Rated",
  },
  {
    id: "paid-ads",
    icon: Target,
    title: "Paid Ads Campaign Packages",
    description: "Google, Meta, and LinkedIn advertising bundles for targeted reach. Get more leads and sales with data-driven ad campaigns managed by certified experts.",
    color: "#f59e0b",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    features: [
      "Campaign Strategy & Setup",
      "Ad Creative Design",
      "Advanced Audience Targeting",
      "A/B Testing & Optimization",
      "Conversion Tracking Setup",
      "Retargeting Campaigns",
      "Weekly Performance Reports",
      "Dedicated Account Manager",
    ],
    highlight: "Most Popular",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing Bundles",
    description: "Platform-specific content and engagement strategies. Build your brand presence and engage with your audience across Instagram, Facebook, LinkedIn, and more.",
    color: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    features: [
      "Content Calendar Creation",
      "Professional Graphics Design",
      "Post Scheduling & Publishing",
      "Community Management",
      "Influencer Outreach",
      "Hashtag Strategy",
      "Analytics & Insights",
      "Monthly Strategy Calls",
    ],
    highlight: "Trending",
  },
  {
    id: "email-automation",
    icon: Mail,
    title: "Email Automation Campaigns",
    description: "AI-driven workflows for lead nurturing and customer retention. Automate your email marketing and turn leads into loyal customers on autopilot.",
    color: "#ef4444",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    features: [
      "Automated Email Workflows",
      "Personalized Email Sequences",
      "Lead Scoring System",
      "Drip Campaign Setup",
      "A/B Testing",
      "Segmentation Strategy",
      "Detailed Analytics",
      "Template Design",
    ],
    highlight: "Smart Choice",
  },
];

/* ============================
   PRODUCT CARD COMPONENT
============================ */
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const Icon = product.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      id={product.id}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span 
              className="px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg flex items-center gap-2"
              style={{ backgroundColor: product.color }}
            >
              <Star className="w-4 h-4" />
              {product.highlight}
            </span>
          </div>

          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
              className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div 
              className="absolute inset-0 opacity-20"
              style={{ background: `linear-gradient(135deg, ${product.color}, transparent)` }}
            />
          </div>

          {/* Icon Badge */}
          <div 
            className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl"
            style={{ backgroundColor: product.color }}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
        <div className="max-w-xl">
          {/* Category Badge */}
          <span 
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: `${product.color}15`, color: product.color }}
          >
            Product #{String(index + 1).padStart(2, '0')}
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href={`/request-quote?product=${product.id}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#004080] text-white font-semibold rounded-full hover:bg-[#003366] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <span>Get This Product</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================
   MAIN PRODUCTS PAGE
============================ */
export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC]">

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#004080]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0ea5e9]/5 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm mb-8"
            >
              <Sparkles className="w-5 h-5 text-[#004080]" />
              <span className="text-sm font-semibold text-gray-700">Our Products</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight"
            >
              Powerful Digital{" "}
              <span className="text-[#004080]">Products</span>{" "}
              for Growing Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              From website audits to email automation, choose the perfect product to accelerate your business growth.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Zap className="w-6 h-6 text-[#004080]" />
                <span className="font-medium">Instant Setup</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="font-medium">Cancel Anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS LIST ===== */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="space-y-32">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== REQUEST QUOTE CTA ===== */}
      <section className="py-24 bg-[#004080]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Not Sure Which Product Fits Your Needs?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-10"
            >
              Get a free consultation and we'll recommend the perfect product for your business goals.
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
                <span>Request Free Quote</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}