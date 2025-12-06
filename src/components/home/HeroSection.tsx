"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Star,
  Sparkles,
} from "lucide-react";

/* ============================
   SERVICES LIST
============================ */
const services = [
  "Branding",
  "Websites",
  "SEO",
  "Ads",
  "Content",
];

/* ============================
   TEXT BUBBLE 
============================ */
function TextBubble({ 
  label, 
  bgColor, 
  size = 65, 
  delay = 0, 
  style,
  className = ""
}: { 
  label: string; 
  bgColor: string; 
  size?: number;
  delay?: number; 
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      style={style}
      className={`absolute z-20 ${className}`}
    >
      <div
        className="rounded-full flex items-center justify-center text-white font-bold text-[11px] sm:text-[13px] leading-none shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300 cursor-default"
        style={{ 
          backgroundColor: bgColor,
          width: size,
          height: size,
          boxShadow: `0 4px 15px -3px ${bgColor}60`
        }}
      >
        <span className="text-center px-1 pt-0.5">{label}</span>
      </div>
    </motion.div>
  );
}

/* ============================
   IMAGE BUBBLE
============================ */
function ImageBubble({ 
  src, 
  size = 80, 
  delay = 0, 
  style,
  className = ""
}: { 
  src: string; 
  size?: number; 
  delay?: number; 
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      style={style}
      className={`absolute z-10 ${className}`}
    >
      <div
        className="rounded-full overflow-hidden shadow-xl border-2 border-white bg-gray-100 hover:scale-105 transition-transform duration-300 cursor-default"
        style={{ 
          width: size, 
          height: size,
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15)'
        }}
      >
        <Image
          src={src}
          alt="Team"
          width={size}
          height={size}
          className="object-cover w-full h-full"
        />
      </div>
    </motion.div>
  );
}

