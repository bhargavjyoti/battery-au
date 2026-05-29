"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Battery,
  Zap,
  Clock,
  Shield,
  ChevronDown,
  ArrowRight,
  Truck,
  DollarSign,
  CreditCard,
  Car,
  Bike,
  Ship,
  RadioTower,
  ThumbsUp,
  UserCheck,
  Award,
  Calendar,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { 
  PhoneIcon, MailIcon, MapPinIcon, BatteryIcon, ZapIcon, 
  DollarSignIcon, CreditCardIcon, 
  BikeIcon 
} from "@animateicons/react/lucide";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const batteryStock = [
    { label: "Car Batteries", href: "/battery-replacement/car", icon: Car, desc: "Fast fits for all SUV, sedan, and hybrid engines." },
    { label: "Truck Batteries", href: "/battery-replacement/truck", icon: Truck, desc: "Heavy-duty commercial & 4x4 rig starting power." },
    { label: "Motorcycle Batteries", href: "/battery-replacement/motorcycle", icon: Bike, desc: "Vibrant high-CCA starting cells for all road bikes." },
    { label: "Marine Batteries", href: "/battery-replacement/marine", icon: Ship, desc: "Reliable deep-cycle dual-purpose watercraft cells." },
    { label: "Golf Cart Batteries", href: "/battery-replacement/golf-cart", icon: Battery, desc: "Premium high-endurance deep-cycle battery packs." },
    { label: "NBN Batteries", href: "/battery-replacement/nbn", icon: RadioTower, desc: "Uninterruptible power backup supply replacements." },
  ];

  const highlights = [
    {
      title: "Delivered & fitted on-site",
      desc: "We come to your home, work, or roadside with the right battery and install it safely in minutes.",
      icon: Truck,
      badge: "Mobile vans",
    },
    {
      title: "Jumpstarts & diagnostics",
      desc: "Quick jumpstarts, voltage checks, and charging system tests so you know your vehicle is healthy.",
      icon: Zap,
      badge: "24/7",
    },
    {
      title: "All battery types",
      desc: "Car, 4x4, truck, marine, motorcycle, golf cart, and NBN backups—matched to OEM specs.",
      icon: Battery,
      badge: "OEM matched",
    },
    {
      title: "Fast response (60 mins)",
      desc: "Technicians dispatched near you across Brisbane and the Gold Coast for rapid arrival.",
      icon: Clock,
      badge: "60 min ETA",
    },
    {
      title: "Transparent pricing",
      desc: "Upfront quotes with no surprises. Competitive prices on quality, high-performance batteries.",
      icon: DollarSign,
      badge: "No hidden fees",
    },
    {
      title: "Secure payments",
      desc: "Pay your way: card, PayPal, Afterpay, Zip. Receipts and warranty on every job.",
      icon: CreditCard,
      badge: "Multiple options",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Modern High-Fidelity Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        {/* Animated Background Vector Accents */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-1/4 w-[35rem] h-[35rem] bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.15, 1, 1.15],
              rotate: [45, 0, 45],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 left-1/4 w-[35rem] h-[35rem] bg-red-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Copywriting & Dynamic Badging (Col Span 6) */}
            <div className="space-y-8 lg:col-span-6 text-left">
              {/* Pulsing radar active badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-3 bg-white px-4 py-2.5 rounded-full border border-blue-100 shadow-md shadow-blue-50/40"
              >
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-bold text-gray-700">
                  Vans Active 24/7 • Brisbane & Gold Coast
                </span>
              </motion.div>

              {/* Space Grotesk Bold Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gray-900 tracking-tight"
              >
                Mobile Battery <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                  Rescue 24/7
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Stuck with a dead battery? Don't pay towing or membership fees. Our strategic mobile response units arrive at your home, office, or roadside in <span className="font-bold text-red-600">60 minutes or less</span>.
              </motion.p>

              {/* Tactile Counter Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                {[
                  { icon: Clock, text: "Under 60 Min Arrival" },
                  { icon: Shield, text: "3-Year Warranty Inc." },
                  { icon: DollarSign, text: "Zero Call-Out Fees" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 px-4 py-3 bg-white/85 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <feature.icon className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-gray-700 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Primary Call-to-action triggers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
              >
                <motion.a
                  href="tel:+61492979067"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden text-center cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center space-x-3 text-lg">
                    <PhoneIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Call 0492 979 067</span>
                  </div>
                </motion.a>

                <Link href="/contact-us">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-5 bg-white border border-gray-200 text-gray-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center flex items-center justify-center space-x-2 text-lg shadow-sm cursor-pointer"
                  >
                    <MailIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                    <span>Get Free Quote</span>
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            {/* Right Side: Massive High-Resolution battery-au.png (Col Span 6) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-6 relative w-full flex justify-center"
            >
              {/* Radial glow background ring behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-red-600/20 rounded-[3rem] blur-3xl transform rotate-3 scale-105 pointer-events-none" />
              
              <motion.div
                whileHover={{ y: -10, scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="relative rounded-[2.8rem] p-1.5 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 shadow-2xl w-full max-w-[640px] cursor-pointer"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-inner flex items-center justify-center p-2">
                  <img
                    src="/battery-au.png"
                    alt="Battery Australia Mobile Rescue Fleet"
                    className="w-full h-auto min-h-[300px] lg:min-h-[440px] xl:min-h-[500px] object-cover rounded-[2.2rem] select-none pointer-events-none transition-transform duration-500 hover:scale-105"
                  />
                  
                  {/* Floating active dispatcher badge */}
                  <div className="absolute bottom-6 right-6 bg-black/85 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10 shadow-xl max-w-[240px]">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Roadside Fleet</p>
                    <p className="text-base text-white font-bold mt-1 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-400 shrink-0 animate-bounce" />
                      <span>SEQ Strategic Dispatch</span>
                    </p>
                  </div>

                  {/* Floating Left SLA Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-blue-100 shadow-lg text-left hidden sm:block">
                    <p className="text-[10px] text-blue-600 uppercase tracking-widest font-bold">Fast SLA Guarantee</p>
                    <p className="text-base text-gray-900 font-extrabold mt-0.5 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-red-600 animate-pulse shrink-0" />
                      <span>60 Mins Or Less</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Strategic Category Stocks Section */}
      <section id="battery-replacement" className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block">Available Inventory</span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Premium Stock For Every Application
              </h2>
              <p className="text-lg text-gray-600">
                We carry high-CCA starting cells and deep-cycle battery packs matching OEM specifications. Tap any category to view full services.
              </p>
            </div>
            
            <div className="shrink-0">
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-sm font-bold text-gray-700">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Full manufacturer warranty included</span>
              </div>
            </div>
          </div>

          {/* Dynamic Category Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {batteryStock.map((item, idx) => (
              <Link href={item.href} key={idx} className="block group cursor-pointer">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative p-6 rounded-[2rem] border border-gray-100 bg-white hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 overflow-hidden"
                >
                  {/* Subtle color highlight underline */}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Service
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900 text-xl group-hover:text-blue-600 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Secure Payment Options Wrapper */}
          <div className="grid md:grid-cols-2 gap-6 pt-6">
            <div className="flex items-center gap-3 px-6 py-4 rounded-[2rem] bg-blue-50/50 border border-blue-100 text-blue-800 font-semibold shadow-sm text-sm">
              <Clock className="w-5 h-5 shrink-0 text-blue-600" />
              <span>We target a 60-minute roadside arrival across Brisbane & Gold Coast suburbs.</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 px-6 py-4 rounded-[2rem] bg-gray-50 border border-gray-100 text-gray-700 shadow-sm text-xs md:text-sm">
              <span className="font-bold">Payments accepted:</span>
              <span className="px-3 py-1 bg-white border border-gray-100 rounded-lg flex items-center gap-1.5 font-bold"><FaCcVisa className="text-blue-600" /> Visa</span>
              <span className="px-3 py-1 bg-white border border-gray-100 rounded-lg flex items-center gap-1.5 font-bold">
                <svg viewBox="0 0 36 24" className="w-5 h-3" xmlns="http://www.w3.org/2000/svg"><path d="M12 12A12 12 0 1 0 24 12A12 12 0 1 0 12 12Z" fill="#ff5f00"/><path d="M22.68 12A12 12 0 0 1 18 20.48A12 12 0 0 1 13.32 12A12 12 0 0 1 18 3.52A12 12 0 0 1 22.68 12Z" fill="#eb001b"/><path d="M24 12A12 12 0 1 0 36 12A12 12 0 1 0 24 12Z" fill="#f79e1b"/></svg>
                Mastercard
              </span>
              <span className="px-3 py-1 bg-white border border-gray-100 rounded-lg flex items-center gap-1.5 font-bold"><FaCcPaypal className="text-blue-500" /> Paypal</span>
              <span className="px-3 py-1 bg-white border border-gray-100 rounded-lg font-bold">Afterpay</span>
            </div>
          </div>

        </div>
      </section>

      {/* Redesigned 4-Step Interactive Process timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block">No Hassle Process</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              How Our Service Works
            </h2>
            <p className="text-gray-600">
              Getting back on the road has never been easier. We handle the lookup, the delivery, and the expert installation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
            {/* Desktop timeline horizontal route connector */}
            <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>
            
            {[
              { title: "Call or Request", desc: "Share your exact vehicle model and current address location.", icon: Phone },
              { title: "We Diagnose", desc: "We perform a free starter and battery charging test on-site.", icon: Zap },
              { title: "Install On-Site", desc: "Our expert installs the right cell in under 30 minutes.", icon: Battery },
              { title: "Drive Safely", desc: "Collect warranty paperwork. Free environmentally friendly recycling.", icon: Car },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 180 }}
                whileHover={{ y: -6 }}
                className="relative bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md z-10 flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 -mt-12 shadow-sm">
                  <step.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Redesigned Brand Highlights Grids */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block">The Premium Difference</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Roadside Assistance You Can Depend On
            </h2>
            <p className="text-gray-600">
              Southeast Queensland drivers trust us for our transparent fixed quotes, premium replacement cells, and rapid-response mobile vehicle fleet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-sm p-6 cursor-default"
              >
                <div className="relative flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-100">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Customer Reviews Slider - UNTOUCHED (as requested) */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Customer Reviews</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900">
              What our customers say
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Upgraded FAQ Accordion Section */}
      <section id="faq" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block">Got Questions?</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about our mobile battery replacements in Brisbane and Gold Coast.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can you arrive for roadside battery help?",
                a: "Our dispatch units average an arrival speed of 60 minutes or less across Brisbane and the Gold Coast suburbs. Our fleet is strategically distributed, meaning our nearest technician will be routed to your coordinates immediately."
              },
              {
                q: "Do you offer emergency battery replacement 24/7?",
                a: "Yes! Battery Australia runs completely 24 hours a day, 7 days a week, 365 days a year. Whether you are stranded late at night or on a public holiday, our emergency roadside rescue teams are fully active and ready to roll."
              },
              {
                q: "What brands of vehicle batteries do you stock?",
                a: "We only stock premium, high-CCA batteries compatible with OEM specifications, including leading brands like Century, Varta, Deka, Yuasa, Trojan, and Optima, fully backed by replacement warranties."
              },
              {
                q: "How much does roadside diagnostic and fitting cost?",
                a: "We offer completely upfront fixed pricing with absolutely zero hidden call-out fees or emergency charges. The price depends entirely on your vehicle's specific OEM requirements. Call us for a 2-minute instant quote!"
              },
              {
                q: "Do I need to drive my vehicle to a physical workshop?",
                a: "Not at all. That is the luxury of our mobile workshop model. We bring complete starting and alternator diagnostics, battery stock, and fully certified technicians directly to your current location, replacing the unit on the spot."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="font-bold text-gray-900 text-lg pr-8">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-gray-600 leading-relaxed border-t border-gray-50/60 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* High-Converting Emergency CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Stranded with a Dead Battery?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Vans are fully active in your area right now. Call us, get a fixed transparent quote, and have a mobile diagnostic vehicle dispatched immediately.
          </p>
          <div className="pt-2">
            <a
              href="tel:+61492979067"
              className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-white text-blue-600 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xl cursor-pointer"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              <span>Call 0492 979 067</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
