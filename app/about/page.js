"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Star,
  Quote,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
  ChevronUp,
  Award,
  Users,
  Target,
  Heart,
  ThumbsUp,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        { name: "Car Batteries", href: "#car" },
        { name: "Truck Batteries", href: "#truck" },
        { name: "Motorcycle Batteries", href: "#motorcycle" },
        { name: "Marine Batteries", href: "#marine" },
        { name: "Golf Cart Batteries", href: "#golf-cart" },
        { name: "NBN Batteries", href: "#nbn" },
      ],
    },
    { name: "Service Area", href: "#service-area" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-white/50 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Battery className="w-8 h-8 text-blue-600" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-gray-900">
                Battery Australia
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 glass rounded-xl shadow-xl py-2 border border-gray-100"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            >
                              {item.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+61492979067"
                className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
                <a
                  href="tel:+61492979067"
                  className="flex items-center justify-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold mt-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">About Battery Australia</p>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Proudly Family-Owned and Locally Operated
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For the past 9 years, we've proudly served Brisbane and beyond, helping drivers, businesses, and families stay powered up with reliable battery solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gray-900 mb-6">
                More Than Just a Battery Store
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Battery Australia, we're more than just a battery store, we're a local, family-owned business with a strong focus on trust, quality, and community. For the past 9 years, we've proudly served Brisbane and beyond, helping drivers, businesses, and families stay powered up with reliable battery solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 100+ 5-star Google reviews, our reputation speaks for itself. Customers choose us not only for our competitive prices but also for our fast service, expert advice, and genuine care. Whether it's a car, truck, marine, or specialty battery, our team provides the right solution tailored to your needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide fast battery delivery and installation across Brisbane, servicing suburbs including Auchenflower, Brisbane CBD, Coorparoo, Dutton Park, East Brisbane, Fairfield, Greenslopes, Highgate Hill, Indooroopilly, Milton, New Farm, Norman Park, Paddington, Rosalie, South Brisbane, St Lucia, South Bank, Spring Hill, Taringa, Teneriffe, Toowong, West End, Woolloongabba (The Gabba), Yeronga, and many more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-100 to-red-100 overflow-hidden shadow-2xl">
                <img
                  src="https://batteryaustralia.au/wp-content/uploads/2025/06/No-call-out-fees.jpg"
                  alt="Battery Australia Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100+</p>
                    <p className="text-sm text-gray-600">5-Star Reviews</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Years of Service", value: "9+", icon: Award },
              { label: "5-Star Reviews", value: "100+", icon: Star },
              { label: "Happy Customers", value: "2,500+", icon: ThumbsUp },
              { label: "Response Time", value: "60 Min", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Our Values</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Trust & Reliability",
                desc: "Building lasting relationships through honest service and dependable solutions.",
              },
              {
                icon: Target,
                title: "Quality First",
                desc: "Premium batteries matched to OEM specs with full warranty coverage.",
              },
              {
                icon: Heart,
                title: "Community Focus",
                desc: "Local, family-owned business dedicated to serving Brisbane families.",
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                desc: "Always evolving our service to exceed customer expectations.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="clay p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center text-blue-600 mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Our Team</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900">
              Get to Know Our Dedicated Team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Andy", role: "Customer Relations Officer", initials: "A" },
              { name: "Sam", role: "Battery Technician", initials: "S" },
              { name: "Ranjit", role: "Battery Technician", initials: "R" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  {member.initials}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Why Choose Us</p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl font-bold text-gray-900">
              The Battery Australia Difference
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Truck,
                title: "Mobile Service",
                desc: "We come to you - home, work, or roadside. No need to visit a workshop.",
              },
              {
                icon: Clock,
                title: "Fast Response",
                desc: "60-minute arrival goal across Brisbane and Gold Coast, often even faster.",
              },
              {
                icon: DollarSign,
                title: "Competitive Pricing",
                desc: "Transparent upfront quotes with no hidden fees or surprises.",
              },
              {
                icon: Award,
                title: "100+ 5-Star Reviews",
                desc: "Our reputation for quality and service speaks for itself.",
              },
              {
                icon: Battery,
                title: "All Battery Types",
                desc: "Car, truck, marine, motorcycle, golf cart, and NBN batteries in stock.",
              },
              {
                icon: Shield,
                title: "Warranty Included",
                desc: "Every battery comes with full warranty documentation and support.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center text-blue-600 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
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
                  { label: "Battery Replacement", href: "/#battery-replacement" },
                  { label: "Service Area", href: "#service-area" },
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
