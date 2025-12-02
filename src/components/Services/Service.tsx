"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Server,
  Shield,
  Share2,
  Target,
  MessageCircle,
  Palette,
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
  Layers,
} from "lucide-react";

/* ============================
   SERVICES DATA
============================ */
const services = [
  {
    id: "website-seo-audit",
    icon: Search,
    title: "Website SEO & Performance Audits",
    shortTitle: "SEO Audits",
    subtitle: "Optimize Your Digital Presence",
    description:
      "In-depth optimization analysis to enhance visibility and site speed. We analyze every aspect of your website to identify opportunities for improvement and growth.",
    longDescription:
      "Our comprehensive SEO audits go beyond surface-level analysis. We dive deep into your website's technical infrastructure, content quality, backlink profile, and user experience to uncover hidden opportunities and critical issues that may be holding back your search rankings.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: [
      { title: "Technical SEO Audit", desc: "Complete crawl analysis" },
      { title: "Core Web Vitals", desc: "Performance optimization" },
      { title: "Mobile Analysis", desc: "Responsive design check" },
      { title: "Content Review", desc: "Quality & relevance audit" },
      { title: "Backlink Analysis", desc: "Link profile evaluation" },
      { title: "Competitor Research", desc: "Market positioning" },
    ],
    stats: [
      { value: "300%", label: "Avg Traffic Increase" },
      { value: "50+", label: "Ranking Factors" },
      { value: "24h", label: "Report Delivery" },
    ],
    process: [
      "Initial website crawl & data collection",
      "Technical infrastructure analysis",
      "Content & keyword gap analysis",
      "Competitor benchmarking",
      "Actionable recommendations report",
      "Implementation support",
    ],
  },
  {
    id: "hosting-management",
    icon: Server,
    title: "Hosting & Server Management",
    shortTitle: "Hosting",
    subtitle: "Reliable Infrastructure",
    description:
      "End-to-end web hosting, maintenance, and uptime monitoring for peak performance.",
    longDescription:
      "Experience enterprise-grade hosting without the enterprise price tag. Our managed hosting solutions provide lightning-fast speeds, rock-solid security, and 24/7 expert support to keep your website running at peak performance.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    features: [
      { title: "Cloud Hosting", desc: "Scalable infrastructure" },
      { title: "24/7 Monitoring", desc: "Real-time alerts" },
      { title: "Daily Backups", desc: "Automatic & secure" },
      { title: "Security Patches", desc: "Always protected" },
      { title: "CDN Included", desc: "Global speed" },
      { title: "Free SSL", desc: "HTTPS enabled" },
    ],
    stats: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "<200ms", label: "Response Time" },
      { value: "24/7", label: "Expert Support" },
    ],
    process: [
      "Server requirements assessment",
      "Migration planning & execution",
      "Performance optimization",
      "Security hardening",
      "Monitoring setup",
      "Ongoing maintenance",
    ],
  },
  {
    id: "domain-ssl",
    icon: Shield,
    title: "Domain & SSL Services",
    shortTitle: "Domain & SSL",
    subtitle: "Secure Your Identity",
    description:
      "Secure domain registration and SSL integration for trusted online presence.",
    longDescription:
      "Protect your brand and build customer trust with our comprehensive domain and SSL services. From registration to renewal, we handle everything so you can focus on growing your business.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    features: [
      { title: "Domain Registration", desc: "All TLDs available" },
      { title: "Domain Transfer", desc: "Hassle-free migration" },
      { title: "SSL Certificates", desc: "EV, OV & DV options" },
      { title: "DNS Management", desc: "Full control" },
      { title: "WHOIS Privacy", desc: "Identity protection" },
      { title: "Auto-Renewal", desc: "Never expire" },
    ],
    stats: [
      { value: "100%", label: "Secure Sites" },
      { value: "500+", label: "TLDs Available" },
      { value: "Instant", label: "SSL Activation" },
    ],
    process: [
      "Domain availability check",
      "Registration & configuration",
      "DNS setup & propagation",
      "SSL certificate installation",
      "Security verification",
      "Ongoing monitoring",
    ],
  },
  {
    id: "social-media-marketing",
    icon: Share2,
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    subtitle: "Build Your Brand",
    description:
      "Strategy, content creation, and campaign execution across all major platforms.",
    longDescription:
      "Transform your social media presence from ordinary to extraordinary. Our data-driven approach combines creative content with strategic targeting to build engaged communities and drive measurable business results.",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    features: [
      { title: "Platform Strategy", desc: "Channel-specific plans" },
      { title: "Content Creation", desc: "Engaging posts & reels" },
      { title: "Community Management", desc: "Active engagement" },
      { title: "Paid Advertising", desc: "Targeted campaigns" },
      { title: "Influencer Marketing", desc: "Strategic partnerships" },
      { title: "Analytics", desc: "Performance insights" },
    ],
    stats: [
      { value: "500%", label: "Engagement Boost" },
      { value: "10M+", label: "Reach Generated" },
      { value: "150+", label: "Brands Managed" },
    ],
    process: [
      "Brand & audience analysis",
      "Content strategy development",
      "Creative production",
      "Scheduling & publishing",
      "Community engagement",
      "Performance optimization",
    ],
  },
  {
    id: "google-meta-ads",
    icon: Target,
    title: "Google & Meta Ads Campaigns",
    shortTitle: "Paid Ads",
    subtitle: "Drive Targeted Traffic",
    description:
      "Targeted ad campaigns for lead generation and brand awareness across platforms.",
    longDescription:
      "Maximize your advertising ROI with our expert-managed PPC campaigns. We combine advanced targeting, compelling creatives, and continuous optimization to deliver qualified leads at the lowest possible cost.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    features: [
      { title: "Campaign Strategy", desc: "Goal-aligned planning" },
      { title: "Keyword Research", desc: "High-intent targeting" },
      { title: "Ad Copywriting", desc: "Compelling creatives" },
      { title: "Landing Pages", desc: "Conversion-optimized" },
      { title: "Retargeting", desc: "Re-engage visitors" },
      { title: "A/B Testing", desc: "Continuous improvement" },
    ],
    stats: [
      { value: "4.5x", label: "Average ROAS" },
      { value: "₹50Cr+", label: "Ad Spend Managed" },
      { value: "-40%", label: "Lower CPA" },
    ],
    process: [
      "Account audit & strategy",
      "Campaign structure setup",
      "Creative development",
      "Launch & monitoring",
      "A/B testing & optimization",
      "Scaling successful campaigns",
    ],
  },
  {
    id: "email-whatsapp",
    icon: MessageCircle,
    title: "Email & WhatsApp Marketing",
    shortTitle: "Email & WhatsApp",
    subtitle: "Direct Engagement",
    description:
      "Automated outreach campaigns to engage and retain customers effectively.",
    longDescription:
      "Build lasting customer relationships with personalized messaging across email and WhatsApp. Our automation workflows nurture leads, recover abandoned carts, and keep your brand top-of-mind.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    features: [
      { title: "Email Automation", desc: "Trigger-based flows" },
      { title: "WhatsApp API", desc: "Business messaging" },
      { title: "Drip Campaigns", desc: "Nurture sequences" },
      { title: "Personalization", desc: "Dynamic content" },
      { title: "Segmentation", desc: "Targeted lists" },
      { title: "Analytics", desc: "Open & click tracking" },
    ],
    stats: [
      { value: "45%", label: "Avg Open Rate" },
      { value: "12%", label: "Click Rate" },
      { value: "25%", label: "Revenue Lift" },
    ],
    process: [
      "List audit & segmentation",
      "Workflow design",
      "Template creation",
      "Automation setup",
      "Testing & launch",
      "Performance optimization",
    ],
  },
  {
    id: "content-branding",
    icon: Palette,
    title: "Content Creation & Branding",
    shortTitle: "Branding",
    subtitle: "Tell Your Story",
    description:
      "Creative design, copywriting, and brand identity development.",
    longDescription:
      "Create a memorable brand identity that resonates with your audience. From logo design to content strategy, we help you stand out in a crowded marketplace and build lasting connections with your customers.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    features: [
      { title: "Brand Identity", desc: "Complete visual system" },
      { title: "Logo Design", desc: "Memorable marks" },
      { title: "Content Writing", desc: "Engaging copy" },
      { title: "Video Production", desc: "Professional videos" },
      { title: "Social Graphics", desc: "Platform-optimized" },
      { title: "Brand Guidelines", desc: "Consistency rules" },
    ],
    stats: [
      { value: "200+", label: "Brands Created" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "Award", label: "Winning Designs" },
    ],
    process: [
      "Discovery & research",
      "Concept development",
      "Design exploration",
      "Refinement & feedback",
      "Final deliverables",
      "Brand guidelines",
    ],
  },
];

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
   SERVICE DETAIL MODAL
