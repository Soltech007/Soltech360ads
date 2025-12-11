"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  ExternalLink,
  // Services Icons
  Code,
  Search,
  Share2,
  Target,
  MessageCircle,
  Palette,
  PenTool,
  ShoppingCart,
  Video,
  // External Services Icons
  Globe,
  Server,
  BarChart3,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { siteConfig } from "@/src/lib/constants";
import Image from "next/image";

/* ============================
   NAV ITEMS DATA
============================ */
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    children: [
      {
        label: "Website Development",
        href: "/services/website-development",
        description: "Custom websites that convert",
        icon: Code,
      },
      {
        label: "SEO Optimization",
        href: "/services/seo-optimization",
        description: "Rank higher on Google",
        icon: Search,
      },
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
        description: "Build your brand presence",
        icon: Share2,
      },
      {
        label: "Google & Meta Ads",
        href: "/services/google-meta-ads",
        description: "Targeted ad campaigns",
        icon: Target,
      },
      {
        label: "Branding & Design",
        href: "/services/branding-design",
        description: "Create memorable identity",
        icon: Palette,
      },
      {
        label: "Content Marketing",
        href: "/services/content-marketing",
        description: "Engaging content strategy",
        icon: PenTool,
      },
      {
        label: "Email & WhatsApp",
        href: "/services/email-whatsapp-marketing",
        description: "Automated campaigns",
        icon: MessageCircle,
      },
      {
        label: "E-Commerce",
        href: "/services/ecommerce-solutions",
        description: "Online store solutions",
        icon: ShoppingCart,
      },
    ],
  },
  {
    label: "Tools",
    href: "#",
    hasDropdown: true,
    children: [
      {
        label: "Domain Registration",
        href: "https://www.hostinger.in/domain-name-search",
        description: "Register your domain name",
        icon: Globe,
        isExternal: true,
      },
      {
        label: "Web Hosting",
        href: "https://www.whmcs.com/",
        description: "Reliable hosting solutions",
        icon: Server,
        isExternal: true,
      },
      {
        label: "SEO Audit Tool",
        href: "https://www.seoptimer.com/",
        description: "Analyze website SEO",
        icon: BarChart3,
        isExternal: true,
      },
    ],
  },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

/* ============================
   MAIN NAVBAR COMPONENT
============================ */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="bg-[#004080] text-white py-2.5 text-center text-sm font-medium">
        <div className="container-custom flex items-center justify-center gap-2 flex-wrap">
          <span>🚀 Get 20% OFF on all services this month!</span>
          <Link
            href="/services"
            className="underline hover:no-underline ml-2 inline-flex items-center gap-1 font-semibold"
          >
            View Services <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white border-b border-gray-100 shadow-sm"
            : "bg-white"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            
            {/* ===== LOGO ===== */}
            <Link href="/" className="flex items-center gap-3 group">
              <div>
                <Image width={145} height={20} src={'/icons/logo.webp'} alt="Soltech360"/>
              </div>
            </Link>

            {/* ===== DESKTOP NAVIGATION ===== */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button
                      className={cn(
                        "px-4 py-2.5 text-sm font-medium transition-colors rounded-lg flex items-center gap-1.5",
                        "text-gray-600 hover:text-[#004080] hover:bg-[#004080]/5"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2.5 text-sm font-medium transition-colors rounded-lg flex items-center gap-1.5",
                        "text-gray-600 hover:text-[#004080] hover:bg-[#004080]/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 p-2 bg-white rounded-2xl shadow-2xl border border-gray-100"
                        >
                          <div className="grid gap-1 max-h-[400px] overflow-y-auto">
                            {item.children?.map((child) => {
                              const isExternal = 'isExternal' in child && child.isExternal;
                              
                              if (isExternal) {
                                return (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#004080]/5 transition-colors group"
                                  >
                                    <div className="w-10 h-10 rounded-lg bg-[#004080]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#004080] transition-colors">
                                      <child.icon className="w-5 h-5 text-[#004080] group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-sm font-semibold text-gray-800 group-hover:text-[#004080] transition-colors flex items-center gap-1">
                                        {child.label}
                                        <ExternalLink className="w-3 h-3 text-gray-400" />
                                      </div>
                                      <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                        {child.description}
                                      </div>
                                    </div>
                                  </a>
                                );
                              }
                              
                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#004080]/5 transition-colors group"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-[#004080]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#004080] transition-colors">
                                    <child.icon className="w-5 h-5 text-[#004080] group-hover:text-white transition-colors" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-gray-800 group-hover:text-[#004080] transition-colors">
                                      {child.label}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                      {child.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          
                          {/* View All Link - Only for Services */}
                          {item.label === "Services" && (
                            <div className="mt-2 pt-2 border-t border-gray-100">
                              <Link
                                href={item.href}
                                className="flex items-center justify-center gap-2 p-3 text-sm font-medium text-[#004080] hover:bg-[#004080]/5 rounded-xl transition-colors"
                              >
                                View All {item.label}
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* ===== CTA BUTTONS ===== */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#004080] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#004080]/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#004080]" />
                </div>
                <span className="hidden xl:inline font-medium">
                  {siteConfig.contact.phone}
                </span>
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#004080] text-white text-sm font-semibold rounded-full hover:bg-[#003366] hover:shadow-lg transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* ===== MOBILE MENU BUTTON ===== */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-gray-600 hover:text-[#004080] hover:bg-[#004080]/5 rounded-xl transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto"
            >
              <div className="container-custom py-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <div className="py-3 px-4 text-base font-medium text-gray-700">
                        {item.label}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 text-base font-medium text-gray-700 hover:text-[#004080] hover:bg-[#004080]/5 rounded-xl transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                    
                    {/* Mobile Dropdown Items */}
                    {item.hasDropdown && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-[#004080]/20 ml-4">
                        {item.children?.map((child) => {
                          const isExternal = 'isExternal' in child && child.isExternal;
                          
                          if (isExternal) {
                            return (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 py-2.5 px-4 text-sm text-gray-600 hover:text-[#004080] hover:bg-[#004080]/5 rounded-lg transition-colors"
                              >
                                <child.icon className="w-4 h-4 text-[#004080]" />
                                <span>{child.label}</span>
                                <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />
                              </a>
                            );
                          }
                          
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 py-2.5 px-4 text-sm text-gray-600 hover:text-[#004080] hover:bg-[#004080]/5 rounded-lg transition-colors"
                            >
                              <child.icon className="w-4 h-4 text-[#004080]" />
                              <span>{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#004080] text-white font-semibold rounded-full hover:bg-[#003366] transition-all duration-300"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}