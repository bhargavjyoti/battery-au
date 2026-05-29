"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Target,
  Shield,
  Clock,
  ThumbsUp,
  ChevronDown,
  Award,
  Zap,
  CheckCircle2,
  Users,
  Headphones,
  Wrench
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TestimonialSlider from "../../components/TestimonialSlider";

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How fast can you arrive?",
      a: "Our goal is to arrive within 60 minutes across most of Brisbane and the Gold Coast. Wait times may vary during peak hours or extreme weather, but we always dispatch the closest available technician."
    },
    {
      q: "Do you charge a call-out fee?",
      a: "No! We believe in transparent pricing. You only pay for the battery and the standard installation fee, with absolutely zero hidden call-out charges."
    },
    {
      q: "Are your batteries under warranty?",
      a: "Yes, all our premium batteries come with a full manufacturer warranty (typically 2 to 3 years depending on the model), giving you complete peace of mind."
    },
    {
      q: "What areas do you service?",
      a: "We provide mobile battery replacement across the greater Brisbane region and the Gold Coast."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-red-300/30 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">About Us</span>
            </div>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Driven by <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Reliability</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Battery Australia is your local, trusted mobile battery replacement service. We built our company on a simple promise: fast response times, transparent pricing, and getting you back on the road safely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-red-100 rounded-[3rem] transform -rotate-3" />
              <div className="relative bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
                <Target className="w-12 h-12 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  To eliminate the stress of a dead battery by providing the fastest, most reliable mobile replacement service in Southeast Queensland. 
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We know that when your car won't start, your entire day is put on hold. That's why we don't charge call-out fees, and we only stock premium batteries that we trust in our own vehicles.
                </p>
              </div>
            </motion.div>

            <div className="space-y-8">
              {[
                { title: "Zero Call-Out Fees", desc: "You only pay for the battery and fitting. No nasty surprises.", icon: ThumbsUp },
                { title: "24/7 Availability", desc: "Day or night, rain or shine, our mobile vans are ready to roll.", icon: Clock },
                { title: "Expert Technicians", desc: "Fully trained professionals who care about your vehicle.", icon: Users }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center border border-gray-100 shadow-sm">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Dedicated Team Section */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block">Expert Assistance</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Get to Know <br />
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Our Dedicated Team
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Meet the highly-skilled professionals carrying out strategic 24/7 emergency dispatch and mobile technical roadside services across Southeast Queensland.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Andy",
                role: "Customer Relations Officer",
                icon: Headphones,
                iconBg: "bg-blue-50 text-blue-600 border-blue-100",
                desc: "Andy manages direct communications, vehicle routing, and emergency roadside dispatch with a friendly Brisbane smile."
              },
              {
                name: "Sam",
                role: "Battery Technician",
                icon: Wrench,
                iconBg: "bg-red-50 text-red-600 border-red-100",
                desc: "Sam is our senior SEQ field technician, carrying expert certification in dual-battery installations and complex rig diagnostics."
              },
              {
                name: "Ranjit",
                role: "Battery Technician",
                icon: Zap,
                iconBg: "bg-amber-50 text-amber-600 border-amber-100",
                desc: "Ranjit leads Gold Coast response units, specialized in heavy commercial diesel starts and advanced deep-cycle marine setups."
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between text-left"
              >
                <div className="space-y-6">
                  {/* Icon Frame */}
                  <div className={`w-14 h-14 rounded-2xl ${member.iconBg} border flex items-center justify-center`}>
                    <member.icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-base">
                    {member.desc}
                  </p>
                </div>
                
                {/* Visual decorative line in card */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mt-6" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Our Reputation</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900">
              Trusted by locals
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
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

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience the difference today.</h2>
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
