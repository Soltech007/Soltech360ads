"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Building2,
  User,
  Briefcase,
  IndianRupee,
  FileText,
  Sparkles,
  ArrowRight,
  Clock,
  Shield,
  Headphones,
} from "lucide-react";

/* ============================
   SERVICES OPTIONS
============================ */
const serviceOptions = [
  "Website Audit Reports",
  "Hosting Plans",
  "SEO Packages",
  "Paid Ads Campaigns",
  "Social Media Marketing",
  "Email Automation",
  "Website Development",
  "E-commerce Development",
  "Domain & SSL Services",
  "Content Creation",
  "WhatsApp Marketing",
  "Other",
];

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000+",
  "Not Sure",
];

const timelineOptions = [
  "ASAP",
  "Within 1 Week",
  "Within 1 Month",
  "Within 3 Months",
  "Flexible",
];

/* ============================
   BENEFITS DATA
============================ */
const benefits = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get a response within 2 hours",
  },
  {
    icon: Shield,
    title: "No Obligation",
    description: "Free consultation, no strings attached",
  },
  {
    icon: Headphones,
    title: "Expert Advice",
    description: "Talk to certified digital experts",
  },
];

/* ============================
   MAIN REQUEST QUOTE PAGE
============================ */
export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#FAFBFC] flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg mx-auto px-6"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You! 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your quote request has been submitted successfully. Our team will contact you within 2 hours.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#004080] text-white font-semibold rounded-full hover:bg-[#003366] transition-all"
          >
            Back to Home
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFBFC]">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#004080]" />
              <span className="text-sm font-medium text-gray-700">Free Consultation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
            >
              Request a{" "}
              <span className="text-[#004080]">Free Quote</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-10"
            >
              Tell us about your project and get a customized quote within 2 hours. No obligations, no hidden fees.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-[#004080]/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#004080]" />
                    </div>
                    <span className="font-medium">{benefit.title}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-[#004080] rounded-3xl p-8 md:p-10 text-white sticky top-32">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-white/70 mb-10">
                  Fill up the form and our team will get back to you within 2 hours.
                </p>

                <div className="space-y-6">
                  <a href="tel:+919876543210" className="flex items-center gap-4 text-white/90 hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Phone</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                  </a>

                  <a href="mailto:contact@SolTech360ads.com" className="flex items-center gap-4 text-white/90 hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <p className="font-medium">contact@SolTech360ads.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-white/90">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Address</p>
                      <p className="font-medium">Mumbai, India</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>

                {/* Decorative Circles */}
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-white/5" />
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Tell Us About Your Project</h3>

                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004080] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building2 className="w-4 h-4 inline mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004080] focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004080] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004080] focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Services Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    <Briefcase className="w-4 h-4 inline mr-2" />
                    Services You're Interested In *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium border-2 transition-all ${
                          formData.services.includes(service)
                            ? "bg-[#004080] text-white border-[#004080]"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#004080]/50"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <IndianRupee className="w-4 h-4 inline mr-2" />
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004080] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select Budget Range</option>
                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004080] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select Timeline</option>
                      {timelineOptions.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004080] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your project, goals, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#004080] text-white font-semibold rounded-xl hover:bg-[#003366] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Quote Request
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  By submitting, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}