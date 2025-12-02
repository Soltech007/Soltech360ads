'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
const CTASection = () => {
  return (
    <div>
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
    </div>
  )
}

export default CTASection