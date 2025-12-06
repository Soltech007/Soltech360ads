"use client";

import React from "react";
import { AnimatedTestimonials } from "@/src/components/ui/animated-testimonials";

export default function TestimonialsSection() {
  // Your Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "CEO, TechStart India",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "SolTech360 transformed our digital presence completely. Our leads increased by 300% in just 3 months. The team is incredibly responsive and knows exactly what works.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Founder, Fashion Hub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Best decision we made for our e-commerce business. The Facebook and Instagram ads they run are super effective. Our ROAS is consistently above 5x.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Director, Real Estate Co.",
      image: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "We were struggling with lead quality before partnering with SolTech360. Now we get 50+ qualified leads every week through their Google Ads campaigns.",
      rating: 5,
    },
    {
      id: 4,
      name: "Amit Gupta",
      role: "Owner, Beauty Studio",
      image: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "The website they built for us is stunning and converts really well. Plus their local SEO work has us ranking #1 for all our target keywords.",
      rating: 5,
    },
  ];

  // Convert into the format AnimatedTestimonials needs
  const formattedTestimonials = testimonials.map((t) => ({
    quote: t.content,
    name: t.name,
    designation: t.role,
    src: t.image,
  }));

  return (
    <section className="">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-2">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary-500">Clients Say</span>
          </h2>

          <p className="text-lg text-gray-600">
            Here’s what our clients think about SolTech360 — their trust is our
            biggest achievement.
          </p>
        </div>

        {/* Animated Testimonials (Aceternity Component) */}
        <AnimatedTestimonials testimonials={formattedTestimonials} />

      </div>
    </section>
  );
}
