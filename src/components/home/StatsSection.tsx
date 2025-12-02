"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Happy Clients",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: "Cr+",
    prefix: "₹",
    label: "Revenue Generated",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-bg" style={{ backgroundSize: "30px 30px" }} />
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="text-primary-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}