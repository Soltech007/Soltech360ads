"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Youtube,
} from "lucide-react";
import { siteConfig } from "@/src/lib/constants";
import Image from "next/image";
// CHANGE 1: Import Toaster here
import toast, { Toaster } from "react-hot-toast";

const footerLinks = {
  services: [
    { label: "Facebook Ads", href: "/services/facebook-ads" },
    { label: "Google Ads", href: "/services/google-ads" },
    { label: "SEO Services", href: "/services/seo-optimization" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Email Marketing", href: "/services/email-whatsapp-marketing" },
    { label: "Content Creation", href: "/services/content-marketing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/" },
    { label: "Affiliate Partner", href: "/" },
    { label: "Become a Partner", href: "/" }, 
  ],
  support: [
    { label: "Pricing", href: "/" },
    { label: "FAQ", href: "/" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href:"https://www.facebook.com/people/Soltech-360-Ads/61584133210350/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/soltech360ads/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/soltech-ads-360/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCxZ_YmF017lH1AVSSlLE2HQ", label: "Youtube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState('idle'); // type inferred string is fine here

   const handleSubscribe = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeStatus('success');
        // Success Toast
        toast.success("Subscribed successfully 🎉", {
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
        });
        setEmail("");
        setTimeout(() => setSubscribeStatus('idle'), 5000);
      } else {
        setSubscribeStatus('error');
        toast.error(data.error || "Failed to subscribe");
        setTimeout(() => setSubscribeStatus('idle'), 5000);
      }
    } catch (err) {
      console.error(err);
      setSubscribeStatus('error');
      toast.error("Something went wrong");
      setTimeout(() => setSubscribeStatus('idle'), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white text-gray-900 relative">
      
      {/* CHANGE 2: Add Toaster component here to display the notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Newsletter */}
      <div className="border-b border-gray-200">
        <div className="container-custom py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-8">
              Get the latest digital marketing tips and strategies delivered to
              your inbox.
            </p>
            <form 
             onSubmit={handleSubscribe} 
             aria-labelledby="newsletter-heading"
             className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                 value={email}
                  aria-required="true"
                  aria-invalid={subscribeStatus === 'error'}
                  disabled={loading}
                 onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-gray-100 border border-gray-300 rounded-xl 
                text-gray-900 placeholder-gray-500
                focus:outline-none focus:border-primary-500 
                focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <button
                type="submit"
                id="ads"
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 
                text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                 disabled={loading}
                aria-busy={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image width={145} height={20} src={"/images/logo.png"} alt="" />
            </Link>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Your one-stop solution for digital marketing, web development, and
              business growth.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center 
                  text-gray-600 hover:text-white hover:bg-primary-500 
                  transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-gray-900">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-gray-900">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-5 text-gray-900">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-gray-900">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Soltech360ads. A vertical of <Link href={'https://soltechtechservices.com/'}> <span className="text-primary-800 text-bold"> SOLTECH TechServices Pvt Ltd.    </span>  All rights reserved.
           
            </Link> 
            
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}