============================ */
function ServiceDetailSection({
  service,
  isActive,
}: {
  service: (typeof services)[0];
  isActive: boolean;
}) {
  const Icon = service.icon;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
                  {service.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {service.longDescription}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {service.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {feature.title}
                    </div>
                    <div className="text-sm text-gray-500">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`/request-quote?service=${service.id}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right - Image & Process */}
          <div>
            <div className="relative mb-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-[300px] md:h-[350px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Icon className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary-500" />
                Our Process
              </h4>
              <div className="space-y-3">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================
   MAIN SERVICES PAGE
============================ */
export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700">
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
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <Globe className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-semibold text-white">
                360° Digital Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
            >
              Transform Your Business with{" "}
              <span className="text-accent-400">Expert Digital Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              From SEO audits to full-scale marketing campaigns, we provide
              comprehensive solutions that drive real business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/request-quote"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                <span>Watch Our Story</span>
              </button>
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

      {/* ===== SERVICES NAVIGATION ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-bold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeService === idx
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{service.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Detail */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <ServiceDetailSection
              service={services[activeService]}
              isActive={true}
            />
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              All Services at a Glance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick overview of everything we offer
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
                  className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map((feature, fidx) => (
                      <span
                        key={fidx}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full"
                      >
                        {feature.title}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/request-quote?service=${service.id}`}
                    className="inline-flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
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
            <span className="inline-block px-4 py-2 bg-accent-50 text-accent-600 rounded-full text-sm font-bold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              The DigiMedia Advantage
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
                  className="flex gap-5 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
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
      <section className="py-24 bg-primary-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-12 h-12 text-accent-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Get a free consultation and discover how our services can help
                grow your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center px-10 py-5 bg-primary-500 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white/10 text-white text-lg font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Headphones className="w-5 h-5 mr-2" />
                  <span>Talk to Expert</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}