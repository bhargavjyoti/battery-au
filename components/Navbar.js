"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { BatteryIcon, PhoneIcon } from "@animateicons/react/lucide";

export default function Navbar() {
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
      href: "/#battery-replacement",
      dropdown: [
        { name: "Car Batteries", href: "/battery-replacement/car" },
        { name: "Truck Batteries", href: "/battery-replacement/truck" },
        { name: "Marine Batteries", href: "/battery-replacement/marine" },
        { name: "Motorcycle Batteries", href: "/battery-replacement/motorcycle" },
        { name: "Golf Cart Batteries", href: "/battery-replacement/golf-cart" },
        { name: "NBN Batteries", href: "/battery-replacement/nbn" },
      ],
    },
    { name: "Service Area", href: "/service-area" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
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
            <Link href="/" className="cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <img
                  src="/logo.webp"
                  alt="Battery Australia Logo"
                  className="h-10 w-auto object-contain cursor-pointer"
                />
              </motion.div>
            </Link>

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
                      className="absolute top-full left-0 pt-4 w-56 z-50"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-2">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium flex items-center justify-between group"
                          >
                            <span>{item.name}</span>
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
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
                <PhoneIcon className="w-4 h-4" />
                <span>Call Now</span>
              </motion.a>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-black focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-black stroke-[2.5]" /> : <Menu className="w-6 h-6 text-black stroke-[2.5]" />}
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
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                        >
                          {item.name}
                        </Link>
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
                <PhoneIcon className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
