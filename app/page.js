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
  Menu,
  X,
  ChevronRight,
  Truck,
  DollarSign,
  CreditCard,
  Car,
  Bike,
  Ship,
  RadioTower,
  ThumbsUp,
  UserCheck,
  Ban,
  Users,
  Star,
  Quote,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
  ChevronUp,
  Clock as ClockIcon,
  Shield as ShieldIcon,
  Car as CarIcon,
  Truck as TruckIcon,
  Ship as ShipIcon,
  RadioTower as RadioTowerIcon
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Battery Replacement",
      href: "#battery-replacement",
      dropdown: [
        "Car Batteries",
        "Truck Batteries",
        "Marine Batteries",
        "Motorcycle Batteries",
        "Golf Cart Batteries",
        "NBN Batteries",
      ],
    },
    { name: "Service Area", href: "/service-area" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-red-50 px-4 py-2 rounded-full border border-blue-100"
              >
                <ZapIcon className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">
                  Available 24/7 • Fast Response
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-[family-name:var(--font-space-grotesk)] text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                  Mobile Battery
                </span>
                <br />
                <span className="text-gray-900">Service You Can Trust</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Fast, reliable battery replacement and jumpstart service across 
                <span className="font-semibold text-blue-600"> Brisbane & Gold Coast</span>. 
                We come to you, 24/7, with batteries delivered and fitted in 
                <span className="font-semibold text-red-600"> 60 minutes or less</span>.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Clock, text: "60 Min Service" },
                  { icon: Shield, text: "365 Day Service" },
                  { icon: Battery, text: "All Battery Types" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 px-4 py-3 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="tel:+61492979067"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center space-x-2">
                    <PhoneIcon className="w-5 h-5" />
                    <span>0492 979 067</span>
                  </div>
                </motion.a>

                <motion.a
                  href="#quote"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <MailIcon className="w-5 h-5" />
                    <span>Get Free Quote</span>
                  </div>
                </motion.a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-2 text-sm text-gray-500"
              >
                <MapPinIcon className="w-4 h-4" />
                <span>Serving Brisbane & Gold Coast • Available 24/7</span>
              </motion.div>
            </div>

            {/* Right Content - Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              {/* Claymorphic Card with Image Placeholder */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative clay p-8 rounded-3xl"
              >
                {/* Image Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <BatteryIcon className="w-24 h-24 text-blue-600 mx-auto" />
                      <div className="space-y-2">
                        <p className="text-gray-600 font-medium">📸 Hero Image Needed</p>
                        <p className="text-sm text-gray-500">
                          Add: Mobile service van or<br />
                          technician installing battery
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-semibold text-gray-700">Online</span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-xl shadow-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <ZapIcon className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-700">Fast Service</span>
                    </div>
                  </motion.div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { number: "24/7", label: "Available" },
                    { number: "60min", label: "Response" },
                    { number: "100%", label: "Guaranteed" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-blue-50 to-red-50 p-4 rounded-xl text-center"
                    >
                      <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Battery Types & Payments */}
      <section id="battery-replacement" className="py-18 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">What we stock</p>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-4xl font-bold text-gray-900">
                Batteries for every vehicle and backup
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Premium, high-performance batteries matched to your make and model. Fitted on-site with warranty paperwork and expert advice.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
              <ShieldIcon className="w-4 h-4 text-blue-600" />
              <span>Warranty supplied on every install</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Car Batteries", icon: Car },
              { label: "Truck Batteries", icon: Truck },
              { label: "Motorcycle Batteries", icon: Bike },
              { label: "Marine Batteries", icon: Ship },
              { label: "Golf Cart Batteries", icon: Battery },
              { label: "NBN Batteries", icon: RadioTower },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.04 * idx, duration: 0.35 }}
                whileHover={{ y: -4 }}
                className="flex items-center justify-between px-5 py-4 rounded-xl border border-gray-100 bg-white shadow-sm "
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center text-blue-700 font-semibold">
                    {idx + 1}
                  </div>
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-900">{item.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-semibold">
              <ClockIcon className="w-4 h-4" />
              60 minute arrival goal across Brisbane & Gold Coast
            </div>
            <div className="flex flex-wrap items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-700">
              <span className="text-sm font-semibold">Payments:</span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 flex items-center gap-2 text-sm font-bold text-gray-800"><FaCcVisa className="w-5 h-5 text-blue-600" /> Visa</span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 flex items-center gap-2 text-sm font-bold text-gray-800">
                <svg viewBox="0 0 36 24" className="w-6 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M12 12A12 12 0 1 0 24 12A12 12 0 1 0 12 12Z" fill="#ff5f00"/><path d="M22.68 12A12 12 0 0 1 18 20.48A12 12 0 0 1 13.32 12A12 12 0 0 1 18 3.52A12 12 0 0 1 22.68 12Z" fill="#eb001b"/><path d="M24 12A12 12 0 1 0 36 12A12 12 0 1 0 24 12Z" fill="#f79e1b"/></svg> 
                Mastercard
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 flex items-center gap-2 text-sm font-bold text-gray-800"><FaCcPaypal className="w-5 h-5 text-blue-500" /> PayPal</span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-800">Zip</span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-bold text-[#b2fce4]">afterpay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <StatsAndTimeline />
      <section id="services" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200/30 blur-3xl" />
          <div className="absolute bottom-10 right-0 w-72 h-72 bg-red-200/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Why choose us</p>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Brisbane & Gold Coast battery help
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">delivered to you in 60 minutes</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                From emergency roadside jumpstarts to full battery replacement, our mobile technicians arrive fast, fit on-site, and get you moving. 24/7/365 coverage with expert advice and premium batteries at fair prices.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-3 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">Online • Brisbane & Gold Coast</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.05 * index, duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-100 shadow-sm  p-6"
              >
                <div className="relative flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-red-50 text-blue-700">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-100">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Got Questions?</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our mobile battery service in Brisbane and Gold Coast.
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      <Footer />
    </div>
  );
}



