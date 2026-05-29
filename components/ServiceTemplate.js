"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Shield, Clock, DollarSign, Star, CheckCircle2, Calendar, Zap, Battery, Car } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TestimonialSlider from "./TestimonialSlider";

export default function ServiceTemplate({ 
  heroSubtitle, 
  title, 
  description, 
  features, 
  faqs,
  heroIcon
}) {
  const benefits = [
    { text: "Available 365 Days a Year", icon: Calendar },
    { text: "60 Min or Less Arrival", icon: Clock },
    { text: "Zero Call-Out Fees", icon: DollarSign },
    { text: "Full Manufacturer Warranty", icon: Shield }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-red-300/30 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                {heroIcon}
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{heroSubtitle}</span>
              </div>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+61492979067"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300 font-bold text-lg group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Call 0492 979 067</span>
                </a>
              </div>
            </motion.div>

            {/* Grid of quick benefits in Hero */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "60 Min Arrival", desc: "Fast roadside rescue", icon: Clock },
                { title: "No Call-Out Fee", desc: "Transparent pricing", icon: DollarSign },
                { title: "Warranty Included", desc: "On all batteries", icon: Shield },
                { title: "5-Star Rated", desc: "100+ happy reviews", icon: Star },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content & Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our {heroSubtitle} Service?
              </h2>
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl glass p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-red-600/5" />
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">The Battery Australia Difference</h3>
              <div className="grid gap-4 relative z-10">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-800">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 block">Simple & Fast</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How Our Service Works</h2>
            <p className="text-gray-600 text-lg">Getting your battery replaced has never been easier.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>
            
            {[
              { title: "Call Us", desc: "Tell us your location and issue.", icon: Phone },
              { title: "We Diagnose", desc: "Free charging system test on-site.", icon: Zap },
              { title: "Install Battery", desc: "Fitted in under 30 minutes.", icon: Battery },
              { title: "Drive Away", desc: "Full warranty and free old battery recycling.", icon: Car },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 200 }}
                whileHover={{ y: -8 }}
                className="relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 -mt-12 shadow-md">
                  <step.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">Everything you need to know about our {heroSubtitle.toLowerCase()} replacements.</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Customer Reviews</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900">
              Trusted by locals
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stuck or Stranded? We're On Our Way.</h2>
          <p className="text-blue-100 text-lg mb-8">Available 24/7 for emergency battery replacement across Southeast Queensland.</p>
          <a
            href="tel:+61492979067"
            className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-white text-blue-600 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl"
          >
            <Phone className="w-6 h-6" />
            <span>Call 0492 979 067</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
