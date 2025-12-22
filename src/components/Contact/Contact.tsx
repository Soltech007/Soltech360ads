"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ArrowRight,
  Sparkles,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import toast from "react-hot-toast";

/* ============================
   CONTACT INFO
============================ */
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    color: "#004080",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@soltech360ads.com",
    link: "mailto:contact@soltech360ads.com",
    color: "#0ea5e9",
  },
  {
    icon: MapPin,
    title: "Address",
    value: (
      <>
        Vibrant Park, Survey No. 182 Near NH 8, GIDC <br />
        Phase 1, Vapi, Gujarat - 396195, India
      </>
    ),
    link: "#",
    color: "#10b981",
  },
];

/* ============================
   SERVICE OPTIONS
============================ */
const serviceOptions = [
  "Website Development",
  "Digital Marketing",
  "SEO Services",
  "Paid Ads (Google/Meta)",
  "Social Media Marketing",
  "Email & WhatsApp Marketing",
  "Hosting & Domain",
  "Full Digital Package",
];

/* ============================
   MAIN CONTACT PAGE
============================ */
export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submit
  // Handle Form Submit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validation
  if (!formData.fullName || !formData.email || !formData.phone || !formData.service || !formData.message) {
    toast.error("Please fill all required fields");
    return;
  }

  setLoading(true);

  try {
    // Split full name into first and last name
    const nameParts = formData.fullName.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // ✅ Service को Message में Include करें
    const combinedMessage = `Service Interested: ${formData.service}\n\nMessage: ${formData.message}`;

    // Prepare payload for API
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: formData.email,
      phone: formData.phone,
      whatsappNo: formData.phone,
      company: formData.company,
      message: combinedMessage,  // ✅ Service + Message Combined
      source: "Contact Page",
      
      // ❌ Industry field हटा दिया - Service को industry में नहीं भेजेंगे
      industry: "",
      website: "",
      noOfEmployees: "",
      state: "",
      city: "",
    };

    const response = await fetch("/api/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(true);
      toast.success("Message sent successfully! We'll contact you soon.");
      
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      }, 3000);
    } else {
      toast.error(data.error || "Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Submit Error:", error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-[#FAFBFC]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#004080]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">Contact Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
            >
              Let's Start a Conversation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Have a question or want to discuss a project? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              
              {/* Success State */}
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Thank You!</h3>
                  <p className="text-lg text-gray-600 max-w-md">
                    We have received your message. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#004080] mb-4">
                      Contact Us for more Information
                    </h2>
                    <p className="text-lg text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="ABC Pvt Ltd"
                      />
                    </div>

                    {/* Service */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        rows={5}
                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#004080] focus:ring-2 focus:ring-[#004080]/20 transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Tell us about your project, budget, and timeline..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 text-center">
                      <motion.button
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center px-10 py-4 bg-[#004080] text-white font-bold text-lg rounded-full hover:bg-[#003366] hover:shadow-xl transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Request</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>

                  {/* Trust Note */}
                  <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" style={{ color: info.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-sm text-gray-600 break-all">{info.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}