import { useMotionValue, useTransform, animate, useInView } from "framer-motion";

function AnimatedCounter({ from, to, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function StatsAndTimeline() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 text-center">
          {[
            { to: 20000, suffix: "+", label: "Happy Customers" },
            { to: 45, suffix: " Min", label: "Average Response" },
            { to: 2, suffix: " Years", label: "Warranty Included" },
            { to: 24, suffix: "/7", label: "Emergency Service" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-[2rem] bg-white shadow-sm border border-gray-100"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3 font-[family-name:var(--font-space-grotesk)]">
                <AnimatedCounter from={0} to={stat.to} />{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 block">Our Process</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Getting your battery replaced has never been easier or faster.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>
            
            {[
              { title: "Call or Book", desc: "Tell us your vehicle and location.", icon: PhoneIcon },
              { title: "We Diagnose", desc: "Free battery & charging system test.", icon: ZapIcon },
              { title: "Install On-Site", desc: "Fitted on the spot in under 30 mins.", icon: BatteryIcon },
              { title: "Drive Away", desc: "2-year warranty & free recycling.", icon: CarIcon },
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
      </div>
    </section>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you arrive for emergency battery service?",
      answer: "We aim to reach you within 60 minutes or less across Brisbane and Gold Coast. Our mobile vans are strategically positioned throughout the region to ensure fast response times. In most cases, we arrive even sooner, especially during emergency situations."
    },
    {
      question: "Do you offer 24/7 battery replacement service?",
      answer: "Yes! Battery Australia operates 24 hours a day, 7 days a week, 365 days a year. Whether it's 3 AM on a Sunday or a public holiday, we're here to help. Our emergency roadside service is always available when you need it most."
    },
    {
      question: "What types of batteries do you replace?",
      answer: "We stock and install batteries for all vehicle types including car batteries, truck batteries, motorcycle batteries, marine batteries, golf cart batteries, and NBN backup batteries. All batteries are matched to OEM specifications and come with warranty documentation."
    },
    {
      question: "How much does a battery replacement cost?",
      answer: "We provide transparent, upfront pricing with no hidden fees. The cost depends on your vehicle type and battery specifications. Contact us for a free quote online or call +61 492 979 067. We accept all major payment methods including VISA, Mastercard, PayPal, Afterpay, and Zip."
    },
    {
      question: "Do I need to bring my vehicle to a workshop?",
      answer: "No! That's the beauty of our mobile service. We come directly to you - whether you're at home, at work, in a shopping center, or stranded on the roadside. Our fully equipped vans carry everything needed to test, diagnose, and replace your battery on the spot."
    },
    {
      question: "What's included in your battery service?",
      answer: "Our service includes free battery testing and diagnostics, jumpstart if needed, complete battery replacement with professional installation, voltage checks, charging system tests, warranty paperwork, and expert advice. We ensure your vehicle is safe and ready to drive before we leave."
    },
    {
      question: "Which areas do you service?",
      answer: "We provide comprehensive coverage across Brisbane and the Gold Coast. Our service areas include Seventeen Mile Rocks, Burleigh Heads, and all surrounding suburbs. If you're unsure whether we cover your location, give us a call - we'll do our best to help you regardless of where you are."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 text-lg pr-8">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <ChevronDown className="w-6 h-6 text-blue-600" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
