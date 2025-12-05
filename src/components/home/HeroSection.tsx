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
// "Software",
"Branding",
"Websites",
//   "Marketing",
  "SEO",
  "Ads",
  "Content",
];

/* ============================
   TEXT BUBBLE 
   - Dull Colors
   - Big Text / Small Bubble
============================ */
function TextBubble({ 
  label, 
  bgColor, 
  size = 65, 
  delay = 0, 
  style 
}: { 
  label: string; 
  bgColor: string; 
  size?: number;
  delay?: number; 
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      style={style}
      className="absolute z-20"
    >
      <div
        className="rounded-full flex items-center justify-center text-white font-bold text-[13px] leading-none shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300 cursor-default"
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
  style 
}: { 
  src: string; 
  size?: number; 
  delay?: number; 
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      style={style}
      className="absolute z-10"
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
   - Increased Width to 350px to fit "Strategies"
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
    // Changed w-[220px] to w-[350px] to fit long words
    <span className="relative inline-block h-[1.2em] w-[350px] text-left overflow-hidden align-bottom ml-4">
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
   MAIN HERO SECTION
============================ */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center bg-[#FAFBFC]">
      
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


      {/* ===== LEFT SIDE BUBBLES (Symmetric) ===== */}
      <div className="hidden xl:block absolute left-0 top-0 bottom-0 w-[380px] z-10 pointer-events-none">
        <div className="relative h-full w-full pointer-events-auto">
          
          {/* Row 1 (Text Outer, Image Inner) */}
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
          
          {/* Row 2 (Image Outer, Text Inner) */}
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
          
          {/* Row 3 (Text Outer, Image Inner) */}
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
          
          {/* Row 4 (Image Outer, Text Inner) */}
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

      {/* ===== RIGHT SIDE BUBBLES (Symmetric Mirror) ===== */}
      <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-[380px] z-10 pointer-events-none">
        <div className="relative h-full w-full pointer-events-auto">
          
          {/* Row 1 (Image Inner, Text Outer) - Mirror of Left Row 1 */}
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
          
          {/* Row 2 (Text Inner, Image Outer) - Mirror of Left Row 2 */}
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
          
          {/* Row 3 (Image Inner, Text Outer) - Mirror of Left Row 3 */}
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
          
          {/* Row 4 (Text Inner, Image Outer) - Mirror of Left Row 4 */}
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
      <div className="container-custom relative z-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
        {/* <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="inline-flex items-center gap-3 px-5 py-2 bg-white/90 backdrop-blur-md mb-10
  border border-gray-200/60 rounded-full shadow-md hover:shadow-lg 
  transition-shadow duration-300 cursor-default -mt-10"
>
  <div className="flex items-center justify-center rounded-full bg-[#004080]/10 p-1.5">
    <Sparkles className="w-4 h-4 text-[#004080] transition-transform duration-300 group-hover:rotate-6" />
  </div>

  <span className="text-sm font-semibold text-gray-800 tracking-wide">
    #1 Digital Marketing Agency in India
  </span>

  <div className="flex items-center gap-0.5 ml-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
      />
    ))}
  </div>
</motion.div> */}


          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.3] text-[#1a1a2e] mb-8"
          >
            {/* First Line */}
            <div className="flex items-center justify-center">
              <span className="text-right ml-10">Smarter</span>
              <RotatingText />
            </div>
            
            {/* Second Line */}
            <div className="mt-2">
              For Smarter <span className="text-[#004080]">Businesses.</span>
            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#004080] text-white font-semibold rounded-full hover:bg-[#003366] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group min-w-[200px]"
            >
              <span>See Our Services</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 shadow-sm hover:border-[#004080]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group min-w-[200px]">
              <Play className="w-5 h-5 mr-2 text-[#004080] group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Trust Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white/50 px-4 py-2 rounded-full border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Google & Meta Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white/50 px-4 py-2 rounded-full border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>100% Transparent Reporting</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}