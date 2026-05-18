"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Modern Glassmorphic Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 rounded-full blur-md opacity-50"
                />
                <div className="relative bg-gradient-to-r from-blue-600 to-red-600 p-2 rounded-full">
                  <Battery className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Battery Australia
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <motion.a
                      href={link.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  ) : (
                    <Link href={link.href}>
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group flex items-center space-x-1 cursor-pointer"
                      >
                        <span>{link.name}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 group-hover:w-full transition-all duration-300" />
                      </motion.span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium flex items-center justify-between group"
                        >
                          <span>{item}</span>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href="tel:+61492979067"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <a
                      href={link.href}
                      className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                    >
                      {link.name}
                    </a>
                    <div className="pl-4 space-y-2 mt-2">
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href="#"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <a
                href="tel:+61492979067"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.nav>

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
                <Zap className="w-4 h-4 text-blue-600" />
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
                    <Phone className="w-5 h-5" />
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
                    <Mail className="w-5 h-5" />
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
                <MapPin className="w-4 h-4" />
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
                      <Battery className="w-24 h-24 text-blue-600 mx-auto" />
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
                      <Zap className="w-4 h-4 text-yellow-500" />
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 cursor-pointer"
          >
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
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
              <Shield className="w-4 h-4 text-blue-600" />
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
                className="flex items-center justify-between px-5 py-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-200"
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
              <Clock className="w-4 h-4" />
              60 minute arrival goal across Brisbane & Gold Coast
            </div>
            <div className="flex flex-wrap items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-700">
              <span className="text-sm font-semibold">Payments:</span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-sm">VISA</span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-sm">Mastercard</span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-sm">PayPal</span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-sm">Zip</span>
              <span className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-sm">Afterpay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
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
                className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6"
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

      {/* Footer Section with Parallax Effect */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Parallax Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Battery className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Battery Australia</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Battery Australia Roadside Rescue – Emergency roadside Fuel Topup – Emergency roadside Battery replacement – Emergency Roadside Spare tyre installation – Emergency Roadside basic tyre puncture repair – Emergency Roadside jumpstart.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/batteryaustralia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/batteryaustralia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/batteryaustralia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Battery Replacement", href: "#battery-replacement" },
                  { label: "Service Area", href: "/service-area" },
                  { label: "Blog", href: "#blog" },
                  { label: "Contact Us", href: "#contact" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm">5/17 Benronalds Street, Seventeen Mile Rocks, 4073, Brisbane, Australia</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm">74 Township Drive, Burleigh Head, Gold Coast, Australia</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                  <a href="tel:+61492979067" className="hover:text-blue-400 transition-colors duration-200">
                    +61 492 979 067
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                  <a href="mailto:info@batteryaustralia.com.au" className="hover:text-blue-400 transition-colors duration-200">
                    info@batteryaustralia.com.au
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Service Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Service Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold text-sm">24 Hours / 7 Days</p>
                    <p className="text-gray-400 text-xs">Emergency Service</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 border border-white/20">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="text-white font-semibold text-sm">60 Min Response</p>
                    <p className="text-gray-400 text-xs">Fast Service Guarantee</p>
                  </div>
                </div>
                <div className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 text-white text-center">
                  <p className="font-bold text-sm">Brisbane & Gold Coast</p>
                  <p className="text-xs mt-1">Wide Delivery Coverage</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Acknowledgement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-white/10 mb-6"
          >
            <p className="text-gray-400 text-sm text-center italic">
              Battery Australia acknowledges the Traditional Custodians of the Land and pays respects to Elders past, present and future.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-500 text-sm"
          >
            <p>© 2025 Battery Australia. All Rights Reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sheba Jacob",
      rating: 5.0,
      date: "3 months ago",
      message: "Sam was honest and reliable. He provided a great service after-hours and takes pride in his work. Will be in touch for all our battery replacement requirement in future too, thanks heaps Sam!",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Tana Pepa",
      rating: 5.0,
      date: "2 months ago",
      message: "Great value Fast paced really friendly. Amazing service. They came according to my convinience. Replaced the batery in 20 mins. Excelent service",
      avatar: "TP"
    },
    {
      id: 3,
      name: "TT AA",
      rating: 5.0,
      date: "2 months ago",
      message: "I needed a battery quite late at night. Service was precise, prompt, and well priced.",
      avatar: "TA"
    },
    {
      id: 4,
      name: "Altarium Ambient",
      rating: 5.0,
      date: "2 months ago",
      message: "Had a battery replacement sorted within hours of phoning up, super prompt response from Sam and was arranged at a great price.",
      avatar: "AA"
    },
    {
      id: 5,
      name: "Sharvani Padwal",
      rating: 5.0,
      date: "1 month ago",
      message: "Amazing service. They came according to my convinience. Replaced the batery in 20 mins. Excelent service",
      avatar: "SP"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
      {/* Left side - Vertical reviewer cards (Desktop only) */}
      <div className="hidden lg:block space-y-3 w-[320px]">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          
          return (
            <motion.div
              key={testimonial.id}
              className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                isActive 
                  ? 'glass border-2 border-blue-500 shadow-xl scale-[1.02]' 
                  : 'bg-white/70 border border-gray-200 hover:bg-white hover:shadow-md'
              }`}
              animate={{
                scale: isActive ? 1.02 : 1,
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveIndex(index)}
            >
              {/* Profile Picture */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-md ${
                isActive ? 'bg-gradient-to-br from-blue-600 to-red-600' : 'bg-gray-400'
              }`}>
                {testimonial.avatar}
              </div>
              
              {/* Name and Rating */}
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-base truncate ${
                  isActive ? 'text-gray-900' : 'text-gray-700'
                }`}>
                  {testimonial.name}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className={`w-4 h-4 fill-yellow-400 text-yellow-400`} />
                  <span className="text-sm font-semibold text-gray-700">{testimonial.rating}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Center - Testimonial Message (Square Card) */}
      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 w-full max-w-[500px] min-h-[400px] flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-200" />
              <div className="relative z-10">
                <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                  "{testimonials[activeIndex].message}"
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].date}</p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 bg-yellow-50 rounded-full border border-yellow-200">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-700">{testimonials[activeIndex].rating}</span>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-blue-600 to-red-600'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right side - Stats & Trust Indicators */}
      <div className="hidden lg:flex flex-col gap-4 w-[280px]">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl text-center"
        >
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            4.9/5
          </div>
          <p className="text-sm text-gray-600 mt-1">Average Rating</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass p-6 rounded-2xl text-center"
        >
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            2,500+
          </div>
          <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-6 rounded-2xl text-center"
        >
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
            24/7
          </div>
          <p className="text-sm text-gray-600 mt-1">Emergency Service</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-600 to-red-600 p-6 rounded-2xl text-white text-center shadow-lg"
        >
          <p className="text-sm font-semibold mb-2">✓ Same Day Service</p>
          <p className="text-sm font-semibold mb-2">✓ All Battery Types</p>
          <p className="text-sm font-semibold">✓ Warranty Included</p>
        </motion.div>
      </div>

      {/* Mobile - Single active reviewer card at bottom */}
      <div className="lg:hidden w-full max-w-[400px] mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 p-4 rounded-xl glass border-2 border-blue-500 shadow-xl"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-md bg-gradient-to-br from-blue-600 to-red-600">
              {testimonials[activeIndex].avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base text-gray-900">
                {testimonials[activeIndex].name}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">{testimonials[activeIndex].rating}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
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