/* ============================
   ROTATING TEXT COMPONENT
============================ */
function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] w-[350px] py-[3rem] text-left overflow-hidden align-bottom ml-4">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="absolute left-0 top-3 text-[#004080] whitespace-nowrap"
        >
          {services[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ============================
   MOBILE ROTATING TEXT
============================ */
function MobileRotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.15em] min-w-[120px] mb-0.5 px-18  align-bottom">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="absolute left-0 right-0 text-center text-[#004080] whitespace-nowrap"
        >
          {services[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ============================
   MAIN HERO SECTION
============================ */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[calc(75vh-10px)] flex items-center bg-[#FAFBFC]">
      
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.9]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />
      </div>

      {/* ===== MOBILE DECORATIVE BUBBLES ===== */}
      <div className="xl:hidden absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#004080]/10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-16 -left-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0ea5e9]/15"
        />
        
        {/* Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#004080]/10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="absolute top-20 -right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0f766e]/15"
        />
        
        {/* Bottom Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute -bottom-8 -left-8 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0ea5e9]/10"
        />
        
        {/* Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#004080]/10"
        />
      </div>

      {/* ===== LEFT SIDE BUBBLES (Desktop Only) ===== */}
      <div className="hidden xl:block absolute left-0 top-0 bottom-0 w-[380px] z-10 pointer-events-none">
        <div className="relative h-full w-full pointer-events-auto">
          <TextBubble 
            label="Websites" 
            bgColor="#004080" 
            size={70}
            delay={0.1}
            style={{ top: '10%', left: '30px' }}
          />
          <ImageBubble 
            src="/images/p1.webp" 
            size={90} 
            delay={0.15}
            style={{ top: '10%', left: '150px' }}
          />
          <ImageBubble 
            src="/images/p2.webp" 
            size={90} 
            delay={0.2}
            style={{ top: '32%', left: '30px' }}
          />
          <TextBubble 
            label="Software" 
            bgColor="#334155" 
            size={75}
            delay={0.25}
            style={{ top: '32%', left: '150px' }}
          />
          <TextBubble 
            label="Design" 
            bgColor="#0ea5e9" 
            size={75}
            delay={0.3}
            style={{ top: '54%', left: '30px' }}
          />
          <ImageBubble 
            src="/images/p3.webp" 
            size={90} 
            delay={0.35}
            style={{ top: '54%', left: '150px' }}
          />
          <ImageBubble 
            src="/images/p4.webp" 
            size={90} 
            delay={0.4}
            style={{ top: '76%', left: '30px' }}
          />
          <TextBubble 
            label="Pages" 
            bgColor="#0f766e" 
            size={65}
            delay={0.45}
            style={{ top: '76%', left: '150px' }}
          />
        </div>
      </div>

      {/* ===== RIGHT SIDE BUBBLES (Desktop Only) ===== */}
      <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-[380px] z-10 pointer-events-none">
        <div className="relative h-full w-full pointer-events-auto">
          <ImageBubble 
            src="/images/p5.webp" 
            size={90} 
            delay={0.1}
            style={{ top: '10%', right: '150px' }}
          />
          <TextBubble 
            label="Apps" 
            bgColor="#475569" 
            size={65}
            delay={0.15}
            style={{ top: '10%', right: '30px' }}
          />
          <TextBubble 
            label="AI" 
            bgColor="#004080" 
            size={60}
            delay={0.2}
            style={{ top: '32%', right: '150px' }}
          />
          <ImageBubble 
            src="/images/p6.webp" 
            size={90} 
            delay={0.25}
            style={{ top: '32%', right: '30px' }}
          />
          <ImageBubble 
            src="/images/p3.webp" 
            size={90} 
            delay={0.3}
            style={{ top: '54%', right: '150px' }}
          />
          <TextBubble 
            label="Marketing" 
            bgColor="#1e40af" 
            size={78}
            delay={0.35}
            style={{ top: '54%', right: '30px' }}
          />
          <TextBubble 
            label="SEO" 
            bgColor="#0ea5e9" 
            size={60}
            delay={0.4}
            style={{ top: '76%', right: '150px' }}
          />
          <ImageBubble 
            src="/images/p2.webp" 
            size={90} 
            delay={0.45}
            style={{ top: '76%', right: '30px' }}
          />
        </div>
      </div>

      {/* ===== CENTER CONTENT ===== */}
      <div className="container-custom relative z-20 py-8 sm:py-12 lg:py-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* ===== MOBILE HEADING (Below lg) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:hidden mb-6 sm:mb-8"
          >
            <h1 className="text-[1.75rem] xs:text-[2rem] sm:text-4xl md:text-5xl font-extrabold leading-[1.25] text-[#1a1a2e]">
              <div className="mb-0">
                Smarter <MobileRotatingText />
              </div>
              <div>
                For Smarter <span className="text-[#004080]">Businesses.</span>
              </div>
            </h1>
          </motion.div>

          {/* ===== DESKTOP HEADING (lg and above) ===== */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:block text-6xl xl:text-[4.5rem] font-extrabold leading-[1.3] text-[#1a1a2e] mb-8"
          >
            <div className="flex items-center justify-center">
              <span className="text-right ml-10 mt-6">Smarter</span>
              <RotatingText />
            </div>
            <div className="mt-2">
              For Smarter <span className="text-[#004080]">Businesses.</span>
            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-[15px] sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-10"
          >
            Dream it, and we'll design it! Our web development and digital marketing services come in convenient{" "}
            <span className="text-[#004080] font-semibold">subscription plans</span> and{" "}
            <span className="text-[#004080] font-semibold">customizable packages</span> to fit your needs.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <Link 
              href="/services" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#004080] text-white font-semibold rounded-full hover:bg-[#003366] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group text-[15px] sm:text-base"
            >
              <span>See Our Services</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 shadow-sm hover:border-[#004080]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group text-[15px] sm:text-base">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#004080] group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Trust Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-8"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 bg-white/70 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              <span>Google & Meta Certified</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 bg-white/70 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              <span>100% Transparent Reporting</span>
            </div>
          </motion.div>

          {/* Mobile Service Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="xl:hidden flex flex-wrap items-center justify-center gap-2 mt-8 sm:mt-10"
          >
            {["Websites", "SEO", "Branding", "Ads", "Marketing"].map((tag, index) => (
              <span 
                key={tag}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}