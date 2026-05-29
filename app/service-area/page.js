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
  Search,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
  Map,
  Navigation,
  CheckCircle2,
  Truck,
} from "lucide-react";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServiceArea() {
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

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
  );
}
