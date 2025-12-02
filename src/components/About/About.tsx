"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Target,
  Award,
  Heart,
  Zap,
  Globe,
  TrendingUp,
  Star,
  Quote,
} from "lucide-react";

/* ============================
   DATA
============================ */
const stats = [
  { value: "110+", label: "Happy Clients", icon: Users },
  { value: "100+", label: "Projects Delivered", icon: Target },
  { value: "5+", label: "Years Experience", icon: Award },
  { value: "₹1Cr+", label: "Revenue Generated", icon: TrendingUp },
];

const values = [
  {
    icon: Heart,
    title: "Client First",
    description: "Your success is our priority. We treat every client's business as our own and go the extra mile.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead with the latest technologies and marketing strategies to give you a competitive edge.",
  },
  {
    icon: Globe,
    title: "Transparency",
    description: "Complete transparency in our work, pricing, and communication. No hidden fees, no surprises.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project. Quality is never compromised.",
  },
];

const team = [
  { 
    name: "Rahul Sharma", 
    role: "Founder & CEO", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "10+ years in digital marketing"
  },
  { 
    name: "Priya Patel", 
    role: "Marketing Director", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Expert in paid advertising"
  },
  { 
    name: "Amit Kumar", 
    role: "Tech Lead", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Full-stack developer"
  },
  { 
    name: "Sneha Reddy", 
    role: "Design Lead", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "UI/UX specialist"
  },
  { 
    name: "Vikram Singh", 
    role: "SEO Manager", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "SEO & analytics expert"
  },
  { 
    name: "Anita Desai", 
    role: "Content Head", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    bio: "Content strategy specialist"
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Started with a team of 3 passionate marketers" },
  { year: "2020", title: "50 Clients", description: "Reached our first 50 clients milestone" },
  { year: "2021", title: "Google Partner", description: "Became official Google Ads partner" },
  { year: "2022", title: "Meta Partner", description: "Certified Meta Business Partner" },
  { year: "2023", title: "100+ Clients", description: "Crossed 100+ happy clients" },
  { year: "2024", title: "Expanding", description: "Launched new services & grew team to 25+" },
];

/* ============================
   MAIN ABOUT PAGE
============================ */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC]">

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="About Hero"
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
              <span className="text-sm font-semibold text-white">About Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
            >
              We're Building the Future of Digital Marketing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            >
              SolTech360ads is a full-service digital marketing and web development agency helping businesses grow online since 2019.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#004080]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#004080]" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold text-[#004080] mb-1">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY SECTION ===== */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Our Story"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-[#004080] text-white rounded-2xl shadow-xl p-6">
                <div className="text-4xl font-extrabold">5+</div>
                <div className="text-white/80">Years Experience</div>
              </div>

              {/* Quote */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <Quote className="w-8 h-8 text-[#004080] mb-2" />
                <p className="text-gray-700 text-sm italic">
                  "Our mission is to help businesses succeed in the digital world."
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#004080] font-bold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-8">
                From a Small Team to a Leading Digital Agency
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, <strong className="text-gray-900">SolTech360ads</strong> started with a simple mission: help businesses succeed in the digital world. What began as a small team of passionate digital marketers has grown into a full-service agency serving clients across India.
                </p>
                <p>
                 We’ve empowered businesses across India to scale faster with performance-driven marketing and conversion-focused web experiences.
                </p>
                <p>
                  Today, we're proud to be certified partners with <strong className="text-gray-900">Google, Meta</strong>, and other leading technology platforms, delivering world-class solutions to businesses of all sizes.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#004080] text-white font-semibold rounded-full hover:bg-[#003366] hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  
      {/* ===== VALUES SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#004080]/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#004080]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      {/* <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              The talented people behind SolTech360ads
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-white/80">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-[#004080]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Your Digital Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-10"
            >
              Let's work together to grow your business. Get in touch today!
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
                <span>Get Free Quote</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}